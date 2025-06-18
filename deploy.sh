#!/bin/bash

# OSINT Terminal - GitHub Pages Deployment Script
# This script helps deploy the OSINT Terminal to GitHub Pages

echo "🚀 OSINT Terminal - GitHub Pages Deployment"
echo "==========================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository detected"
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (default: 'Deploy OSINT Terminal'): " commit_msg
commit_msg=${commit_msg:-"Deploy OSINT Terminal"}
git commit -m "$commit_msg"

# Set main branch
echo "🔄 Setting up main branch..."
git branch -M main

# Ask for repository URL if not set
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Setting up remote repository..."
    read -p "Enter your GitHub repository URL: " repo_url
    git remote add origin "$repo_url"
else
    echo "✅ Remote repository already configured"
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo ""
echo "🎉 Deployment Complete!"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Save and wait for deployment"
echo ""
echo "Your OSINT Terminal will be available at:"
echo "https://yourusername.github.io/your-repo-name"
echo ""
echo "🔐 Security Notes:"
echo "- The platform works entirely client-side"
echo "- No sensitive data is stored or transmitted"
echo "- All APIs use free/public endpoints"
echo "- HTTPS is enforced by GitHub Pages"
echo ""
echo "✨ Features enabled:"
echo "- Real phone number analysis"
echo "- Live IP geolocation"
echo "- Email intelligence gathering"
echo "- Vehicle registration lookup"
echo "- Username scanning across 30+ platforms"
echo "- Bank IFSC code validation"
echo ""
echo "Happy investigating! 🕵️‍♂️"

