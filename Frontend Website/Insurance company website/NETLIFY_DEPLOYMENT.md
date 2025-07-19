# 🚀 Netlify Deployment Guide

## ❌ **Current Issue:**
You're seeing a "Page not found" error on Netlify. This is a common deployment configuration issue.

## ✅ **Solution:**

### **Method 1: Drag & Drop (Recommended)**

1. **Go to [Netlify](https://netlify.com)**
2. **Drag and drop ONLY this folder:** `Frontend Website/Insurance company website`
3. **Wait for deployment** - Netlify will automatically detect it's a static site
4. **Your site will be live!** 🎉

### **Method 2: GitHub Integration**

1. **Connect your GitHub repository:** [https://github.com/dhruv-990/IBM_frontend](https://github.com/dhruv-990/IBM_frontend)
2. **Set these deployment settings:**
   - **Build command:** Leave empty (not needed for static sites)
   - **Publish directory:** Leave as root (since we're deploying the frontend folder directly)
3. **Deploy!**

### **Method 3: Manual Upload**

1. **Zip the folder:** `Frontend Website/Insurance company website`
2. **Upload to Netlify**
3. **Deploy!**

## 🔧 **Troubleshooting:**

### **If you still get 404 errors:**

1. **Check your Netlify dashboard:**
   - Go to your site settings
   - Look for "Build & deploy" section
   - Verify the publish directory is correct

2. **Common fixes:**
   - **Publish directory:** Should be empty (root) if you're uploading the frontend folder directly
   - **Build command:** Leave empty for static sites
   - **Deploy log:** Check for any build errors

3. **File structure verification:**
   ```
   Your uploaded folder should contain:
   ├── index.html          ✅ (main entry point)
   ├── css/                ✅ (stylesheets)
   ├── js/                 ✅ (JavaScript)
   ├── img/                ✅ (images)
   └── lib/                ✅ (libraries)
   ```

## 🎯 **Expected Result:**

After successful deployment, you should see:
- ✅ **LifeSure Insurance homepage** with navigation
- ✅ **All pages working** (About, Services, Blog, etc.)
- ✅ **Responsive design** on all devices
- ✅ **Connected to Railway backend** for functionality

## 🔗 **Your Backend:**
- **Railway URL:** `https://modest-enjoyment-production.up.railway.app`
- **Frontend will connect to this backend** for login, blogs, and policies

## 📞 **Need Help?**

If you're still having issues:
1. **Check Netlify deployment logs**
2. **Verify file structure** matches above
3. **Try Method 1 (drag & drop)** - it's the most reliable

---

**Your LifeSure Insurance frontend is ready to deploy!** 🛡️ 