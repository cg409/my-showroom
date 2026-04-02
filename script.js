function toggleExpand(event, card) {
    // 1. පේජ් එක උඩට පැනීම වළක්වයි
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const activeCard = document.querySelector('.product-card.active');

    // 2. වෙනත් active card එකක් ඇත්නම් එය වසා දමයි
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
    }

    // 3. දැනට ක්ලික් කළ card එක toggle කරයි
    card.classList.toggle('active');
}

// 4. Smooth scroll for navigation
function smoothScroll(event, targetId) {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 120,
            behavior: 'smooth'
        });
    }
}

// 5. Card එකෙන් පිටත ක්ලික් කළොත් එය වසා දමයි
document.addEventListener('click', (e) => {
    if (!e.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
});