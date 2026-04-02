// 1. SMART ARROW VISIBILITY LOGIC
function updateArrows(containerId, leftBtnId, rightBtnId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    // Scroll වෙන්න පුළුවන් ප්‍රමාණයක් තියේද කියලා බලනවා
    const hasScroll = container.scrollWidth > container.clientWidth;

    if (hasScroll) {
        // Right button එක පෙන්වනවා (මුලින්ම)
        rightBtn.style.display = (container.scrollLeft + container.clientWidth < container.scrollWidth - 5) ? 'flex' : 'none';
        
        // Left button එක පෙන්වන්නේ එක පාරක් හරි දකුණට ගියොත් විතරයි
        leftBtn.style.display = (container.scrollLeft > 5) ? 'flex' : 'none';
    } else {
        // Scroll කරන්න දෙයක් නැත්නම් Arrows දෙකම හංගනවා
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    }
}

// Page එක load වෙද්දී arrows චෙක් කරන්න
window.addEventListener('load', () => {
    updateArrows('skin-container', 'left-btn-skin', 'right-btn-skin');
    updateArrows('k-container', 'left-btn-k', 'right-btn-k');
});

// Window resize වෙද්දීත් arrows චෙක් කරන්න (PC wide screen fix)
window.addEventListener('resize', () => {
    updateArrows('skin-container', 'left-btn-skin', 'right-btn-skin');
    updateArrows('k-container', 'left-btn-k', 'right-btn-k');
});

// 2. SIDE SCROLL FUNCTION
function sideScroll(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 300;
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

// 3. TOGGLE EXPAND (No Jump)
function toggleExpand(event, card) {
    event.preventDefault();
    event.stopPropagation();
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && activeCard !== card) activeCard.classList.remove('active');
    card.classList.toggle('active');
}

// 4. SMOOTH NAV SCROLL
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offset = 140;
        const targetPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
}