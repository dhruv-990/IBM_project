const mongoose = require('mongoose');
const User = require('./models/User');

async function checkUsers() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/insurance_db');
    console.log('Connected to MongoDB');
    
    // Get all users
    const users = await User.find({}).select('-password');
    console.log('\n=== USERS IN DATABASE ===');
    console.log('Total users found:', users.length);
    
    if (users.length === 0) {
      console.log('No users found in database');
    } else {
      users.forEach((user, index) => {
        console.log(`\nUser ${index + 1}:`);
        console.log('  ID:', user._id);
        console.log('  Username:', user.username);
        console.log('  Email:', user.email);
        console.log('  Role:', user.role);
        console.log('  Active:', user.isActive);
        console.log('  Created:', user.createdAt);
      });
    }
    
    // Check database collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n=== DATABASE COLLECTIONS ===');
    collections.forEach(collection => {
      console.log('-', collection.name);
    });
    
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  } catch (error) {
    console.error('Error checking users:', error);
  }
}

checkUsers(); 