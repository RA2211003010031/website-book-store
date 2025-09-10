# Quick Command Reference Card 🚀

## Essential Commands Cheat Sheet for Ubuntu Terminal

### 🔧 System Setup
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nodejs npm python3 curl wget nano
sudo npm install -g live-server
```

### 🔑 Git Setup (One-time)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global credential.helper 'cache --timeout=3600'
```

### 📥 GitHub Clone & Setup
```bash
git clone https://github.com/username/online-book-bazaar.git
cd online-book-bazaar
git status
```

### 🌳 Branch Workflow
```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# Work and commit
nano index.html                    # Edit files
git add .
git commit -m "Descriptive message"
git push origin feature/your-feature-name

# After PR merged
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

### 📝 Nano Editor
```bash
nano filename.html                 # Open file
Ctrl + O, Enter                    # Save
Ctrl + X                          # Exit
Ctrl + W                          # Search
Ctrl + K                          # Cut line
Ctrl + U                          # Paste
```

### 🌐 Run Website
```bash
# Python server (simplest)
python3 -m http.server 8000
# Access: http://your-ec2-ip:8000

# Live server (auto-reload)
live-server --port=3000 --host=0.0.0.0
# Access: http://your-ec2-ip:3000

# Check if running
curl http://localhost:8000
```

### 🔍 Useful Checks
```bash
git status                         # Check git status
git branch --show-current          # Current branch
ls -la                            # List files
ps aux | grep python              # Check running servers
sudo lsof -i :8000               # Check port usage
git log --oneline                 # Recent commits
```

### 🚨 Emergency Commands
```bash
git checkout -- filename.html     # Undo file changes
git reset --soft HEAD~1           # Undo last commit
sudo kill -9 PID                  # Kill process
git stash                         # Save work temporarily
git stash pop                     # Restore stashed work
```

### 📁 File Operations
```bash
ls -la                            # List all files
mkdir folder-name                 # Create directory
cp file1.html file2.html         # Copy file
mv oldname.html newname.html     # Rename/move
rm filename.html                  # Delete file
cat filename.html                # View file content
```

---

**💡 Pro Tips:**
- Use `Tab` for auto-completion
- Use `↑` arrow for command history  
- Always work in branches, never main
- Test locally before pushing
- Write clear commit messages

**🆘 Need Help?**
- `man command-name` - Manual for any command
- `git --help` - Git help
- `nano --help` - Nano help
