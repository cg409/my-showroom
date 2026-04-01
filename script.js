// Passive Scroll Listener: Scroll කරද්දී ලැග් එක නැති කරයි
window.addEventListener('scroll', () => {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }
}, { passive: true });

function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. Two-Click Logic: එකක් ඇරිලා තියෙද්දී වෙන එකක් එබුවොත් කලින් එක වහන්න
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; // මෙතනින් නවත්වනවා (අලුත් එක අරින්න 2nd click එක ඕනේ)
    }

    // 2. දැනට ඇරිලා තියෙන එකම එබුවොත් වහන්න
    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        // 3. RequestAnimationFrame: ඊළඟ frame එකේම ස්මූත් ලෙස open කිරීම
        requestAnimationFrame(() => {
            card.classList.add('active');
        });
    }
}

// පිටත Click කළොත් වැසීමට
window.addEventListener('click', (event) => {
    if (!event.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
}, { passive: true });

// More Details Button එක එබුවම Card එක වැසීම වැළැක්වීමට
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => e.stopPropagation());
});