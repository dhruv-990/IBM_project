#!/bin/bash

echo "🚀 Redeploying Backend to Railway..."

# Navigate to backend directory
cd backend/insurance-backend

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Please install it first:"
    echo "npm install -g @railway/cli"
    exit 1
fi

# Login to Railway (if not already logged in)
echo "🔐 Logging into Railway..."
railway login

# Link to Railway project (if not already linked)
echo "🔗 Linking to Railway project..."
railway link

# Deploy to Railway
echo "📦 Deploying to Railway..."
railway up

echo "✅ Deployment completed!"
echo "🌐 Your backend should be available at: https://your-app-name.railway.app"
echo "🔍 Check the Railway dashboard for the exact URL" 