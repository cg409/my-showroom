// 1. SMART ARROW VISIBILITY
function updateArrows(containerId, leftBtnId, rightBtnId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    if (!container) return;

    const hasScroll = container.scrollWidth > container.clientWidth;

    if (hasScroll) {
        // දකුණට යන්න තව ඉඩ තිබේ නම් Right Button පෙන්වන්න
        rightBtn.style.display = (container.scrollLeft + container.clientWidth < container.scrollWidth - 10) ? 'flex' : 'none';
        // වමට 5px ට වඩා ගොස් ඇත්නම් Left Button පෙන්වන්න
        leftBtn.style.display = (container.scrollLeft > 5) ? 'flex' : 'none';
    } else {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    }
}

// Event Listeners for Arrows
window.addEventListener('load', () => {
    updateArrows('skin-container', 'left-btn-skin', 'right-btn-skin');
    updateArrows('k-container', 'left-btn-k', 'right-btn-k');
});
window.addEventListener('resize', () => {
    updateArrows('skin-container', 'left-btn-skin', 'right-btn-skin');
    updateArrows('k-container', 'left-btn-k', 'right-btn-k');
});

// 2. SIDE SCROLL
function sideScroll(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 300;
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

// 3. TOGGLE EXPAND (Animations Fix)
function toggleExpand(event, card) {
    event.preventDefault();
    event.stopPropagation();
    
    const activeCard = document.querySelector('.product-card.active');
    
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
    }
    
    card.classList.toggle('active');
}

// 4. SMOOTH SCROLL FOR NAV
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offset = 150; // Tabs බාර් එකට ඉඩ තැබීම
        const targetPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
}