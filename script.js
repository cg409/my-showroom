// SMART ARROWS
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

window.addEventListener('load', () => {
    updateArrows('sc-1', 'left-btn-1', 'right-btn-1');
    updateArrows('sc-2', 'left-btn-2', 'right-btn-2');
});

function sideScroll(containerId, direction) {
    const container = document.getElementById(containerId);
    if (direction === 'left') { container.scrollLeft -= 280; }
    else { container.scrollLeft += 280; }
}

// TOGGLE CARD
function toggleExpand(event, card) {
    event.stopPropagation();
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
    }
    card.classList.toggle('active');
}

// CLICK OUTSIDE TO CLOSE
window.addEventListener('click', (e) => {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && !activeCard.contains(e.target)) {
        activeCard.classList.remove('active');
    }
});

// NAV SCROLL
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 120, behavior: "smooth" });
    }
}

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('.category-section');

    sections.forEach(section => {
        const cards = section.querySelectorAll('.card-wrapper');
        let hasVisibleCards = false;

        cards.forEach(wrapper => {
            const itemName = wrapper.querySelector('.item-name').innerText.toLowerCase();
            const shortDesc = wrapper.querySelector('.short-desc').innerText.toLowerCase();
            
            // Fuzzy Search: හරියටම ගැලපීම හෝ වචනයේ කොටසක් තිබේදැයි බැලීම
            const isMatch = itemName.includes(input) || shortDesc.includes(input);

            if (isMatch) {
                wrapper.classList.remove('hidden');
                hasVisibleCards = true;
            } else {
                wrapper.classList.add('hidden');
            }
        });

        // අදාළ Category එකේ කිසිම Result එකක් නැතිනම් මුළු Section එකම Hide කරයි
        if (hasVisibleCards) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    // Arrow keys නැවත Update කිරීම (Visible items වලට පමණක්)
    updateArrows('sc-1', 'left-btn-1', 'right-btn-1');
    updateArrows('sc-2', 'left-btn-2', 'right-btn-2');
}