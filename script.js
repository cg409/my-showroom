function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. Double-Click Logic: එකක් ඇරිලා තියෙද්දී වෙනත් එකක් එබුවොත් කලින් එක විතරක් වහනවා.
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; // මෙතනින් නවත්වනවා (2nd click එක ඕනේ අලුත් එක අරින්න)
    }

    // 2. ඇරිලා තියෙන එකම ආයෙත් එබුවොත් වහන්න
    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        // 3. කිසිවක් ඇරිලා නැත්නම් කෙලින්ම අරින්න
        card.classList.add('active');
    }
}

// THE FIX: Scroll करද්දී Auto Close වන Logic එක
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
        if (activeCard) {
            activeCard.classList.remove('active');
        }
    }
}

// Button එක Click කළාම Card එක වැසීම වැළැක්වීමට
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.onclick = (e) => e.stopPropagation();
});