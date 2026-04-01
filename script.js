function toggleExpand(card) {
    const isActive = card.classList.contains('active');
    
    // කලින් තිබුණ active cards අයින් කරනවා
    closeAll();

    if (!isActive) {
        // ඇනිමේෂන් එක පටන් ගන්න කලින් පොඩි වෙලාවක් දෙනවා (Smoothness)
        window.requestAnimationFrame(() => {
            card.classList.add('active');
            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden'; // පසුබිම scroll වීම නවත්වන්න
        });
    }
}

function closeAll() {
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
}

// Card එකෙන් පිටත click කළොත් Close කරන්න
window.onclick = function(event) {
    if (event.target.classList.contains('modal-open')) {
        closeAll();
    }
}