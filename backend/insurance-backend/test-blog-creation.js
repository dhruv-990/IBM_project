const mongoose = require('mongoose');
const Blog = require('./models/Blog');

async function testBlogCreation() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/insurance_db');
    console.log('Connected to MongoDB');
    
    // Create a test blog
    const testBlog = new Blog({
      title: 'How to Choose the Right Life Insurance Policy',
      content: '<p>Life insurance is an essential financial tool that provides protection for your loved ones...</p>',
      excerpt: 'Learn how to select the perfect life insurance policy for your family\'s needs.',
      category: 'Life Insurance',
      tags: ['life insurance', 'financial planning', 'family protection'],
      image: 'img/blog-1.png',
      author: 'testuser',
      authorId: new mongoose.Types.ObjectId(),
      status: 'published'
    });
    
    await testBlog.save();
    console.log('Test blog created successfully:', testBlog.title);
    
    // Get all blogs
    const blogs = await Blog.find({}).select('-content');
    console.log('\n=== BLOGS IN DATABASE ===');
    console.log('Total blogs found:', blogs.length);
    
    blogs.forEach((blog, index) => {
      console.log(`\nBlog ${index + 1}:`);
      console.log('  Title:', blog.title);
      console.log('  Author:', blog.author);
      console.log('  Category:', blog.category);
      console.log('  Status:', blog.status);
      console.log('  Created:', blog.createdAt);
    });
    
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  } catch (error) {
    console.error('Error testing blog creation:', error);
  }
}

testBlogCreation(); 