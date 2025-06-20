// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotNavLink = document.getElementById('chatbot-nav-link');

// Theme Toggle Functionality
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
        
        // Update navigation bar immediately
        updateNavbarTheme();
        
        // Save theme preference
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        // Update navbar on initial load
        setTimeout(updateNavbarTheme, 100);
    }
}

// Function to update navbar theme
function updateNavbarTheme() {
    const nav = document.querySelector('nav');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        nav.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-dark');
        nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.3)';
    } else {
        nav.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-light');
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
}

// Mobile Menu Functionality
function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuBtn) {
    menuBtn.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking on navigation links
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
        if (!chatbotContainer.classList.contains('hidden')) {
            chatbotContainer.classList.add('hidden');
        }
    }
});

// Typewriter Animation
const typeText = document.getElementById('typeText');
if (typeText) {
    const roles = [
        'an AIML Engineer',
        'a Full Stack Developer', 
        'a Data Analyst',
        'a Problem Solver',
        'an Innovator'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeLoop() {
        const current = roles[roleIndex];
        const updatedText = isDeleting
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        typeText.textContent = updatedText;

        if (!isDeleting && charIndex === current.length) {
            setTimeout(() => isDeleting = true, 2000);
            typeSpeed = 50;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 100;
        }

        setTimeout(typeLoop, typeSpeed);
    }

    // Start typewriter animation
    setTimeout(typeLoop, 1000);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Skills Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        skillObserver.observe(card);
    });
});

// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(tab.dataset.tab);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Trigger timeline animation for the active tab
            animateTimeline(targetContent);
        });
    });

    // Initialize timeline animation for the default active tab
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        animateTimeline(activeTab);
    }
});

// Timeline Animation
function animateTimeline(container) {
    if (!container) return;
    
    const blocks = container.querySelectorAll('.timeline-block');
    blocks.forEach((block, i) => {
        block.classList.remove('reveal');
        setTimeout(() => {
            block.classList.add('reveal');
        }, i * 200);
    });
}

// Intersection Observer for Timeline Animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const blocks = entry.target.querySelectorAll('.timeline-block');
            blocks.forEach((block, i) => {
                setTimeout(() => {
                    block.classList.add('reveal');
                }, i * 300);
            });
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Observe timeline sections
const timelineSections = document.querySelectorAll('.timeline');
timelineSections.forEach(section => {
    timelineObserver.observe(section);
});

// Chatbot Functionality
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('hidden');
        if (!chatbotContainer.classList.contains('hidden')) {
            const messageInput = chatbotContainer.querySelector('input[name="message"]');
            if (messageInput) {
                messageInput.focus();
            }
        }
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.add('hidden');
    });
}

if (chatbotNavLink) {
    chatbotNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        chatbotContainer.classList.remove('hidden');
        const messageInput = chatbotContainer.querySelector('input[name="message"]');
        if (messageInput) {
            setTimeout(() => messageInput.focus(), 100);
        }
    });
}

// Enhanced Chatbot Form Handling
if (chatbotForm) {
    chatbotForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const messageInput = this.querySelector('input[name="message"]');
        const submitButton = this.querySelector('button[type="submit"]');
        const message = messageInput.value.trim();

        if (!message) return;

        // Disable form while sending
        messageInput.disabled = true;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        // Show user's message
        addMessage(message, 'user');
        messageInput.value = '';

        try {
            // Send message via Formspree
            const response = await fetch('https://formspree.io/f/xzzrdrgg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ 
                    message: message,
                    source: 'chatbot'
                })
            });

            if (response.ok) {
                addMessage('Thank you for your message! I\'ll get back to you shortly.', 'bot');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Chatbot error:', error);
            addMessage('Sorry, something went wrong. Please try again later or use the contact form below.', 'bot');
        } finally {
            // Re-enable form
            messageInput.disabled = false;
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
            messageInput.focus();
        }
    });
}

// Add message to chatbot
function addMessage(text, sender) {
    if (!chatbotMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Form Submission Enhancement
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitButton = this.querySelector('.submit-button');
        const originalContent = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // The form will submit normally to Formspree
        // We just show the loading state
        setTimeout(() => {
            submitButton.innerHTML = originalContent;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const elementsToAnimate = document.querySelectorAll(
    '.section-title, .section-subtitle, .about-content, .project-card, .contact-form'
);
elementsToAnimate.forEach(el => {
    animationObserver.observe(el);
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (window.scrollY > 100) {
        nav.style.backgroundColor = isDarkMode 
            ? getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-dark')
            : getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-light');
        nav.style.boxShadow = isDarkMode 
            ? '0 2px 20px rgba(0,0,0,0.4)'
            : '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.backgroundColor = isDarkMode 
            ? getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-dark')
            : getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-light');
        nav.style.boxShadow = isDarkMode 
            ? '0 2px 15px rgba(0,0,0,0.3)'
            : '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Initialize AOS (Animate On Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Error Handling for Missing Elements
function handleError(error, context) {
    console.warn(`Portfolio JS Warning (${context}):`, error.message);
}

// Wrap potentially failing operations
try {
    // Add any additional initialization code here
    console.log('Portfolio website loaded successfully!');
} catch (error) {
    handleError(error, 'initialization');
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events efficiently
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy Loading for Images (if any are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added later for offline functionality
    });
}

// Analytics or tracking code can be added here
// Example: Google Analytics, Microsoft Clarity, etc.

// Export functions for potential use in other scripts
window.portfolioApp = {
    openMobileMenu,
    closeMobileMenu,
    addMessage,
    animateTimeline
};
