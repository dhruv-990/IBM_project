# 🚂 Railway Deployment Troubleshooting

## ❌ **Common Railway Deployment Issues & Solutions**

### **1. Build Failures**

**Problem:** Build fails during npm install
**Solution:**
- Check if all dependencies are in package.json
- Ensure Node.js version is specified in engines
- Remove unnecessary dependencies

### **2. Environment Variables Missing**

**Problem:** App crashes due to missing MONGO_URI
**Solution:**
- Go to Railway Dashboard → Your Project → Variables
- Add these environment variables:
  ```
  MONGO_URI=your_mongodb_atlas_connection_string
  JWT_SECRET=your_secret_key_here
  PORT=3000
  ```

### **3. MongoDB Connection Issues**

**Problem:** "MongoDB connection error"
**Solution:**
- Check if MongoDB Atlas connection string is correct
- Ensure IP whitelist includes Railway's IPs (0.0.0.0/0)
- Verify database username and password

### **4. Port Binding Issues**

**Problem:** "EADDRINUSE" or port conflicts
**Solution:**
- Railway automatically sets PORT environment variable
- Use `process.env.PORT || 3000` in server.js
- Bind to `0.0.0.0` instead of `localhost`

### **5. Health Check Failures**

**Problem:** Railway can't verify app is running
**Solution:**
- Ensure health endpoint is accessible
- Check if server starts properly
- Verify all routes are working

## 🔧 **Quick Fixes**

### **1. Force Redeploy:**
```bash
# In Railway Dashboard:
# 1. Go to Deployments tab
# 2. Click "Redeploy" on latest deployment
```

### **2. Check Logs:**
```bash
# In Railway Dashboard:
# 1. Go to your project
# 2. Click "Deployments"
# 3. Click on latest deployment
# 4. Check "Build Logs" and "Deploy Logs"
```

### **3. Verify Environment Variables:**
```bash
# In Railway Dashboard:
# 1. Go to Variables tab
# 2. Ensure these are set:
#    - MONGO_URI
#    - JWT_SECRET
#    - PORT (auto-set by Railway)
```

## ✅ **Successful Deployment Checklist**

- [ ] All dependencies in package.json
- [ ] Node.js version specified in engines
- [ ] Environment variables set in Railway
- [ ] MongoDB Atlas connection string correct
- [ ] Health endpoint accessible at `/health`
- [ ] Server binds to `0.0.0.0:PORT`
- [ ] No hardcoded localhost URLs

## 🆘 **Still Having Issues?**

1. **Check Railway Logs:** Look for specific error messages
2. **Test Locally:** Ensure app runs with `npm start`
3. **Verify MongoDB:** Test connection string locally
4. **Check Dependencies:** Ensure all required packages are listed

## 📞 **Railway Support**

- **Documentation:** https://docs.railway.app
- **Community:** https://discord.gg/railway
- **Status:** https://status.railway.app 