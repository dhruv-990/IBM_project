// models/Policy.js
const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  policyNumber: { 
    type: String, 
    required: false, 
    unique: true 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  policyHolderName: { 
    type: String, 
    required: true 
  },
  type: { 
    type: String, 
    required: true,
    enum: ['Life Insurance', 'Health Insurance', 'Auto Insurance', 'Home Insurance', 'Business Insurance', 'Travel Insurance']
  },
  coverage: {
    type: String,
    required: true
  },
  premium: { 
    type: Number, 
    required: true 
  },
  coverageAmount: {
    type: Number,
    required: true
  },
  startDate: { 
    type: Date, 
    required: true 
  },
  endDate: { 
    type: Date, 
    required: true 
  },
  status: {
    type: String,
    enum: ['Active', 'Expired', 'Cancelled', 'Pending'],
    default: 'Active'
  },
  paymentFrequency: {
    type: String,
    enum: ['Monthly', 'Quarterly', 'Yearly'],
    default: 'Monthly'
  },
  lastPaymentDate: {
    type: Date,
    default: Date.now
  },
  nextPaymentDate: {
    type: Date
  },
  documents: [{
    name: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Generate policy number
policySchema.pre('save', function(next) {
  if (this.isNew && !this.policyNumber) {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    this.policyNumber = `POL-${year}-${random}`;
  }
  next();
});

module.exports = mongoose.model('Policy', policySchema);
