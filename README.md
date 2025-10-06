# Online Book Bazaar 📚

## About the Project 📖

**Online Book Bazaar** is a modern and responsive web application designed to provide a seamless book shopping experience for readers across India and beyond.  

The goal of this project is to create a **beautifully designed, easy-to-use, and scalable online bookstore** that not only showcases Indian literature but also brings together international titles in one place.  

### 🎯 Objectives
- Deliver a **smooth browsing and shopping experience** with search, filters, and categories  
- Provide an **authentic bookstore feel** with detailed book descriptions, high-quality images, and Indian-themed UI elements  
- Implement **real-world e-commerce features** such as cart management, user authentication, and order handling  
- Serve as a **learning project** for students, developers, and contributors to practice front-end web development and collaboration on GitHub  

### 🌟 Why This Project?
- Many online bookstores focus only on international titles — this project highlights **Indian literature and culture** alongside global works  
- Acts as a **practical demo project** for web developers to understand HTML, CSS, JavaScript, and deployment workflows  
- Open-source nature encourages **collaboration, experimentation, and contribution** from the developer community.     

---

## Features ✨

### 🛍️ Shopping Experience
- **Browse Books**: Extensive collection of Hindi, English, Spiritual, and Technology books
- **Search & Filter**: Advanced search and category-based filtering
- **Shopping Cart**: Add/remove items, update quantities, real-time total calculation
- **Stock Management**: Real-time stock updates and availability indicators

### 🎨 Design & UI
- **Modern Design**: Clean, stylish interface with Indian-themed elements
- **Responsive Layout**: Fully responsive design for all devices
- **Beautiful Typography**: Google Fonts (Poppins & Playfair Display)
- **Smooth Animations**: CSS transitions and hover effects
- **Indian Currency**: All prices displayed in Indian Rupees (₹)

### 🔐 User Authentication
- **Registration System**: New user account creation
- **Login/Logout**: Secure user authentication
- **Session Management**: Persistent login state with localStorage

### 📖 Book Features
- **Detailed Information**: Title, author, price, stock, description
- **Book Categories**: Hindi Literature, English Fiction, Spiritual & Philosophy, Technology
- **Book Details Modal**: Expanded view with complete information
- **High-Quality Images**: Curated book cover images from Unsplash

### 📱 Additional Features
- **Contact Form**: Get in touch functionality
- **About Section**: Company information and statistics
- **Social Media Links**: Connect with us on various platforms
- **Mobile-Friendly**: Hamburger menu and touch-optimized interface

## Book Collection 📚

Our curated collection includes:

### Hindi Literature
- गोदान - मुंशी प्रेमचंद
- हरी घास के ये दिन - फणीश्वरनाथ रेणु
- कामायनी - जयशंकर प्रसाद
- मुंशी प्रेमचंद की कहानियां
- अपराध और दंड - फ्योदोर दोस्तोयेवस्की (हिंदी अनुवाद)
- तितली - हरिवंशराय बच्चन
- शिवाजी महाराज - बाबासाहेब पुरंदरे
- डॉ. ए.पी.जे. अब्दुल कलाम: एक जीवनी - आर.के. लक्ष्मण
- मधुशाला - हरिवंशराय बच्चन

### Spiritual & Philosophy
- गीता रहस्य - बाल गंगाधर तिलक
- रामायण - महर्षि वाल्मीकि
- योग वशिष्ठ - महर्षि वाल्मीकि
- भागवत गीता - व्यास जी
- The Mahabharata: A Modern Rendering - Ramesh Menon
- Arthashastra - Kautilya (Chanakya)

### English Fiction
- The God of Small Things - Arundhati Roy
- Midnight's Children - Salman Rushdie
- The White Tiger - Aravind Adiga
- Sacred Games - Vikram Chandra
- Train to Pakistan - Khushwant Singh

### Technology
- Clean Code - Robert C. Martin
- JavaScript: The Good Parts - Douglas Crockford
- Python Programming - Mark Lutz
- React.js Development - Alex Banks

## Technologies Used 💻

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Dynamic functionality and interactivity
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Professional typography
- **LocalStorage**: Data persistence for cart and user sessions

## File Structure 📁

```
website book store/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── DEPLOYMENT.md       # GitHub setup guide
├── UBUNTU_GUIDE.md     # Complete Ubuntu/DevOps guide
└── QUICK_REFERENCE.md  # Command cheat sheet
```

## Additional Documentation 📚

- **[Ubuntu Terminal Guide](UBUNTU_GUIDE.md)** - Complete guide for Ubuntu/AWS EC2 setup, Git workflows, and DevOps project
- **[Quick Reference](QUICK_REFERENCE.md)** - Essential commands cheat sheet
- **[Deployment Guide](DEPLOYMENT.md)** - GitHub repository setup and hosting

## Installation & Setup 🚀

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Run Local Server** (Recommended): Use any of the methods below for better development experience

### Running the Website Locally 🖥️

#### Method 1: Live Server (Best for Development) ⭐
```bash
# Install live-server globally (one-time setup)
npm install -g live-server

# Navigate to project directory
cd "/path/to/website book store"

# Start server with auto-reload
live-server --port=3000 --open=/index.html

# Visit: http://127.0.0.1:3000 or http://localhost:3000
```
**Benefits:** Auto-reload when files change, perfect for development

#### Method 2: Python HTTP Server (Simple & Quick)
```bash
# Using Python 3 (most common)
python3 -m http.server 8000

# Using Python 2 (if needed)
python -m SimpleHTTPServer 8000

# Visit: http://localhost:8000
```

#### Method 3: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8080 -o

# Visit: http://localhost:8080
```

#### Method 4: PHP Built-in Server
```bash
# If you have PHP installed
php -S localhost:4000

# Visit: http://localhost:4000
```

#### Method 5: Using VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Quick Start Commands 🚀
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/online-book-bazaar.git

# Navigate to project
cd online-book-bazaar

# Start development server (choose one):
npm start                    # If you have package.json scripts
live-server --port=3000      # Live server with auto-reload
python3 -m http.server 8000  # Simple Python server
```

## Usage Guide 📖

### For Customers:
1. **Browse Books**: Scroll through the collection or use category filters
2. **Search**: Use the search bar to find specific books or authors
3. **View Details**: Click on any book to see detailed information
4. **Add to Cart**: Click "Add to Cart" to purchase books
5. **Manage Cart**: View cart sidebar, update quantities, or remove items
6. **Register/Login**: Create an account for a personalized experience

### For Developers:
1. **Add New Books**: Edit the `books` array in `script.js`
2. **Customize Styling**: Modify `styles.css` for design changes
3. **Add Features**: Extend functionality in `script.js`

## Browser Compatibility 🌐

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting 🔧

### Common Issues & Solutions

#### Server Not Starting
```bash
# Check if port is already in use
lsof -i :3000  # Check what's using port 3000
kill -9 PID    # Kill the process (replace PID with actual process ID)

# Try different port
live-server --port=8080
```

#### Permission Denied Errors
```bash
# Try with sudo (macOS/Linux)
sudo npm install -g live-server

# Or use npx to run without global install
npx live-server --port=3000
```

#### Python Not Found
```bash
# Check Python version
python3 --version
# or
python --version

# Install Python if needed (macOS with Homebrew)
brew install python
```

#### Node.js/NPM Not Found
- Download and install from [nodejs.org](https://nodejs.org)
- Or install via Homebrew: `brew install node`

### Development Tips 💡
- Use **live-server** for best development experience
- Keep browser dev tools open to see console errors
- Test on different screen sizes using browser responsive mode
- Clear browser cache if changes don't appear

## Future Enhancements 🔮

- **Payment Integration**: Razorpay/PayPal integration
- **User Reviews**: Book rating and review system
- **Wishlist**: Save books for later
- **Order History**: Track past purchases
- **Admin Panel**: Manage books and orders
- **Email Notifications**: Order confirmations and updates

## Contributing 🤝

We welcome contributions! Please feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Make changes where valid
- Improve documentation


## Contact 📞

- **Email**: info@onlinebookbazaar.com
- **Phone**: +87784 61555
- **Address**: SRM KTR Chennai

---

**Made with ❤️ for book lovers everywhere!**

*Happy Reading! 📖*
