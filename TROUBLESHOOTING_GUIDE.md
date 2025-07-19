# 🔧 Troubleshooting Guide: Policy and Blog Runtime Updates

## 🚨 **Issue: Policies and Blogs Not Updating at Runtime**

### **Root Causes Identified:**

1. **API URL Configuration Issues**
2. **Missing Real-time Updates**
3. **CORS Configuration Problems**
4. **Authentication Token Issues**
5. **Frontend-Backend Communication Problems**

---

## ✅ **Solutions Implemented:**

### **1. Fixed API URL Configuration**
- Updated `config.js` to use correct Railway URL
- Added dynamic URL detection (localhost vs production)
- Centralized API endpoint configuration

### **2. Added Real-time Updates**
- Implemented polling mechanism (30-second intervals)
- Added page visibility detection for immediate updates
- Automatic refresh when switching tabs

### **3. Improved CORS Configuration**
- Enhanced backend CORS settings
- Added proper headers and methods
- Allowed all origins for development/production

### **4. Enhanced Error Handling**
- Added comprehensive logging to backend routes
- Improved frontend error messages
- Added debugging utilities

---

## 🛠️ **How to Test:**

### **Step 1: Check Backend Status**
```bash
# Test health endpoint
curl https://modest-enjoyment-production.up.railway.app/health
```

### **Step 2: Test Frontend Connectivity**
1. Open browser console (F12)
2. Run: `debugAPI.testConnection()`
3. Run: `debugAPI.showConfig()`

### **Step 3: Test Authentication**
1. Login to the application
2. Run: `debugAPI.testAuth()`

### **Step 4: Test Real-time Updates**
1. Open policies.html or blog.html
2. Make changes in another tab
3. Switch back - data should auto-refresh

---

## 🔍 **Debugging Commands:**

### **Browser Console Commands:**
```javascript
// Test API connection
debugAPI.testConnection()

// Test authentication
debugAPI.testAuth()

// Show current configuration
debugAPI.showConfig()

// Check if real-time updates are running
console.log(realTimeUpdates.intervals)
```

### **Backend Logs:**
```bash
# Check backend logs for policy updates
# Look for: "Policy update request:", "Policy updated successfully:"

# Check backend logs for blog updates  
# Look for: "Blog update request:", "Blog updated successfully:"
```

---

## 🚀 **Quick Fixes:**

### **If Updates Still Don't Work:**

1. **Clear Browser Cache:**
   - Press Ctrl+Shift+R (hard refresh)
   - Or clear browser cache completely

2. **Check Network Tab:**
   - Open DevTools → Network tab
   - Look for failed API calls
   - Check response status codes

3. **Verify Token:**
   ```javascript
   // In browser console
   console.log('Token:', localStorage.getItem('token'))
   console.log('User:', localStorage.getItem('user'))
   ```

4. **Test API Directly:**
   ```javascript
   // Test policy creation
   fetch('https://modest-enjoyment-production.up.railway.app/policy/my-policies', {
     headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
   }).then(r => r.json()).then(console.log)
   ```

---

## 📋 **Common Issues & Solutions:**

### **Issue: "Network Error"**
- **Cause:** CORS or connectivity issues
- **Solution:** Check if backend is running and accessible

### **Issue: "Unauthorized"**
- **Cause:** Invalid or expired token
- **Solution:** Re-login to get fresh token

### **Issue: "Policy not found"**
- **Cause:** Wrong policy ID or ownership
- **Solution:** Check if user owns the policy

### **Issue: "Blog not found"**
- **Cause:** Wrong blog ID or permissions
- **Solution:** Check if user is author or admin

---

## 🔧 **Manual Testing Steps:**

1. **Create a Policy:**
   - Go to policies.html
   - Fill form and submit
   - Check if it appears in list immediately

2. **Update a Policy:**
   - Click edit on existing policy
   - Make changes and save
   - Check if changes appear immediately

3. **Create a Blog:**
   - Go to create-blog.html
   - Fill form and publish
   - Check if it appears in blog list

4. **Delete a Blog:**
   - Go to blog.html
   - Click delete on a blog
   - Check if it disappears immediately

---

## 📞 **If Problems Persist:**

1. **Check Backend Logs:**
   - Look for error messages
   - Check MongoDB connection
   - Verify environment variables

2. **Test API Endpoints:**
   ```bash
   # Test health
   curl https://modest-enjoyment-production.up.railway.app/health
   
   # Test blogs (no auth required)
   curl https://modest-enjoyment-production.up.railway.app/blog
   ```

3. **Check Frontend Console:**
   - Look for JavaScript errors
   - Check network requests
   - Verify API responses

---

## ✅ **Expected Behavior After Fixes:**

- ✅ Policies update immediately after creation/editing
- ✅ Blogs update immediately after creation/deletion
- ✅ Real-time polling every 30 seconds
- ✅ Auto-refresh when switching tabs
- ✅ Proper error messages for failed operations
- ✅ Debug information in browser console

---

## 🎯 **Success Indicators:**

1. **Immediate Updates:** Changes appear instantly
2. **No Console Errors:** Clean browser console
3. **Successful API Calls:** All requests return 200/201
4. **Real-time Polling:** Data refreshes automatically
5. **Proper Authentication:** Token-based access working

---

**Last Updated:** $(date)
**Status:** ✅ Fixed and Tested 