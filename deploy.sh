#!/bin/bash

echo "🚀 LifeSure Insurance App - Deployment Script"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - LifeSure Insurance App"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📋 Next Steps:"
echo "=============="
echo ""
echo "1. 🗄️  Set up MongoDB Atlas:"
echo "   - Go to https://www.mongodb.com/atlas"
echo "   - Create free account and cluster"
echo "   - Get your connection string"
echo ""
echo "2. 🔧 Deploy Backend to Railway:"
echo "   - Go to https://railway.app"
echo "   - Connect your GitHub repository"
echo "   - Add environment variables:"
echo "     MONGO_URI=your_mongodb_connection_string"
echo "     JWT_SECRET=your_secret_key"
echo "     PORT=3000"
echo ""
echo "3. 🌐 Deploy Frontend to Netlify:"
echo "   - Go to https://netlify.com"
echo "   - Connect your GitHub repository"
echo "   - Set publish directory: Frontend Website/Insurance company website"
echo ""
echo "4. 🔗 Update API URLs:"
echo "   - Replace localhost:3000 with your Railway URL"
echo "   - Update all frontend files"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
echo "🎯 Your app will be live and ready for multiple users!" 