#!/bin/bash

echo "🚀 Setting up Backend-Only Deployment for Railway"
echo "=================================================="

# Create backend-only directory
echo "📁 Creating backend-only directory..."
mkdir -p lifesure-backend-deploy
cd lifesure-backend-deploy

# Copy backend files
echo "📋 Copying backend files..."
cp -r ../backend/insurance-backend/* .

# Create .gitignore
echo "📝 Creating .gitignore..."
cat > .gitignore << EOF
node_modules/
.env
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF

# Initialize git
echo "🔧 Initializing Git repository..."
git init
git add .
git commit -m "Initial backend deployment"

echo ""
echo "✅ Backend-only directory created!"
echo ""
echo "📋 Next Steps:"
echo "=============="
echo ""
echo "1. Create a new GitHub repository:"
echo "   - Go to GitHub.com"
echo "   - Create new repository: lifesure-backend"
echo "   - Don't initialize with README"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/lifesure-backend.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Railway:"
echo "   - Go to Railway.app"
echo "   - Connect to your new GitHub repository"
echo "   - Add environment variables:"
echo "     MONGO_URI=your_mongodb_connection_string"
echo "     JWT_SECRET=your_secret_key"
echo ""
echo "🎯 This will deploy only the backend without the confusing root files!" 