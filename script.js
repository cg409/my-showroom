// ==========================================
// 1. SMOOTH SCROLL FOR CATEGORIES
// ==========================================
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        // Offset to account for sticky header and nav
        const offset = 140; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// ==========================================
// 2. PRODUCT EXPANSION LOGIC
// ==========================================
function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        // Small delay to allow the other card to close
        setTimeout(() => card.classList.add('active'), 100);
        return;
    }

    card.classList.toggle('active');
}

// Close active card on scroll or outside click
window.addEventListener('scroll', () => {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) activeCard.classList.remove('active');
}, { passive: true });

document.addEventListener('click', (e) => {
    if (!e.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
});

// ==========================================
// 3. AUTO-SLIDING BANNER
// ==========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if(slides.length > 0) {
    setInterval(nextSlide, 5000); // Change every 5 seconds
}