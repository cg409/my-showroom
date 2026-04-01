function toggleExpand(card) {
    const isActive = card.classList.contains('active');
    
    // හැම Card එකක්ම Reset කරනවා
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });

    if (!isActive) {
        card.classList.add('active');
    }
}

// පිටත Click කළොත් Close වීමට
window.onclick = function(event) {
    // Card එකක් ඇතුළේ Click කළොත් Close කරන්න එපා
    if (!event.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => {
            c.classList.remove('active');
        });
    }
}

// "More Details" Button එක Click කළාම Card එක Close වීම වැළැක්වීමට
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.onclick = (e) => e.stopPropagation();
});