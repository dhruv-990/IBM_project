// Configuration for LifeSure Insurance App
const CONFIG = {
    // Railway backend URL (production) - Updated to new deployment
    API_BASE_URL: 'https://web-production-3d1fa.up.railway.app',
    
    // Local development URL (for testing)
    LOCAL_API_URL: 'http://localhost:3000',
    
    // App settings
    APP_NAME: 'LifeSure Insurance',
    VERSION: '1.0.0',
    
    // API endpoints
    ENDPOINTS: {
        AUTH: {
            LOGIN: '/auth/login',
            REGISTER: '/auth/register',
            LOGOUT: '/auth/logout'
        },
        POLICY: {
            BUY: '/policy/buy',
            MY_POLICIES: '/policy/my-policies',
            UPDATE: '/policy',
            DELETE: '/policy'
        },
        BLOG: {
            CREATE: '/blog/create',
            GET_ALL: '/blog',
            GET_ONE: '/blog',
            UPDATE: '/blog',
            DELETE: '/blog',
            MY_BLOGS: '/blog/my-blogs'
        }
    }
};

// Helper function to get API URL
function getApiUrl() {
    // Check if we're in development or production
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocalhost ? CONFIG.LOCAL_API_URL : CONFIG.API_BASE_URL;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 