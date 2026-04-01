function toggleExpand(card) {
    const isActive = card.classList.contains('active');
    
    // සියලුම cards reset කරන්න
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });

    // දැනට click කළ එක active නොවී තිබුණේ නම් එය active කරන්න
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