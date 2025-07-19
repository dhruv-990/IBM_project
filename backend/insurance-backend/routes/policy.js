// routes/policy.js
const express = require('express');
const router = express.Router();
const Policy = require('../models/Policy');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// CREATE - Buy new policy
router.post('/buy', authenticateToken, async (req, res) => {
  try {
    const {
      policyHolderName,
      type,
      coverage,
      premium,
      coverageAmount,
      startDate,
      endDate,
      paymentFrequency,
      notes
    } = req.body;

    // Validate required fields
    if (!policyHolderName || !type || !coverage || !premium || !coverageAmount || !startDate || !endDate) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    // Generate unique policy number
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const policyNumber = `POL-${year}-${random}`;

    // Create policy object
    const policyData = {
      userId: req.user.userId,
      policyNumber: policyNumber,
      policyHolderName,
      type,
      coverage,
      premium: Number(premium),
      coverageAmount: Number(coverageAmount),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      paymentFrequency: paymentFrequency || 'Monthly',
      notes: notes || ''
    };

    const newPolicy = new Policy(policyData);
    const savedPolicy = await newPolicy.save();
    
    res.status(201).json({
      success: true,
      message: 'Policy purchased successfully',
      policy: savedPolicy
    });
  } catch (err) {
    console.error('Policy creation error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Server error during policy creation',
      error: err.message 
    });
  }
});

// READ ALL - Get user's policies
router.get('/my-policies', authenticateToken, async (req, res) => {
  try {
    const policies = await Policy.find({ userId: req.user.userId })
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      policies: policies
    });
  } catch (err) {
    console.error('Error fetching user policies:', err);
    res.status(500).json({ 
      success: false,
      message: "Server error while fetching policies",
      error: err.message 
    });
  }
});

// READ ALL - Admin only
router.get('/', async (req, res) => {
  try {
    const policies = await Policy.find().populate('userId', 'username email');
    res.status(200).json({
      success: true,
      policies: policies
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: "Server error while fetching policies",
      error: err.message 
    });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    res.status(200).json(policy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Update existing policy
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    
    if (!policy) {
      return res.status(404).json({
        success: false,
        message: 'Policy not found'
      });
    }
    
    // Check if user owns this policy
    if (policy.userId.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'You can only update your own policies'
      });
    }
    
    const updatedPolicy = await Policy.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      success: true,
      message: 'Policy updated successfully',
      policy: updatedPolicy
    });
  } catch (err) {
    console.error('Policy update error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Server error during policy update',
      error: err.message 
    });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Policy.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Policy deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
