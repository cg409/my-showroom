function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. Double-Click Logic: එකක් ඇරිලා තියෙද්දී වෙන එකක් එබුවොත් කලින් එක වහනවා.
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; 
    }

    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        card.classList.add('active');
    }
}

// 2. Scroll කරද්දී Auto Close වන Logic එක
window.onscroll = function() {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }
};

// 3. පිටත Click කළොත් වැසීමට
window.onclick = function(event) {
    if (!event.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
}

// Button එක Click කළාම Card එක වැසීම වැළැක්වීමට
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.onclick = (e) => e.stopPropagation();
});