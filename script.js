function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. වෙනත් එකක් ඇරිලා තියෙනවා නම් ඒක මුලින්ම වහන්න
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        
        // කලින් එක වැහෙනකම් පොඩි delay එකක් දීලා අලුත් එක අරින්න
        setTimeout(() => {
            card.classList.add('active');
        }, 350); 
        return;
    }

    // 2. ඇරිලා තියෙන එකම ආයෙත් එබුවොත් වහන්න
    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        // 3. කිසිවක් ඇරිලා නැත්නම් කෙලින්ම අරින්න
        card.classList.add('active');
    }
}

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