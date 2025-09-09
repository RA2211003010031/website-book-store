// Book Data
const books = [
    {
        id: 1,
        title: "गोदान",
        author: "मुंशी प्रेमचंद",
        category: "hindi",
        price: 299,
        stock: 15,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
        description: "मुंशी प्रेमचंद का यह उपन्यास भारतीय किसान जीवन की मर्मस्पर्शी कहानी है। होरी के संघर्ष और सपनों की कहानी जो आज भी प्रासंगिक है।",
        language: "Hindi",
        pages: 352,
        publisher: "राजकमल प्रकाशन"
    },
    {
        id: 2,
        title: "गीता रहस्य",
        author: "बाल गंगाधर तिलक",
        category: "spiritual",
        price: 450,
        stock: 8,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        description: "लोकमान्य तिलक द्वारा रचित गीता का गहन दार्शनिक विश्लेषण। कर्मयोग के सिद्धांतों की व्याख्या।",
        language: "Hindi",
        pages: 528,
        publisher: "गीता प्रेस"
    },
    {
        id: 3,
        title: "हरी घास के ये दिन",
        author: "फणीश्वरनाथ रेणु",
        category: "hindi",
        price: 350,
        stock: 12,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
        description: "रेणु जी की कहानियों का संग्रह जो ग्रामीण जीवन की सुंदरता और संघर्ष को दर्शाता है।",
        language: "Hindi",
        pages: 280,
        publisher: "राजकमल प्रकाशन"
    },
    {
        id: 4,
        title: "The God of Small Things",
        author: "Arundhati Roy",
        category: "english",
        price: 599,
        stock: 20,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        description: "A Booker Prize-winning novel that tells the story of fraternal twins in Kerala, exploring themes of love, loss, and societal constraints.",
        language: "English",
        pages: 340,
        publisher: "IndiaInk"
    },
    {
        id: 5,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "technology",
        price: 899,
        stock: 25,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=400&fit=crop",
        description: "A handbook of agile software craftsmanship. Learn how to write clean, maintainable code that stands the test of time.",
        language: "English",
        pages: 464,
        publisher: "Prentice Hall"
    },
    {
        id: 6,
        title: "रामायण",
        author: "महर्षि वाल्मीकि",
        category: "spiritual",
        price: 699,
        stock: 30,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
        description: "भारतीय संस्कृति का अमर ग्रंथ। राम के आदर्श जीवन की गाथा जो मानवीय मूल्यों की शिक्षा देती है।",
        language: "Hindi",
        pages: 800,
        publisher: "गीता प्रेस"
    },
    {
        id: 7,
        title: "Midnight's Children",
        author: "Salman Rushdie",
        category: "english",
        price: 699,
        stock: 15,
        image: "https://images.unsplash.com/photo-1544716278-e513176f20a5?w=300&h=400&fit=crop",
        description: "A magical realist epic that chronicles India's transition from British colonialism to independence and partition.",
        language: "English",
        pages: 647,
        publisher: "Random House"
    },
    {
        id: 8,
        title: "कामायनी",
        author: "जयशंकर प्रसाद",
        category: "hindi",
        price: 399,
        stock: 18,
        image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300&h=400&fit=crop",
        description: "छायावादी काव्य का सर्वोत्कृष्ट उदाहरण। मनु और श्रद्धा की कहानी के माध्यम से जीवन दर्शन।",
        language: "Hindi",
        pages: 200,
        publisher: "लोकभारती प्रकाशन"
    },
    {
        id: 9,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        category: "technology",
        price: 799,
        stock: 22,
        image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop",
        description: "A concise guide to the best features of JavaScript, helping developers write more effective code.",
        language: "English",
        pages: 176,
        publisher: "O'Reilly Media"
    },
    {
        id: 10,
        title: "योग वशिष्ठ",
        author: "महर्षि वाल्मीकि",
        category: "spiritual",
        price: 899,
        stock: 10,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        description: "आध्यात्मिक ज्ञान का खजाना। राम और वशिष्ठ के संवाद के माध्यम से जीवन के गहरे सत्यों का प्रकाशन।",
        language: "Hindi",
        pages: 1200,
        publisher: "मोतीलाल बनारसीदास"
    },
    {
        id: 11,
        title: "The White Tiger",
        author: "Aravind Adiga",
        category: "english",
        price: 499,
        stock: 16,
        image: "https://images.unsplash.com/photo-1603093634378-9b1f2caed4c1?w=300&h=400&fit=crop",
        description: "A darkly comic novel about a man's journey from village to city, exploring the contrast between India's rich and poor.",
        language: "English",
        pages: 318,
        publisher: "HarperCollins"
    },
    {
        id: 12,
        title: "मुंशी प्रेमचंद की कहानियां",
        author: "मुंशी प्रेमचंद",
        category: "hindi",
        price: 299,
        stock: 25,
        image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=300&h=400&fit=crop",
        description: "हिंदी साहित्य की अमर कहानियों का संग्रह। ईदगाह, पूस की रात, कफन जैसी मशहूर कहानियां।",
        language: "Hindi",
        pages: 400,
        publisher: "राजकमल प्रकाशन"
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let filteredBooks = [...books];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const loginModal = document.getElementById('loginModal');
const bookModal = document.getElementById('bookModal');
const searchInput = document.getElementById('searchInput');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);
    updateCartUI();
    setupEventListeners();
    
    // Update login button based on user status
    updateAuthUI();
});

// Event Listeners Setup
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Auth forms
    const loginForm = document.querySelector('#loginForm form');
    const registerForm = document.querySelector('#registerForm form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

// Display books in the grid
function displayBooks(booksToShow) {
    booksGrid.innerHTML = '';
    
    booksToShow.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

// Create book card element
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.setAttribute('data-category', book.category);
    
    const stockClass = book.stock > 10 ? '' : book.stock > 0 ? 'low' : 'out';
    const stockText = book.stock > 10 ? `${book.stock} in stock` : 
                     book.stock > 0 ? `Only ${book.stock} left` : 'Out of stock';
    
    bookCard.innerHTML = `
        <div class="book-image" onclick="showBookDetail(${book.id})">
            <img src="${book.image}" alt="${book.title}">
            <div class="stock-badge ${stockClass}">${stockText}</div>
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <span class="book-category">${book.category.toUpperCase()}</span>
            <div class="book-price">₹${book.price}</div>
            <button class="add-to-cart" onclick="addToCart(${book.id})" ${book.stock === 0 ? 'disabled' : ''}>
                ${book.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
        </div>
    `;
    
    return bookCard;
}

// Filter books by category
function filterBooks(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    if (category === 'all') {
        filteredBooks = [...books];
    } else {
        filteredBooks = books.filter(book => book.category === category);
    }
    
    displayBooks(filteredBooks);
}

// Search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const searchResults = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm)
    );
    
    displayBooks(searchResults);
}

// Add to cart functionality
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book || book.stock === 0) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        if (existingItem.quantity < book.stock) {
            existingItem.quantity += 1;
        } else {
            alert('Sorry, not enough stock available!');
            return;
        }
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        });
    }
    
    // Update stock
    book.stock -= 1;
    
    updateCartUI();
    saveCartToStorage();
    
    // Refresh the books display to show updated stock
    displayBooks(filteredBooks);
    
    // Show feedback
    showNotification('Book added to cart!');
}

// Remove from cart
function removeFromCart(bookId) {
    const cartItemIndex = cart.findIndex(item => item.id === bookId);
    const book = books.find(b => b.id === bookId);
    
    if (cartItemIndex !== -1) {
        const removedItem = cart[cartItemIndex];
        // Restore stock
        book.stock += removedItem.quantity;
        cart.splice(cartItemIndex, 1);
        
        updateCartUI();
        saveCartToStorage();
        displayBooks(filteredBooks);
    }
}

// Update quantity in cart
function updateQuantity(bookId, change) {
    const cartItem = cart.find(item => item.id === bookId);
    const book = books.find(b => b.id === bookId);
    
    if (!cartItem || !book) return;
    
    if (change > 0 && cartItem.quantity < book.stock + cartItem.quantity) {
        cartItem.quantity += change;
        book.stock -= change;
    } else if (change < 0 && cartItem.quantity > 1) {
        cartItem.quantity += change;
        book.stock -= change;
    }
    
    updateCartUI();
    saveCartToStorage();
    displayBooks(filteredBooks);
}

// Update cart UI
function updateCartUI() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

// Show book detail modal
function showBookDetail(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    const bookDetail = document.getElementById('bookDetail');
    bookDetail.innerHTML = `
        <div class="book-detail-content">
            <div class="book-detail-image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-detail-info">
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Category:</strong> ${book.category.toUpperCase()}</p>
                <p><strong>Language:</strong> ${book.language}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Publisher:</strong> ${book.publisher}</p>
                <div class="book-detail-price">₹${book.price}</div>
                <p><strong>Description:</strong></p>
                <p>${book.description}</p>
                <p><strong>Stock:</strong> ${book.stock} available</p>
                <button class="add-to-cart" onclick="addToCart(${book.id}); closeBookModal();" ${book.stock === 0 ? 'disabled' : ''}>
                    ${book.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `;
    
    bookModal.style.display = 'block';
}

// Modal functions
function showLoginModal() {
    if (currentUser) {
        // If user is logged in, show logout option
        if (confirm('Do you want to logout?')) {
            logout();
        }
    } else {
        loginModal.style.display = 'block';
    }
}

function closeModal() {
    loginModal.style.display = 'none';
}

function closeBookModal() {
    bookModal.style.display = 'none';
}

function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

// Auth functions
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    const password = formData.get('password') || event.target.querySelector('input[type="password"]').value;
    
    // Simple validation (in a real app, this would be server-side)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = { email: user.email, name: user.name };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateAuthUI();
        closeModal();
        showNotification('Login successful!');
    } else {
        alert('Invalid email or password');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputs = event.target.querySelectorAll('input');
    
    const name = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('User already exists');
        return;
    }
    
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    showNotification('Registration successful! Please login.');
    showLoginForm();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showNotification('Logged out successfully!');
}

function updateAuthUI() {
    const loginBtn = document.querySelector('.login-btn');
    if (currentUser) {
        loginBtn.textContent = `Hello, ${currentUser.name.split(' ')[0]}`;
    } else {
        loginBtn.textContent = 'Login';
    }
}

// Handle contact form
function handleContactForm(event) {
    event.preventDefault();
    showNotification('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Utility functions
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        closeModal();
    }
    if (event.target === bookModal) {
        closeBookModal();
    }
});

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);

// Add scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 107, 53, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e)';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});
