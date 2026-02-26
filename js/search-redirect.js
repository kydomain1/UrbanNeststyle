// Universal search redirect functionality for all pages
// This script handles search input redirection to search.html

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        // Handle Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                redirectToSearch();
            }
        });
        
        // Handle search button click
        searchBtn.addEventListener('click', redirectToSearch);
    }
    
    function redirectToSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        } else {
            window.location.href = 'search.html';
        }
    }
});
