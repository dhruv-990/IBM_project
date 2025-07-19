# 🚀 LifeSure Insurance App - Deployment Guide

## 📋 **Prerequisites**
- GitHub account
- Railway account (free tier)
- Netlify account (free tier)
- MongoDB Atlas account (free tier)

## 🗄️ **Step 1: Set Up MongoDB Atlas**

1. **Create MongoDB Atlas Account:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for free account
   - Create a new cluster (M0 Free tier)

2. **Configure Database:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Replace `<dbname>` with `lifesure_insurance`

3. **Get Connection String:**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/lifesure_insurance?retryWrites=true&w=majority
   ```

## 🔧 **Step 2: Deploy Backend to Railway**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lifesure-backend.git
   git push -u origin main
   ```

2. **Deploy to Railway:**
   - Go to [Railway](https://railway.app)
   - Sign in with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your backend repository
   - Add environment variables:
     ```
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/lifesure_insurance?retryWrites=true&w=majority
     JWT_SECRET=your_super_secret_key_here
     PORT=3000
     ```

3. **Get Backend URL:**
   - Railway will provide a URL like: `https://your-app-name.railway.app`
   - Save this URL for frontend configuration

## 🌐 **Step 3: Deploy Frontend to Netlify**

1. **Update API Configuration:**
   - Open `Frontend Website/Insurance company website/js/main.js`
   - Update `API_BASE_URL` to your Railway URL:
   ```javascript
   const API_BASE_URL = 'https://your-app-name.railway.app';
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository
   - Set build settings:
     - Build command: (leave empty)
     - Publish directory: `Frontend Website/Insurance company website`

3. **Get Frontend URL:**
   - Netlify will provide a URL like: `https://your-app-name.netlify.app`

## 🔗 **Step 4: Update Frontend API URLs**

Update all frontend files to use the deployed backend URL:

### **Files to Update:**
- `create-blog.html`
- `policies.html`
- `blog.html`
- `login.html`
- `js/main.js`

### **Example Update:**
```javascript
// Change from:
const API_BASE_URL = 'http://localhost:3000';

// To:
const API_BASE_URL = 'https://your-app-name.railway.app';
```

## ✅ **Step 5: Test Deployment**

1. **Test Backend:**
   - Visit: `https://your-app-name.railway.app/health`
   - Should return: `{"status":"OK","message":"Server is running"}`

2. **Test Frontend:**
   - Visit your Netlify URL
   - Test user registration and login
   - Test blog creation and policy management

## 🔧 **Environment Variables for Railway:**

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/lifesure_insurance?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_here
PORT=3000
```

## 📱 **Multi-User Features Ready:**

✅ **User Registration & Login**
✅ **User-Specific Blogs**
✅ **User-Specific Policies**
✅ **JWT Authentication**
✅ **Data Isolation**
✅ **Security Features**

## 🎯 **Final URLs:**

- **Frontend:** `https://your-app-name.netlify.app`
- **Backend:** `https://your-app-name.railway.app`
- **Health Check:** `https://your-app-name.railway.app/health`

## 🚀 **Your App is Now Live!**

Multiple users can now:
- Register and login
- Create insurance blogs
- Manage their policies
- Access their data securely

---

**Need Help?** Check Railway and Netlify documentation for detailed guides. 