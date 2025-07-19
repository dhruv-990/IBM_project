const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
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

// Create a blog (requires authentication)
router.post('/create', authenticateToken, async (req, res) => {
  try {
    const { title, content, category, tags, image, excerpt } = req.body;
    
    // Validate required fields
    if (!title || !content || !category) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title, content, and category are required' 
      });
    }

    const blog = new Blog({
      title,
      content,
      category,
      tags: tags || [],
      image: image || '',
      excerpt: excerpt || '',
      author: req.user.username,
      authorId: req.user.userId,
      status: 'published'
    });

    await blog.save();

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      blog: {
        id: blog._id,
        title: blog.title,
        category: blog.category,
        author: blog.author,
        createdAt: blog.createdAt
      }
    });
  } catch (error) {
    console.error('Blog creation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during blog creation',
      error: error.message 
    });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a blog
router.put('/:id', async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: "Blog not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a blog (requires authentication)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ 
        success: false, 
        message: "Blog not found" 
      });
    }
    
    // Check if user is the author or admin
    if (blog.authorId.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ 
        success: false, 
        message: "You can only delete your own blogs" 
      });
    }
    
    await Blog.findByIdAndDelete(req.params.id);
    
    res.json({ 
      success: true,
      message: "Blog deleted successfully" 
    });
  } catch (error) {
    console.error('Blog deletion error:', error);
    res.status(500).json({ 
      success: false,
      message: "Server error during blog deletion",
      error: error.message 
    });
  }
});

// Get user's own blogs
router.get('/my-blogs', authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find({ authorId: req.user.userId })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      blogs: blogs
    });
  } catch (error) {
    console.error('Error fetching user blogs:', error);
    res.status(500).json({ 
      success: false,
      message: "Server error while fetching blogs",
      error: error.message 
    });
  }
});

module.exports = router;
