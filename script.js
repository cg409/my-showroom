function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. එකක් ඇරිලා තියෙද්දී වෙනත් එකක් එබුවොත්:
    // මුලින්ම ඇරිලා තියෙන එක විතරක් වහනවා. අලුත් එක අරින්නේ නැහැ.
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; // මෙතනින් නවත්වනවා (එතකොට අලුත් එක අරින්න 2nd click එක ඕනේ)
    }

    // 2. දැනට ඇරිලා තියෙන එකම එබුවොත් වහන්න
    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        // 3. කිසිවක් ඇරිලා නැත්නම් කෙලින්ම අරින්න
        card.classList.add('active');
    }
}

// Scroll කරද්දී Scale එක Cancel කරන Logic එක
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

// Button එක Click කළොත් Card එක වැසීම වැළැක්වීමට
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.onclick = (e) => e.stopPropagation();
});