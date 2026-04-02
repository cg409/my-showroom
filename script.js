// 1. TOGGLE EXPAND (FIXED)
function toggleExpand(event, card) {
    // සයිට් එක උඩට පනින එක නවත්වන්න
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const activeCard = document.querySelector('.product-card.active');
    
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
    }

    card.classList.toggle('active');
}

// 2. SMOOTH SCROLL FOR NAV
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offset = 130;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
}

// 3. CLOSE ON BACKGROUND CLICK
document.addEventListener('click', (e) => {
    if (!e.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
});