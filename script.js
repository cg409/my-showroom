function toggleExpand(card) {
    const isActive = card.classList.contains('active');
    
    // Reset all cards
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });

    if (!isActive) {
        card.classList.add('active');
    }
}

// Card එකෙන් පිටත click කළොත් close කරන්න
window.onclick = function(event) {
    if (!event.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => {
            c.classList.remove('active');
        });
    }
}