// Article Data
const articlesData = [
    {
        id: 9,
        title: "Charge Anywhere, Anytime",
        category: "home",
        categoryDisplay: "Home & Garden",
        excerpt: "Discover how Jackery portable power stations and solar generators keep your devices charged wherever adventure takes you. Explore reliable power solutions for outdoor enthusiasts and emergency preparedness.",
        image: "images/头图.jpg",
        date: "2025-10-03",
        author: "Sarah Tech",
        readTime: "6 min read",
        slug: "charge-anywhere-anytime",
        content: "In our increasingly connected world, running out of power is more than an inconvenience. Jackery portable power stations and solar generators offer solutions that keep your devices charged wherever life takes you."
    },
    {
        id: 8,
        title: "Pro-Level Results, Beginner Ease",
        category: "home",
        categoryDisplay: "Home & Garden",
        excerpt: "Discover how WeCreat laser engravers deliver professional-grade results with beginner-friendly ease. Explore Vision Pro and Lumos for your creative projects.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop&crop=center",
        date: "2025-10-02",
        author: "Alex Maker",
        readTime: "6 min read",
        slug: "pro-level-results-beginner-ease",
        content: "Professional-grade laser engraving used to require expensive equipment and technical expertise. WeCreat has changed that with accessible machines that deliver studio-quality results."
    },
    {
        id: 7,
        title: "Discover Your Style with Stitch Fix",
        category: "fashion",
        categoryDisplay: "Fashion & Accessories",
        excerpt: "Learn how Stitch Fix delivers data-backed fall outfits, curated product highlights, and styling prompts perfect for early October wardrobes.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=250&fit=crop&crop=center",
        date: "2025-10-04",
        author: "Lena Ward",
        readTime: "7 min read",
        slug: "discover-your-style-with-stitch-fix",
        content: "This guide unpacks how Stitch Fix blends human stylists with AI to build personalized fall capsules, product spotlights, and 25 quick styling prompts."
    },
    {
        id: 1,
        title: "10 Must-Have Fashion Accessories for Spring 2025",
        category: "fashion",
        categoryDisplay: "Fashion & Accessories",
        excerpt: "Discover the essential accessories that will elevate your spring wardrobe. From statement jewelry to chic handbags, these pieces will transform your look.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop&crop=center",
        date: "2025-03-15",
        author: "Emma Style",
        readTime: "5 min read",
        slug: "spring-fashion-accessories-2025",
        content: "Spring is the perfect time to refresh your accessory collection..."
    },
    {
        id: 2,
        title: "The Complete Guide to Natural Skincare Routines",
        category: "health",
        categoryDisplay: "Health & Beauty",
        excerpt: "Learn how to create an effective natural skincare routine using organic ingredients. Perfect for sensitive skin and eco-conscious beauty lovers.",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop&crop=center",
        date: "2025-02-20",
        author: "Dr. Sarah Green",
        readTime: "8 min read",
        slug: "natural-skincare-routines-guide",
        content: "Natural skincare has gained tremendous popularity..."
    },
    {
        id: 3,
        title: "Creating a Cozy Scandinavian Living Room on a Budget",
        category: "home",
        categoryDisplay: "Home & Garden",
        excerpt: "Transform your living space with affordable Scandinavian design principles. Discover how to achieve that minimalist, hygge aesthetic without breaking the bank.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=250&fit=crop&crop=center",
        date: "2025-01-28",
        author: "Nordic Design Co.",
        readTime: "6 min read",
        slug: "scandinavian-living-room-budget",
        content: "Scandinavian design is known for its simplicity and functionality..."
    },
    {
        id: 4,
        title: "Hidden Gems: 5 Boutique Hotels in Tuscany You Must Visit",
        category: "travel",
        categoryDisplay: "Travel & Accommodation",
        excerpt: "Escape to the Italian countryside and discover charming boutique hotels that offer authentic experiences away from the tourist crowds.",
        image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=250&fit=crop&crop=center",
        date: "2025-04-10",
        author: "Travel Insider",
        readTime: "7 min read",
        slug: "tuscany-boutique-hotels",
        content: "Tuscany's rolling hills and medieval towns provide the perfect backdrop..."
    },
    {
        id: 5,
        title: "Smart Investment Strategies for Young Professionals",
        category: "finance",
        categoryDisplay: "Finance & Insurance",
        excerpt: "Learn practical investment tips tailored for professionals in their 20s and 30s. Build wealth while managing student loans and living expenses.",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop&crop=center",
        date: "2025-05-22",
        author: "Financial Expert",
        readTime: "10 min read",
        slug: "investment-strategies-young-professionals",
        content: "Starting your investment journey early is one of the best financial decisions..."
    },
    {
        id: 6,
        title: "Artisan Coffee Trends: What's Brewing in 2025",
        category: "food",
        categoryDisplay: "Food & Beverages",
        excerpt: "Explore the latest coffee trends from specialty roasters worldwide. From unique brewing methods to sustainable sourcing practices.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop&crop=center",
        date: "2025-06-08",
        author: "Coffee Connoisseur",
        readTime: "4 min read",
        slug: "artisan-coffee-trends-2025",
        content: "The coffee industry continues to evolve with innovative brewing techniques..."
    }
];

// Global Variables
let filteredArticles = [...articlesData];
let currentFilter = 'all';

// DOM Elements
const articlesGrid = document.getElementById('articlesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    addEventListeners();
    animateOnScroll();
});

function initializeApp() {
    renderArticles();
    updateCategoryCards();
}

function addEventListeners() {
    // Search functionality - redirect to search page
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearchRedirect();
        }
    });
    searchBtn.addEventListener('click', handleSearchRedirect);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Category cards navigation - redirect to search page with category filter
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            window.location.href = `search.html?category=${category}`;
        });
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // CTA button scroll
    document.querySelector('.cta-button').addEventListener('click', function() {
        document.querySelector('.featured-articles').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', handleNewsletterSubmit);
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function handleSearchRedirect() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
    } else {
        window.location.href = 'search.html';
    }
}

function handleFilter(e) {
    const filter = e.target.dataset.filter;
    
    // Redirect to search page with category filter
    if (filter === 'all') {
        window.location.href = 'search.html';
    } else {
        window.location.href = `search.html?category=${filter}`;
    }
}


function renderArticles() {
    if (filteredArticles.length === 0) {
        articlesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    articlesGrid.innerHTML = filteredArticles.map(article => `
        <article class="article-card fade-in-up" onclick="openArticle('${article.slug}')">
            <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
            <div class="article-content">
                <span class="article-category">${article.categoryDisplay}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span>${article.author} • ${formatDate(article.date)}</span>
                    <span class="read-more">${article.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
    
    // Animate new articles
    setTimeout(() => {
        document.querySelectorAll('.article-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}


function openArticle(slug) {
    const article = articlesData.find(a => a.slug === slug);
    if (article) {
        window.location.href = `articles/${slug}.html`;
    }
}

function updateCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    const categories = ['fashion', 'health', 'home', 'travel', 'finance', 'food'];
    
    categoryCards.forEach((card, index) => {
        const category = categories[index];
        const articleCount = articlesData.filter(article => article.category === category).length;
        const countElement = card.querySelector('.article-count');
        if (countElement) {
            countElement.textContent = `${articleCount} articles`;
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
    mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        // Simulate newsletter subscription
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

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

function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.category-card, .article-card, .newsletter').forEach(el => {
        observer.observe(el);
    });
}

// Smooth navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(180, 167, 193, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});

// Global function to make categories clickable
window.filterByCategory = function(category) {
    // Update filter button
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    
    currentFilter = category;
    filterArticles(category);
    
    // Scroll to articles section
    document.querySelector('.featured-articles').scrollIntoView({
        behavior: 'smooth'
    });
};

// Make category cards in footer clickable
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            window.filterByCategory(category);
        });
    });
});
