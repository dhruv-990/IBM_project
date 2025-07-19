const mongoose = require('mongoose');
const User = require('./models/User');

async function testUserModel() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/insurance_db');
    console.log('Connected to MongoDB');

    // Test creating a user with unique username
    const testUser = new User({
      username: 'testuser' + Date.now(),
      email: 'test' + Date.now() + '@test.com',
      password: 'password123'
    });

    console.log('User object created:', testUser);

    // Try to save the user
    const savedUser = await testUser.save();
    console.log('User saved successfully:', savedUser);

    // Clean up - delete the test user
    await User.findByIdAndDelete(savedUser._id);
    console.log('Test user deleted');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error testing User model:', error);
    console.error('Error stack:', error.stack);
  }
}

testUserModel(); 