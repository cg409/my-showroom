function toggleExpand(card) {
    const isActive = card.classList.contains('active');
    
    // සියලුම active cards ඉවත් කිරීම
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });

    if (!isActive) {
        card.classList.add('active');
        document.body.classList.add('modal-open'); // Background blur එකට
        document.body.style.overflow = 'hidden'; // Scroll නතර කිරීමට
    } else {
        closeAll();
    }
}

function closeAll() {
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
}

// පිටත click කළොත් වැසීමට
window.onclick = function(event) {
    if (event.target.classList.contains('modal-open') || !event.target.closest('.product-card')) {
        closeAll();
    }
}