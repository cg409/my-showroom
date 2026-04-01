window.addEventListener('scroll', () => {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }
}, { passive: true });

function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; 
    }

    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        requestAnimationFrame(() => {
            card.classList.add('active');
        });
    }
}

window.addEventListener('click', (event) => {
    if (!event.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
}, { passive: true });

document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => e.stopPropagation());
});