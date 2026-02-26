// Search page functionality

// Import articles data from main.js
// Note: This will be available because main.js is loaded first

let searchResults = [];
let currentSearchQuery = '';
let currentSearchFilter = 'all';

// Initialize search page
document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q') || '';
    const category = urlParams.get('category') || '';
    
    if (searchQuery) {
        document.getElementById('mainSearchInput').value = searchQuery;
        document.getElementById('searchInput').value = searchQuery; // Header search
        performSearch(searchQuery, category);
    }
    
    // Add event listeners
    addSearchEventListeners();
});

function addSearchEventListeners() {
    // Main search form
    const mainSearchInput = document.getElementById('mainSearchInput');
    const mainSearchBtn = document.getElementById('mainSearchBtn');
    
    mainSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleMainSearch();
        }
    });
    
    mainSearchBtn.addEventListener('click', handleMainSearch);
    
    // Header search (redirect to search page)
    const headerSearchInput = document.getElementById('searchInput');
    const headerSearchBtn = document.getElementById('searchBtn');
    
    headerSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            redirectToSearch();
        }
    });
    
    headerSearchBtn.addEventListener('click', redirectToSearch);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleSearchFilter);
    });
    
    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const searchTerm = this.dataset.search;
            document.getElementById('mainSearchInput').value = searchTerm;
            performSearch(searchTerm);
        });
    });
}

function handleMainSearch() {
    const searchQuery = document.getElementById('mainSearchInput').value.trim();
    if (searchQuery) {
        performSearch(searchQuery);
        // Update URL without page reload
        const newUrl = `${window.location.pathname}?q=${encodeURIComponent(searchQuery)}`;
        history.pushState({ query: searchQuery }, '', newUrl);
    }
}

function redirectToSearch() {
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery) {
        window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
    }
}

function handleSearchFilter(e) {
    const filter = e.target.dataset.filter;
    currentSearchFilter = filter;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Re-run search with filter
    if (currentSearchQuery) {
        performSearch(currentSearchQuery, filter);
    }
}

function performSearch(searchQuery, categoryFilter = '') {
    currentSearchQuery = searchQuery;
    
    // Show loading state
    showSearchLoading(true);
    
    // Simulate API delay for better UX
    setTimeout(() => {
        // Filter articles based on search query and category
        searchResults = articlesData.filter(article => {
            const matchesQuery = !searchQuery || 
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.categoryDisplay.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.content.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = !categoryFilter || categoryFilter === 'all' || 
                article.category === categoryFilter || currentSearchFilter === 'all' || 
                article.category === currentSearchFilter;
            
            return matchesQuery && matchesCategory;
        });
        
        // Update search info
        updateSearchInfo(searchQuery, searchResults.length);
        
        // Render results
        renderSearchResults();
        
        // Hide loading state
        showSearchLoading(false);
        
        // Update header search input
        document.getElementById('searchInput').value = searchQuery;
        
    }, 300);
}

function updateSearchInfo(query, resultCount) {
    const searchQueryEl = document.getElementById('searchQuery');
    const resultsCountEl = document.getElementById('resultsCount');
    
    if (query) {
        searchQueryEl.innerHTML = `Showing results for <strong>"${highlightSearchTerms(query, query)}"</strong>`;
    } else {
        searchQueryEl.innerHTML = `Showing all articles`;
    }
    
    resultsCountEl.innerHTML = `<strong>${resultCount}</strong> ${resultCount === 1 ? 'article' : 'articles'} found`;
}

function renderSearchResults() {
    const resultsContainer = document.getElementById('searchResults');
    const noResultsContainer = document.getElementById('noResults');
    
    if (searchResults.length === 0) {
        resultsContainer.style.display = 'none';
        noResultsContainer.style.display = 'block';
        return;
    }
    
    resultsContainer.style.display = 'grid';
    noResultsContainer.style.display = 'none';
    
    // Render articles
    resultsContainer.innerHTML = searchResults.map(article => `
        <div class="search-result-card" onclick="openArticle('${article.slug}')">
            <img src="${article.image}" alt="${article.title}" class="search-result-image" loading="lazy">
            <div class="search-result-content">
                <span class="search-result-category">${article.categoryDisplay}</span>
                <h3 class="search-result-title">${highlightSearchTerms(article.title, currentSearchQuery)}</h3>
                <p class="search-result-excerpt">${highlightSearchTerms(truncateText(article.excerpt, 120), currentSearchQuery)}</p>
                <div class="search-result-meta">
                    <span>${article.author} • ${formatDate(article.date)}</span>
                    <span class="read-more">${article.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animate results
    setTimeout(() => {
        document.querySelectorAll('.search-result-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}


function showSearchLoading(show) {
    const loadingEl = document.getElementById('searchLoading');
    const resultsEl = document.getElementById('searchResults');
    const noResultsEl = document.getElementById('noResults');
    
    if (show) {
        loadingEl.style.display = 'block';
        resultsEl.style.display = 'none';
        noResultsEl.style.display = 'none';
    } else {
        loadingEl.style.display = 'none';
    }
}

function highlightSearchTerms(text, searchQuery) {
    if (!searchQuery || !text) return text;
    
    const regex = new RegExp(`(${escapeRegExp(searchQuery)})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).substr(0, text.lastIndexOf(' ')) + '...';
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function openArticle(slug) {
    const article = articlesData.find(a => a.slug === slug);
    if (article) {
        window.location.href = `articles/${slug}.html`;
    }
}

// Make functions available globally for onclick handlers
window.openArticle = openArticle;

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.query) {
        document.getElementById('mainSearchInput').value = event.state.query;
        performSearch(event.state.query);
    }
});

// Handle category links from other pages
document.addEventListener('DOMContentLoaded', function() {
    // Check if redirected from category filter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category && !urlParams.get('q')) {
        // Set the filter and show all articles in that category
        currentSearchFilter = category;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });
        performSearch('', category);
    }
});
