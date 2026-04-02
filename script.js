// 1. SMOOTH SCROLL TO SECTIONS
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offset = 120; // Header + Nav height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

// 2. PRODUCT EXPANSION (Keeping your requested animation)
function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        setTimeout(() => card.classList.add('active'), 100);
        return;
    }
    card.classList.toggle('active');
}

// Close on scroll or click outside
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

// 3. AUTO-BANNER
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);