/* ============================================
   TURBO RENT A CAR - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initScrollAnimations();
    initCounterAnimation();
    initDatePickers();
    initFaqAccordion();
    initFormValidation();
    initCarGallery();
    initMobileMenu();
});

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.car-card, .feature-card, .testimonial-card, .service-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in class styles
    document.addEventListener('scroll', () => {
        document.querySelectorAll('.car-card, .feature-card, .testimonial-card, .service-card').forEach(el => {
            if (isElementInViewport(el) && !el.classList.contains('animate-in')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
    );
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    let animated = false;
    
    const animateCounters = () => {
        if (animated) return;
        
        const windowHeight = window.innerHeight;
        
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            
            if (rect.top < windowHeight - 100) {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            }
        });
        
        animated = true;
    };
    
    window.addEventListener('scroll', animateCounters);
    animateCounters();
}

/* ============================================
   DATE PICKERS
   ============================================ */
function initDatePickers() {
    // Set default dates for search form
    const pickupDate = document.getElementById('pickupDate');
    const returnDate = document.getElementById('returnDate');
    
    if (pickupDate && returnDate) {
        // Set minimum date to today
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };
        
        pickupDate.min = formatDate(today);
        returnDate.min = formatDate(tomorrow);
        
        // Set default values
        pickupDate.value = formatDate(today);
        returnDate.value = formatDate(tomorrow);
        
        // Ensure return date is after pickup date
        pickupDate.addEventListener('change', function() {
            const pickup = new Date(this.value);
            const returnD = new Date(returnDate.value);
            
            if (returnD <= pickup) {
                const nextDay = new Date(pickup);
                nextDay.setDate(nextDay.getDate() + 1);
                returnDate.value = formatDate(nextDay);
                returnDate.min = formatDate(nextDay);
            }
        });
    }
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/* ============================================
   FORM VALIDATION
   ============================================ */
function initFormValidation() {
    // Contact Form
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                showFormSuccess(this);
            }
        });
    }
    
    // Booking Form
    const bookingForm = document.querySelector('.booking-form');
    
    if (bookingForm) {
        const form = bookingForm.querySelector('form');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (validateForm(this)) {
                    calculateTotal(this);
                    showFormSuccess(this);
                }
            });
            
            // Real-time price calculation
            const dateInputs = form.querySelectorAll('input[type="date"]');
            dateInputs.forEach(input => {
                input.addEventListener('change', function() {
                    calculateTotal(form);
                });
            });
        }
    }
    
    // Search Form
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Redirect to fleet page with filters
            const carType = this.querySelector('select:last-child').value;
            window.location.href = `fleet.html?type=${carType}`;
        });
    }
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
            
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;
            if (!phoneRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            }
        }
    });
    
    return isValid;
}

function showFormSuccess(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
    btn.style.background = '#22c55e';
    
    form.reset();
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 3000);
}

function calculateTotal(form) {
    const totalElement = form.querySelector('.total-amount');
    if (!totalElement) return;
    
    const dailyRate = parseInt(form.dataset.dailyRate) || 25;
    const pickupDate = form.querySelector('input[name="pickup"]');
    const returnDate = form.querySelector('input[name="return"]');
    
    if (pickupDate && returnDate && pickupDate.value && returnDate.value) {
        const start = new Date(pickupDate.value);
        const end = new Date(returnDate.value);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        
        if (days > 0) {
            const total = days * dailyRate;
            totalElement.textContent = `BHD ${total}`;
        }
    }
}

/* ============================================
   CAR GALLERY
   ============================================ */
function initCarGallery() {
    const mainImage = document.querySelector('.main-image img');
    const thumbs = document.querySelectorAll('.thumb');
    
    if (!mainImage || thumbs.length === 0) return;
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const src = this.querySelector('img').src;
            
            // Update main image
            mainImage.src = src;
            
            // Update active class
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/* ============================================
   FLEET PAGE FILTERS
   ============================================ */
function initFleetFilters() {
    const filterSelects = document.querySelectorAll('.fleet-toolbar select, .fleet-sidebar select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            filterCars();
        });
    });
}

// Initialize fleet filters if on fleet page
if (document.querySelector('.fleet-page')) {
    initFleetFilters();
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
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

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add fade-in animation class dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);