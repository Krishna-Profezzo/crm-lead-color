#!/bin/bash

# Script to push the lead_gender app to GitHub
# Run this script after setting up your GitHub personal access token

echo "Pushing lead_gender app to GitHub..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Git repository not initialized. Initializing..."
    git init
    git add .
    git commit -m "Initial commit: Lead Gender app with custom fields and color-coded status pills"
    git branch -m main
fi

# Add remote if not already added
if ! git remote | grep -q origin; then
    echo "Adding remote repository..."
    git remote add origin https://github.com/Krishna-Profezzo/crm-lead-color.git
fi

# Ask for GitHub token
read -sp "Enter your GitHub personal access token: " GITHUB_TOKEN
echo

# Update remote URL with token
git remote set-url origin https://${GITHUB_TOKEN}@github.com/Krishna-Profezzo/crm-lead-color.git

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "Successfully pushed to GitHub!"
    echo "Repository URL: https://github.com/Krishna-Profezzo/crm-lead-color"
else
    echo "Failed to push to GitHub. Please check your token and try again."
    echo "You can also push manually with:"
    echo "  git push -u origin main"
fi