const fetch = require('node-fetch');

const API_BASE_URL = 'http://localhost:3000';

async function testAPI() {
  console.log('Testing API endpoints...\n');

  // Test health endpoint
  try {
    const healthResponse = await fetch(`${API_BASE_URL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }

  // Test blog endpoints
  try {
    const blogResponse = await fetch(`${API_BASE_URL}/blog`);
    const blogData = await blogResponse.json();
    console.log('✅ Blog list:', Array.isArray(blogData) ? `${blogData.length} blogs found` : 'Error');
  } catch (error) {
    console.log('❌ Blog list failed:', error.message);
  }

  // Test policy endpoints (without auth)
  try {
    const policyResponse = await fetch(`${API_BASE_URL}/policy`);
    const policyData = await policyResponse.json();
    console.log('✅ Policy list:', policyData.success ? `${policyData.policies?.length || 0} policies found` : 'Error');
  } catch (error) {
    console.log('❌ Policy list failed:', error.message);
  }

  console.log('\nAPI test completed!');
}

testAPI(); 