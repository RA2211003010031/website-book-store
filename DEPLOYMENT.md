# GitHub Repository Setup & Deployment Guide 🚀

## Step 1: Create GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and log in
2. **Create New Repository**: Click the "+" icon → "New repository"
3. **Repository Details**:
   - Repository name: `online-book-bazaar`
   - Description: `A modern online bookstore website featuring Indian and international literature`
   - Make it Public (so your team can access it)
   - DON'T initialize with README (we already have one)

## Step 2: Push to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Navigate to your project directory
cd "/Users/adarshraj/Desktop/website book store"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/online-book-bazaar.git

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Enable GitHub Pages (Free Hosting) or any personal host

1. **Go to Repository Settings**: Click "Settings" tab in your repository
2. **Find Pages Section**: Scroll down to "Pages" in the left sidebar
3. **Configure Source**: 
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. **Save**: Click "Save"
5. **Get Your URL**: GitHub will provide a URL like `https://YOUR_USERNAME.github.io/online-book-bazaar/`

## Step 4: Share with Your Team

Your team can now:

### View the Live Website
- Visit: `https://YOUR_USERNAME.github.io/online-book-bazaar/`

### Access the Code
1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/online-book-bazaar.git
   ```

2. **Or download ZIP**:
   - Click the green "Code" button
   - Select "Download ZIP"

### Collaborate on the Project
1. **Add team members as collaborators**:
   - Go to Settings → Manage access
   - Click "Invite a collaborator"
   - Enter their GitHub username or email

2. **Team members can contribute**:
   ```bash
   # Clone the repo
   git clone https://github.com/YOUR_USERNAME/online-book-bazaar.git
   
   # Make changes
   # ... edit files ...
   
   # Commit and push changes
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## Step 5: Local Development Setup

For development with auto-reload:

```bash
# Install live-server globally (one time setup)
npm install -g live-server

# Navigate to project directory
cd "/Users/adarshraj/Desktop/website book store"

# Start development server
npm start
# OR
live-server --port=3000
```

The website will open at `http://localhost:3000` with auto-reload on file changes.

## Quick Commands Reference

```bash
# Check git status
git status

# Add files to staging
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main

# Check current remote
git remote -v
```

## Troubleshooting

### If you get permission errors:
```bash
# Use SSH instead of HTTPS
git remote set-url origin git@github.com:YOUR_USERNAME/online-book-bazaar.git
```

### If you need to force push (be careful!):
```bash
git push -f origin main
```

### If GitHub Pages is not working:
1. Check that index.html is in the root directory
2. Wait 5-10 minutes after enabling Pages
3. Check repository settings → Pages section for any errors

## Repository Structure After Setup

```
online-book-bazaar/
├── .git/              # Git repository data
├── .gitignore         # Files to ignore in Git
├── index.html         # Main website file
├── styles.css         # Styling
├── script.js          # JavaScript functionality
├── package.json       # Project configuration
├── README.md          # Project documentation
└── DEPLOYMENT.md      # This deployment guide
```

## Next Steps

1. **Test the live website** - Make sure everything works online
2. **Share the GitHub link** with your team
3. **Add team members** as collaborators
4. **Start collaborating** - team members can clone and contribute
5. **Consider adding features** like payment integration, user dashboard, etc.

---

**🎉 Your Online Book Bazaar is now live on GitHub and ready for team collaboration!**
