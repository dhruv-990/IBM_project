const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ KEEP THESE:
const policyRoutes = require('./routes/policy');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

// ✅ ONLY USE EXISTING ROUTES:
app.use('/policy', policyRoutes);
app.use('/blog', blogRoutes);
app.use('/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Add a health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});
