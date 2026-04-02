// 1. SMART ARROWS VISIBILITY
function updateArrows(containerId, leftBtnId, rightBtnId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);
    if (!container) return;

    const hasScroll = container.scrollWidth > container.clientWidth;
    if (hasScroll) {
        rightBtn.style.display = (container.scrollLeft + container.clientWidth < container.scrollWidth - 10) ? 'flex' : 'none';
        leftBtn.style.display = (container.scrollLeft > 5) ? 'flex' : 'none';
    } else {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    }
}

// Initial Checks
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
    const scrollAmount = 280;
    if (direction === 'left') { container.scrollLeft -= scrollAmount; }
    else { container.scrollLeft += scrollAmount; }
}

// 3. TOGGLE EXPAND
function toggleExpand(event, card) {
    event.preventDefault(); event.stopPropagation();
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && activeCard !== card) activeCard.classList.remove('active');
    card.classList.toggle('active');
}

// 4. SMOOTH SCROLL FOR NAV
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offset = 125; 
        const targetPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
}