function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        // පොඩි delay එකක් තියමු transition එක ලස්සනට ඉවර වෙන්න
        setTimeout(() => {
            card.classList.add('active');
        }, 300);
        return;
    }

    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        card.classList.add('active');
    }
}

// Scroll කරද්දී පාවී යන එක නවත්වන්න සහ smoothව close කරන්න
window.onscroll = function() {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }
};

window.onclick = function(event) {
    if (!event.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
}

document.querySelectorAll('.more-btn').forEach(btn => {
    btn.onclick = (e) => e.stopPropagation();
});