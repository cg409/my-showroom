// A. Item Expansion Logic (Keeping animations & navigation untouched)
function toggleExpand(card) {
    const activeCard = document.querySelector('.product-card.active');
    
    // 1. Two-Click Logic: If another card is active, close it first.
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
        return; // Halt to wait for 2nd click
    }

    // 2. Toggle current card
    if (activeCard === card) {
        card.classList.remove('active');
    } else {
        // 3. RequestAnimationFrame: Smooth open on next frame
        requestAnimationFrame(() => {
            card.classList.add('active');
        });
    }
}

// Passive Scroll Listener: Close active card on scroll
window.addEventListener('scroll', () => {
    const activeCard = document.querySelector('.product-card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }
}, { passive: true });

// Close active card on outside click
window.addEventListener('click', (event) => {
    if (!event.target.closest('.product-card')) {
        const activeCard = document.querySelector('.product-card.active');
        if (activeCard) activeCard.classList.remove('active');
    }
}, { passive: true });

// Stop propagation on buttons (prevent closing)
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => e.stopPropagation());
});


// =========================================================
// B. AUTO-SLIDING BANNER CONTROL (The New Code)
// =========================================================
const slides = document.querySelectorAll('.main-banner .slide');
const dots = document.querySelectorAll('.main-banner .dot');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds per slide

function showSlide(n) {
    // Hide current
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Set new current
    currentSlide = (n + slides.length) % slides.length;
    
    // Show new
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Next Slide automatically
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Indicator Dot clicks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideTimer); // Stop auto on click
        showSlide(index);
        slideTimer = setInterval(nextSlide, slideInterval); // Restart auto
    });
});

// Start the timer
let slideTimer = setInterval(nextSlide, slideInterval);