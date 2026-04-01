function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. එකක් ඇරිලා තියෙද්දී වෙනත් එකක් එබුවොත් (2-Click Logic):
    // මුලින්ම ඇරිලා තියෙන එක විතරක් වහනවා.
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; // මේක නිසා තමයි දෙවෙනි පාර ඔබන්න වෙන්නේ
    }

    // 2. දැනට ඇරිලා තියෙන එකම එබුවොත් වහන්න
    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        // 3. අලුතින්ම අරින්න
        card.classList.add('active');
    }
}

// Scroll කරද්දී පැන පැන යන්නේ නැති වෙන්න smoothව close කිරීම
window.onscroll = function() {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }
};

// පිටත Click කළොත් වැසීමට
window.onclick = function(event) {
    if (!event.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
}

document.querySelectorAll('.more-btn').forEach(btn => {
    btn.onclick = (e) => e.stopPropagation();
});