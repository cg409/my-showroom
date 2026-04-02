const searchInput = document.getElementById('main-search');
const clearSearchBtn = document.getElementById('clear-search');
const suggestionBox = document.getElementById('search-suggestions');
const sections = document.querySelectorAll('.category-section');
const cards = document.querySelectorAll('.card-wrapper');
const noResults = document.getElementById('no-results');

// 1. SEARCH LOGIC WITH CLEAR (X) BUTTON
searchInput.addEventListener('input', () => {
    const val = searchInput.value.toLowerCase().trim();
    
    // Show/Hide Clear Button
    clearSearchBtn.style.display = val.length > 0 ? 'inline-block' : 'none';

    suggestionBox.innerHTML = '';
    if (val.length > 0) {
        suggestionBox.style.display = 'block';
        const matches = Array.from(cards)
            .map(c => c.getAttribute('data-name'))
            .filter(name => name.toLowerCase().includes(val));

        const uniqueMatches = [...new Set(matches)].slice(0, 5);
        uniqueMatches.forEach(match => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = match;
            div.onclick = () => {
                searchInput.value = match;
                suggestionBox.style.display = 'none';
                performSearch(match);
            };
            suggestionBox.appendChild(div);
        });
    } else {
        suggestionBox.style.display = 'none';
    }
});

function performSearch(query) {
    const q = query.toLowerCase().trim();
    let foundAny = false;

    sections.forEach(section => {
        const catName = section.getAttribute('data-cat-name').toLowerCase();
        const sectionCards = section.querySelectorAll('.card-wrapper');
        let cardInCatFound = false;

        sectionCards.forEach(card => {
            const itemName = card.getAttribute('data-name').toLowerCase();
            if (itemName.includes(q) || catName.includes(q)) {
                card.style.display = 'block';
                cardInCatFound = true;
                foundAny = true;
            } else {
                card.style.display = 'none';
            }
        });
        section.style.display = cardInCatFound ? 'block' : 'none';
    });

    noResults.style.display = foundAny ? 'none' : 'block';
    updateAllArrows();
}

function resetSearch() {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    suggestionBox.style.display = 'none';
    noResults.style.display = 'none';
    sections.forEach(s => {
        s.style.display = 'block';
        s.querySelectorAll('.card-wrapper').forEach(c => c.style.display = 'block');
    });
    updateAllArrows();
}

document.getElementById('search-trigger').onclick = () => performSearch(searchInput.value);
searchInput.onkeypress = (e) => { if(e.key === 'Enter') performSearch(searchInput.value); };

// 2. SMOOTH TAB SCROLLING
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        
        // Remove active class from all tabs
        document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active-tab'));
        // Add to current
        link.classList.add('active-tab');

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
});

// 3. CORE UI LOGIC
function toggleExpand(event, card) {
    event.stopPropagation();
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && activeCard !== card) activeCard.classList.remove('active');
    card.classList.toggle('active');
}

window.onclick = (e) => {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && !activeCard.contains(e.target)) activeCard.classList.remove('active');
    if (!e.target.closest('.search-wrapper')) suggestionBox.style.display = 'none';
};

function sideScroll(id, dir) {
    const el = document.getElementById(id);
    el.scrollLeft += (dir === 'left' ? -280 : 280);
    setTimeout(updateAllArrows, 300);
}

function updateAllArrows() {
    sections.forEach(s => {
        const container = s.querySelector('.horizontal-scroll-container');
        const l = s.querySelector('.left');
        const r = s.querySelector('.right');
        if(!container || !l || !r) return;
        l.style.display = container.scrollLeft > 5 ? 'flex' : 'none';
        r.style.display = (container.scrollLeft + container.clientWidth < container.scrollWidth - 10) ? 'flex' : 'none';
    });
}

window.onload = updateAllArrows;