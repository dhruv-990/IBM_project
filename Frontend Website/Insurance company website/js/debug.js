// Debug utility for API issues
window.debugAPI = {
    // Test API connectivity
    testConnection: async function() {
        try {
            const apiUrl = getApiUrl();
            console.log('Testing connection to:', apiUrl);
            
            const response = await fetch(`${apiUrl}/health`);
            const data = await response.json();
            
            console.log('✅ API Connection successful:', data);
            return true;
        } catch (error) {
            console.error('❌ API Connection failed:', error);
            return false;
        }
    },
    
    // Test authentication
    testAuth: async function() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('❌ No token found');
                return false;
            }
            
            const apiUrl = getApiUrl();
            const response = await fetch(`${apiUrl}/policy/my-policies`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            const data = await response.json();
            console.log('✅ Authentication test:', data.success ? 'Success' : 'Failed');
            return data.success;
        } catch (error) {
            console.error('❌ Authentication test failed:', error);
            return false;
        }
    },
    
    // Log all API calls
    logAPICall: function(endpoint, method, data) {
        console.log(`🌐 API Call: ${method} ${endpoint}`, data);
    },
    
    // Show current configuration
    showConfig: function() {
        console.log('🔧 Current Configuration:', {
            apiUrl: getApiUrl(),
            token: localStorage.getItem('token') ? 'Present' : 'Missing',
            user: localStorage.getItem('user') ? 'Present' : 'Missing'
        });
    },
    
    // Retry function for failed requests
    retryRequest: async function(fetchFunction, maxRetries = 3, delay = 1000) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const result = await fetchFunction();
                return result;
            } catch (error) {
                console.log(`Attempt ${attempt} failed:`, error.message);
                
                if (attempt === maxRetries) {
                    throw error;
                }
                
                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, delay * attempt));
            }
        }
    },
    
    // Test if the application is working correctly
    testApp: async function() {
        console.log('🧪 Testing application...');
        
        // Test 1: Configuration
        this.showConfig();
        
        // Test 2: API Connection
        const connectionOk = await this.testConnection();
        if (!connectionOk) {
            console.log('❌ API connection failed');
            return false;
        }
        
        // Test 3: Authentication (if logged in)
        const token = localStorage.getItem('token');
        if (token) {
            const authOk = await this.testAuth();
            console.log('🔐 Authentication:', authOk ? 'OK' : 'Failed');
        } else {
            console.log('🔐 No authentication token found (user not logged in)');
        }
        
        console.log('✅ Application test completed');
        return true;
    }
};

// Override fetch to log all API calls
const originalFetch = window.fetch;
window.fetch = function(...args) {
    if (window.debugAPI) {
        window.debugAPI.logAPICall(args[0], args[1]?.method || 'GET', args[1]?.body);
    }
    return originalFetch.apply(this, args);
}; 