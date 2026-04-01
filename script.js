function toggleExpand(card) {
    // Check if current card is already active
    const isActive = card.classList.contains('active');
    
    // Close all cards
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });

    // If it wasn't active, open it
    if (!isActive) {
        card.classList.add('active');
    }
}

// Close when clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => {
            c.classList.remove('active');
        });
    }
}