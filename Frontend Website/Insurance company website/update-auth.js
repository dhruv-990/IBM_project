// This script helps update all HTML pages with authentication functionality
// To use this script, you need to:

// 1. Replace the navigation section in each HTML file with:
/*
<div class="nav-btn px-3">
    <button class="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0"
        data-bs-toggle="modal" data-bs-target="#searchModal"><i
            class="fas fa-search"></i></button>
    <!-- Login button - shown when user is not logged in -->
    <a href="login.html" id="loginBtn" class="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0">Login</a>
    
    <!-- User info - shown when user is logged in -->
    <div id="userInfo" class="d-none">
        <div class="dropdown">
            <button class="btn btn-outline-primary rounded-pill py-2 px-4 ms-3 dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user me-2"></i><span id="userName">User</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="#"><i class="fas fa-user-cog me-2"></i>Profile</a></li>
                <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Settings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="logoutBtn"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
            </ul>
        </div>
    </div>
</div>
*/

// 2. Add this script before the closing </body> tag:
/*
<!-- Authentication Script -->
<script>
    // Check if user is logged in on page load
    document.addEventListener('DOMContentLoaded', function() {
        checkAuthStatus();
    });

    // Function to check authentication status
    function checkAuthStatus() {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        const loginBtn = document.getElementById('loginBtn');
        const userInfo = document.getElementById('userInfo');
        const userName = document.getElementById('userName');
        
        if (token && user.username) {
            // User is logged in
            loginBtn.classList.add('d-none');
            userInfo.classList.remove('d-none');
            userName.textContent = user.username;
        } else {
            // User is not logged in
            loginBtn.classList.remove('d-none');
            userInfo.classList.add('d-none');
        }
    }

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Clear local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Update UI
        checkAuthStatus();
        
        // Show logout message
        alert('You have been logged out successfully!');
        
        // Redirect to home page
        window.location.href = 'index.html';
    });

    // Function to update user display (called from login page)
    function updateUserDisplay() {
        checkAuthStatus();
    }
</script>
*/

console.log('Authentication update instructions loaded. Apply the above code to all HTML pages.'); 