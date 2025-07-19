const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Add a health check endpoint first
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// ✅ KEEP THESE:
const policyRoutes = require('./routes/policy');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

// ✅ ONLY USE EXISTING ROUTES:
app.use('/policy', policyRoutes);
app.use('/blog', blogRoutes);
app.use('/auth', authRoutes);

// MongoDB connection with better error handling
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    // Don't exit the process, let Railway handle it
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/health`);
});
