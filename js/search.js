// ===== SEARCH FUNCTIONALITY =====

class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.clearSearchBtn = document.getElementById('clearSearch');
        this.resultsCount = document.getElementById('resultsCount');
        this.activeFilter = document.getElementById('activeFilter');
        this.noResults = document.getElementById('noResults');
        this.diagramsGrid = document.getElementById('diagramsGrid');
        
        this.currentCategory = 'all';
        this.currentQuery = '';
        this.debounceTimer = null;
        this.searchHistory = [];
        
        this.initializeSearch();
    }
    
    initializeSearch() {
        // Search input event listeners
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearchInput(e.target.value);
        });
        
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.performSearch(e.target.value);
            }
            if (e.key === 'Escape') {
                this.clearSearch();
            }
        });
        
        // Clear search button
        this.clearSearchBtn.addEventListener('click', () => {
            this.clearSearch();
        });
        
        // Category filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleCategoryFilter(e.currentTarget.dataset.category);
            });
        });
        
        // View toggle buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleViewToggle(e.currentTarget.dataset.view);
            });
        });
        
        console.log('Search manager initialized');
    }
    
    handleSearchInput(query) {
        // Show/hide clear button
        if (query.length > 0) {
            this.clearSearchBtn.style.display = 'block';
        } else {
            this.clearSearchBtn.style.display = 'none';
        }
        
        // Debounce search
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    }
    
    performSearch(query) {
        this.currentQuery = query.toLowerCase().trim();
        
        // Add to search history if not empty
        if (this.currentQuery && !this.searchHistory.includes(this.currentQuery)) {
            this.searchHistory.unshift(this.currentQuery);
            if (this.searchHistory.length > 10) {
                this.searchHistory.pop();
            }
        }
        
        this.filterDiagrams();
    }
    
    clearSearch() {
        this.searchInput.value = '';
        this.clearSearchBtn.style.display = 'none';
        this.currentQuery = '';
        this.filterDiagrams();
        this.searchInput.focus();
    }
    
    handleCategoryFilter(category) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.currentCategory = category;
        this.updateActiveFilterText();
        this.filterDiagrams();
    }
    
    handleViewToggle(view) {
        // Update active view button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        // Update grid class
        if (view === 'list') {
            this.diagramsGrid.classList.add('list-view');
        } else {
            this.diagramsGrid.classList.remove('list-view');
        }
    }
    
    filterDiagrams() {
        if (!window.DiagramsData || !window.DiagramsData.diagrams) {
            console.warn('Diagrams data not loaded yet');
            return;
        }
        
        const diagrams = window.DiagramsData.diagrams;
        let filteredDiagrams = diagrams;
        
        // Filter by category
        if (this.currentCategory !== 'all') {
            filteredDiagrams = filteredDiagrams.filter(diagram => 
                diagram.category === this.currentCategory
            );
        }
        
        // Filter by search query
        if (this.currentQuery) {
            filteredDiagrams = filteredDiagrams.filter(diagram => 
                this.matchesSearch(diagram, this.currentQuery)
            );
        }
        
        // Update results
        this.updateResults(filteredDiagrams);
        
        // Re-render diagrams
        if (window.DiagramsApp && window.DiagramsApp.renderDiagrams) {
            window.DiagramsApp.renderDiagrams(filteredDiagrams);
        }
    }
    
    matchesSearch(diagram, query) {
        const searchableText = [
            diagram.title,
            diagram.description,
            diagram.category,
            ...(diagram.tags || [])
        ].join(' ').toLowerCase();
        
        // Split query into terms for better matching
        const queryTerms = query.split(' ').filter(term => term.length > 0);
        
        // All terms must match (AND logic)
        return queryTerms.every(term => 
            searchableText.includes(term)
        );
    }
    
    updateResults(filteredDiagrams) {
        const count = filteredDiagrams.length;
        
        // Update results count
        this.resultsCount.textContent = count === 1 
            ? '1 diagram' 
            : `${count} diagrams`;
        
        // Show/hide no results message
        if (count === 0) {
            this.noResults.style.display = 'block';
            this.diagramsGrid.style.display = 'none';
        } else {
            this.noResults.style.display = 'none';
            this.diagramsGrid.style.display = 'grid';
        }
    }
    
    updateActiveFilterText() {
        const categoryNames = {
            'all': 'All Categories',
            'devops': 'DevOps',
            'development': 'Development',
            'cicd': 'CI/CD',
            'backend': 'Backend',
            'frontend': 'Frontend'
        };
        
        this.activeFilter.textContent = categoryNames[this.currentCategory] || 'All Categories';
    }
    
    // Public methods for external use
    setCategory(category) {
        this.handleCategoryFilter(category);
    }
    
    setQuery(query) {
        this.searchInput.value = query;
        this.handleSearchInput(query);
    }
    
    getSearchState() {
        return {
            query: this.currentQuery,
            category: this.currentCategory,
            history: [...this.searchHistory]
        };
    }
    
    // Advanced search features
    getSearchSuggestions(query) {
        if (!window.DiagramsData || !window.DiagramsData.diagrams) {
            return [];
        }
        
        const diagrams = window.DiagramsData.diagrams;
        const suggestions = new Set();
        
        diagrams.forEach(diagram => {
            // Add title words
            diagram.title.toLowerCase().split(' ').forEach(word => {
                if (word.includes(query) && word.length > 2) {
                    suggestions.add(word);
                }
            });
            
            // Add tags
            if (diagram.tags) {
                diagram.tags.forEach(tag => {
                    if (tag.toLowerCase().includes(query)) {
                        suggestions.add(tag);
                    }
                });
            }
        });
        
        return Array.from(suggestions).slice(0, 5);
    }
    
    highlightSearchTerms(text, query) {
        if (!query) return text;
        
        const queryTerms = query.split(' ').filter(term => term.length > 0);
        let highlightedText = text;
        
        queryTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });
        
        return highlightedText;
    }
    
    // Search analytics
    getSearchAnalytics() {
        return {
            totalSearches: this.searchHistory.length,
            uniqueQueries: new Set(this.searchHistory).size,
            mostSearchedTerms: this.getMostSearchedTerms(),
            averageQueryLength: this.getAverageQueryLength()
        };
    }
    
    getMostSearchedTerms() {
        const termCounts = {};
        
        this.searchHistory.forEach(query => {
            query.split(' ').forEach(term => {
                if (term.length > 2) {
                    termCounts[term] = (termCounts[term] || 0) + 1;
                }
            });
        });
        
        return Object.entries(termCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([term, count]) => ({ term, count }));
    }
    
    getAverageQueryLength() {
        if (this.searchHistory.length === 0) return 0;
        
        const totalLength = this.searchHistory.reduce((sum, query) => sum + query.length, 0);
        return (totalLength / this.searchHistory.length).toFixed(1);
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.SearchManager = new SearchManager();
    console.log('Search functionality initialized');
});

// Export for use in other scripts
window.SearchUtils = {
    highlightText: (text, query) => {
        if (window.SearchManager) {
            return window.SearchManager.highlightSearchTerms(text, query);
        }
        return text;
    },
    
    getSuggestions: (query) => {
        if (window.SearchManager) {
            return window.SearchManager.getSearchSuggestions(query);
        }
        return [];
    },
    
    getAnalytics: () => {
        if (window.SearchManager) {
            return window.SearchManager.getSearchAnalytics();
        }
        return null;
    }
}; 