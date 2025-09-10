# Ubuntu Terminal Guide for Online Book Bazaar - DevOps Project 🐧

A complete guide for setting up and working with the Online Book Bazaar website on Ubuntu terminal (AWS EC2 t2.micro instance).

## Table of Contents 📋
1. [Initial Ubuntu Setup](#initial-ubuntu-setup)
2. [Installing Required Software](#installing-required-software)
3. [GitHub Setup and Authentication](#github-setup-and-authentication)
4. [Git Commands and Workflow](#git-commands-and-workflow)
5. [File Editing with Nano](#file-editing-with-nano)
6. [Running the Website](#running-the-website)
7. [Branch Management](#branch-management)
8. [Common Issues and Solutions](#common-issues-and-solutions)
9. [Team Collaboration Workflow](#team-collaboration-workflow)

---

## Initial Ubuntu Setup 🚀

### Connect to Your AWS EC2 Instance

**For Windows Users:**
```bash
# Using PuTTY or Windows Subsystem for Linux (WSL)
ssh -i "your-key.pem" ubuntu@your-ec2-public-ip

# Example:
ssh -i "mykey.pem" ubuntu@52.23.45.67
```

**For Mac Users:**
```bash
# Using Terminal
ssh -i "your-key.pem" ubuntu@your-ec2-public-ip

# Make sure key has correct permissions
chmod 400 your-key.pem
```

### Update System Packages
```bash
# Update package lists
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y

# Check Ubuntu version
lsb_release -a
```

---

## Installing Required Software 📦

### Install Essential Tools
```bash
# Install curl, wget, and other essentials
sudo apt install -y curl wget git nano vim htop

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installations
node --version
npm --version
git --version
```

### Install Python (if not already installed)
```bash
# Install Python 3 and pip
sudo apt install -y python3 python3-pip

# Check Python version
python3 --version
```

---

## GitHub Setup and Authentication 🔑

### Configure Git (First Time Setup)
```bash
# Set your Git username
git config --global user.name "Your Full Name"

# Set your Git email
git config --global user.email "your.email@example.com"

# Check configuration
git config --list
```

### GitHub Authentication Options

#### Option 1: Using Personal Access Token (Recommended)
```bash
# 1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
# 2. Generate new token with repo permissions
# 3. Copy the token

# When cloning, use your username and token as password
git clone https://github.com/username/online-book-bazaar.git
# Username: your-github-username
# Password: your-personal-access-token
```

#### Option 2: Using SSH Key (More Secure)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Press Enter for default location
# Press Enter for no passphrase (or set one)

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Go to GitHub → Settings → SSH and GPG keys → New SSH key
# Paste the public key content

# Test SSH connection
ssh -T git@github.com

# Clone using SSH
git clone git@github.com:username/online-book-bazaar.git
```

### Cache Git Credentials (For HTTPS)
```bash
# Cache credentials for 1 hour
git config --global credential.helper 'cache --timeout=3600'

# Or cache for 24 hours
git config --global credential.helper 'cache --timeout=86400'
```

---

## Git Commands and Workflow 🌳

### Basic Git Operations

#### Clone Repository
```bash
# Clone the repository
git clone https://github.com/username/online-book-bazaar.git

# Navigate to project directory
cd online-book-bazaar

# Check repository status
git status

# List all files (including hidden)
ls -la
```

#### Check Repository Information
```bash
# View remote repositories
git remote -v

# Check current branch
git branch

# Check commit history
git log --oneline

# Check differences
git diff
```

### Branch Management 🌿

#### Create and Switch Branches
```bash
# Create a new branch
git branch feature/new-functionality

# Switch to the branch
git checkout feature/new-functionality

# Or create and switch in one command
git checkout -b feature/new-functionality

# List all branches
git branch -a

# Check current branch
git branch --show-current
```

#### Working with Branches
```bash
# Make changes to files, then add them
git add .

# Commit changes
git commit -m "Add new functionality"

# Push branch to GitHub
git push origin feature/new-functionality

# Switch back to main branch
git checkout main

# Update main branch
git pull origin main
```

#### Merging Branches
```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature/new-functionality

# Delete merged branch (locally)
git branch -d feature/new-functionality

# Delete branch on GitHub
git push origin --delete feature/new-functionality
```

### Advanced Git Operations

#### Pulling Changes from Remote
```bash
# Fetch changes from remote
git fetch origin

# Pull and merge changes
git pull origin main

# Pull changes from specific branch
git pull origin branch-name
```

#### Resolving Conflicts
```bash
# If there are merge conflicts
git status  # Shows conflicted files

# Edit files to resolve conflicts using nano
nano conflicted-file.html

# After resolving conflicts
git add conflicted-file.html
git commit -m "Resolve merge conflicts"
```

#### Undoing Changes
```bash
# Undo changes in working directory
git checkout -- filename.html

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) - BE CAREFUL!
git reset --hard HEAD~1

# View commit to reset to
git log --oneline
git reset --hard commit-hash
```

---

## File Editing with Nano 📝

### Basic Nano Commands

#### Opening Files
```bash
# Open existing file
nano index.html

# Create new file
nano new-file.css

# Open file with line numbers
nano -l index.html

# Open file at specific line
nano +25 script.js
```

#### Nano Keyboard Shortcuts
```
Ctrl + O    Save file (WriteOut)
Ctrl + X    Exit nano
Ctrl + K    Cut current line
Ctrl + U    Paste cut text
Ctrl + W    Search in file
Ctrl + \    Search and replace
Ctrl + G    Get help
Ctrl + C    Show cursor position
Ctrl + _    Go to line number
```

#### Editing Workflow Example
```bash
# 1. Open the file
nano index.html

# 2. Make your changes using arrow keys and typing

# 3. Save the file
# Press Ctrl + O
# Press Enter to confirm filename

# 4. Exit nano
# Press Ctrl + X
```

### Working with Multiple Files
```bash
# Edit multiple files in sequence
nano index.html styles.css script.js

# Or edit one by one
nano index.html
# (save and exit)
nano styles.css
# (save and exit)
nano script.js
```

### Advanced Nano Features
```bash
# Open file with syntax highlighting
nano --syntax=html index.html
nano --syntax=css styles.css
nano --syntax=javascript script.js

# Create backup of original file
nano --backup index.html

# View line and column numbers
nano --linenumbers index.html
```

---

## Running the Website 🌐

### Method 1: Python HTTP Server (Simplest)
```bash
# Navigate to project directory
cd online-book-bazaar

# Start Python server
python3 -m http.server 8000

# Access website
# From same server: curl http://localhost:8000
# From browser: http://your-ec2-public-ip:8000
```

### Method 2: Node.js Live Server
```bash
# Install live-server globally
sudo npm install -g live-server

# Start live server
live-server --port=3000 --host=0.0.0.0

# Access website
# http://your-ec2-public-ip:3000
```

### Method 3: Node.js HTTP Server
```bash
# Install http-server
sudo npm install -g http-server

# Start server
http-server -p 8080 -a 0.0.0.0

# Access website
# http://your-ec2-public-ip:8080
```

### AWS Security Group Configuration
```bash
# Make sure your EC2 security group allows inbound traffic:
# Type: Custom TCP Rule
# Port Range: 8000 (or 3000, 8080 - whatever port you're using)
# Source: 0.0.0.0/0 (or your IP range)
```

### Check Website from Terminal
```bash
# Test if server is running locally
curl http://localhost:8000

# Check specific files
curl http://localhost:8000/index.html

# Test from another terminal session
wget http://localhost:8000 -O test.html
cat test.html

# Check server processes
ps aux | grep python
ps aux | grep node

# Check which process is using port
sudo lsof -i :8000
```

---

## Team Collaboration Workflow 👥

### Standard Development Workflow

#### 1. Start Working on New Feature
```bash
# Clone repository (first time only)
git clone https://github.com/username/online-book-bazaar.git
cd online-book-bazaar

# Always start from main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/shopping-cart-improvement

# Check you're on the right branch
git branch --show-current
```

#### 2. Make Changes
```bash
# Edit files
nano script.js
nano styles.css

# Check what changed
git status
git diff

# Add changes
git add .

# Commit with descriptive message
git commit -m "Improve shopping cart UI and add quantity validation"
```

#### 3. Push and Create Pull Request
```bash
# Push branch to GitHub
git push origin feature/shopping-cart-improvement

# Go to GitHub website to create Pull Request
# Or use GitHub CLI if installed: gh pr create
```

#### 4. Code Review and Merge
```bash
# After PR is approved and merged, cleanup
git checkout main
git pull origin main
git branch -d feature/shopping-cart-improvement
```

### Working with Team Members' Changes
```bash
# Get latest changes from all branches
git fetch origin

# See all remote branches
git branch -r

# Switch to teammate's branch for testing
git checkout -b teammate-feature origin/teammate-feature

# Test their changes
python3 -m http.server 8001

# Switch back to your work
git checkout main
```

---

## Common Issues and Solutions 🔧

### Permission Issues
```bash
# Fix npm permission issues
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules

# Or use npm with --unsafe-perm
sudo npm install -g live-server --unsafe-perm=true
```

### Port Already in Use
```bash
# Check what's using the port
sudo lsof -i :8000

# Kill process using port
sudo kill -9 PID_NUMBER

# Or use different port
python3 -m http.server 8001
```

### Git Authentication Issues
```bash
# Clear cached credentials
git config --global --unset credential.helper

# Re-enter credentials
git push origin main

# Or use token authentication
git remote set-url origin https://TOKEN@github.com/username/repo.git
```

### File Permission Issues
```bash
# Make file executable
chmod +x script.sh

# Change file ownership
sudo chown ubuntu:ubuntu filename.html

# Fix directory permissions
chmod 755 directory/
```

### Network/Firewall Issues
```bash
# Check if port is accessible
nc -zv localhost 8000

# Check Ubuntu firewall
sudo ufw status

# Allow port through firewall (if needed)
sudo ufw allow 8000

# Check AWS Security Group settings in AWS Console
```

---

## Useful Commands Reference 📖

### File and Directory Operations
```bash
# List files with details
ls -la

# Create directory
mkdir new-folder

# Copy files
cp source.html destination.html

# Move/rename files
mv oldname.html newname.html

# Remove files (be careful!)
rm filename.html

# Remove directory
rm -rf directory-name

# Find files
find . -name "*.html"

# Check file content
cat filename.html
head -10 filename.html
tail -10 filename.html
```

### System Monitoring
```bash
# Check disk space
df -h

# Check memory usage
free -h

# Check running processes
top
htop

# Check system information
uname -a
uptime

# Check network connections
netstat -tulpn
```

### File Permissions
```bash
# View permissions
ls -l filename.html

# Change permissions
chmod 644 filename.html    # rw-r--r--
chmod 755 directory/       # rwxr-xr-x
chmod +x script.sh         # Make executable

# Change ownership
chown user:group filename.html
sudo chown ubuntu:ubuntu filename.html
```

---

## Complete Example Workflow 🎯

Here's a complete example of the workflow from start to finish:

```bash
# 1. Connect to EC2 instance
ssh -i "mykey.pem" ubuntu@52.23.45.67

# 2. Update system and install software
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nodejs npm python3
sudo npm install -g live-server

# 3. Configure Git
git config --global user.name "John Doe"
git config --global user.email "john@example.com"

# 4. Clone repository
git clone https://github.com/username/online-book-bazaar.git
cd online-book-bazaar

# 5. Create feature branch
git checkout -b feature/add-search-functionality

# 6. Edit files
nano script.js
# Make changes and save (Ctrl+O, Enter, Ctrl+X)

# 7. Test changes
python3 -m http.server 8000 &
curl http://localhost:8000

# 8. Commit and push
git add .
git commit -m "Add advanced search functionality"
git push origin feature/add-search-functionality

# 9. Create Pull Request on GitHub website

# 10. After PR is merged, cleanup
git checkout main
git pull origin main
git branch -d feature/add-search-functionality
```

---

## Keyboard Shortcuts for Efficiency ⌨️

### Terminal Shortcuts
```bash
Ctrl + C        Stop current command
Ctrl + Z        Suspend current command
Ctrl + L        Clear screen
Ctrl + A        Go to beginning of line
Ctrl + E        Go to end of line
Ctrl + U        Delete to beginning of line
Ctrl + K        Delete to end of line
Tab             Auto-complete
↑/↓ arrows      Command history
```

### Nano Editor Shortcuts
```bash
Ctrl + O        Save file
Ctrl + X        Exit
Ctrl + K        Cut line
Ctrl + U        Paste
Ctrl + W        Search
Ctrl + \        Replace
Ctrl + G        Help
Ctrl + _        Go to line
```

---

## Final Tips for DevOps Project 💡

1. **Always work in branches** - Never commit directly to main
2. **Write descriptive commit messages** - Help your team understand changes
3. **Test before pushing** - Always verify your changes work
4. **Document your changes** - Update README if needed
5. **Communicate with team** - Let others know what you're working on
6. **Keep main branch clean** - Only merge tested, working code
7. **Regular backups** - Push your work frequently
8. **Monitor resources** - Check EC2 instance resources regularly

---

**🎉 You're now ready to work on the Online Book Bazaar project in Ubuntu terminal!**

*Happy coding and collaborating! 🚀*
