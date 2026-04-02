// 🛒 DATA CENTER - මෙතනට Items දාන්න
const allProducts = [
    { section: "sc-1", name: "Centella Cream", short: "Pure herbal hydration.", long: "• Deep soothing effect", price: "Rs. 4,500", img: "images/1.png" },
    { section: "sc-1", name: "Rose Toner", short: "Natural extract.", long: "• Ph balancing", price: "Rs. 2,800", img: "images/2.png" },
    { section: "sc-2", name: "Glow Serum", short: "Glass skin effect.", long: "• Vitamin C rich", price: "Rs. 6,800", img: "images/1.png" }
];

// --- ⚙️ HERO SLIDER LOGIC ---
let currentSlide = 0;
const slidesContainer = document.getElementById('hero-slides');
const totalSlides = 3;

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(autoSlide, 5000); // තත්පර 5න් 5ට මාරු වේ.

// --- ⚙️ CORE ENGINE ---
function initProducts() {
    allProducts.forEach(p => {
        const target = document.getElementById(p.section);
        if(!target) return;
        target.innerHTML += `
            <div class="card-wrapper" data-name="${p.name}">
                <div class="product-card" onclick="toggleExpand(event, this)">
                    <div class="card-image"><img src="${p.img}"></div>
                    <div class="card-details">
                        <h3 class="item-name">${p.name}</h3>
                        <p class="short-desc">${p.short}</p>
                        <div class="long-desc">${p.long}</div>
                        <p class="price">${p.price}</p>
                    </div>
                </div>
            </div>`;
    });
}

// Search, Scroll, Reset & Tab Logic
const sInput = document.getElementById('main-search');
const sClear = document.getElementById('clear-search');
const sSuggest = document.getElementById('search-suggestions');
const sections = document.querySelectorAll('.category-section');

sInput.addEventListener('input', () => {
    const val = sInput.value.toLowerCase().trim();
    sClear.style.display = val ? 'inline-block' : 'none';
    sSuggest.innerHTML = '';
    if(val) {
        sSuggest.style.display = 'block';
        allProducts.filter(p => p.name.toLowerCase().includes(val)).slice(0,5).forEach(m => {
            const d = document.createElement('div');
            d.className = 'suggestion-item'; d.textContent = m.name;
            d.onclick = () => { sInput.value = m.name; performSearch(m.name); sSuggest.style.display = 'none'; };
            sSuggest.appendChild(d);
        });
    } else { sSuggest.style.display = 'none'; }
});

function performSearch(q) {
    let found = false;
    sections.forEach(sec => {
        let hasInSec = false;
        sec.querySelectorAll('.card-wrapper').forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if(name.includes(q.toLowerCase())) { card.style.display='block'; hasInSec=found=true; }
            else card.style.display='none';
        });
        sec.style.display = hasInSec ? 'block' : 'none';
    });
    document.getElementById('no-results').style.display = found ? 'none' : 'block';
    updateAllArrows();
}

function resetSearch() {
    sInput.value = ''; sClear.style.display = sSuggest.style.display = 'none';
    sections.forEach(s => { s.style.display = 'block'; s.querySelectorAll('.card-wrapper').forEach(c => c.style.display='block'); });
    document.getElementById('no-results').style.display = 'none';
    updateAllArrows();
}

function sideScroll(id, dir) {
    const el = document.getElementById(id);
    el.scrollLeft += (dir === 'left' ? -280 : 280);
    setTimeout(updateAllArrows, 300);
}

function updateAllArrows() {
    sections.forEach(s => {
        const c = s.querySelector('.horizontal-scroll-container');
        const l = s.querySelector('.left'), r = s.querySelector('.right');
        if(!c || !l || !r) return;
        l.style.display = c.scrollLeft > 5 ? 'flex' : 'none';
        r.style.display = (c.scrollLeft + c.clientWidth < c.scrollWidth - 10) ? 'flex' : 'none';
    });
}

function toggleExpand(e, card) {
    e.stopPropagation();
    const active = document.querySelector('.product-card.active');
    if(active && active !== card) active.classList.remove('active');
    card.classList.toggle('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('data-target'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-tab'));
        link.classList.add('active-tab');
        target.scrollIntoView({ behavior: 'smooth' });
    };
});

window.onclick = (e) => {
    if(!e.target.closest('.product-card')) document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
    if(!e.target.closest('.search-wrapper')) sSuggest.style.display = 'none';
};

window.onload = () => { initProducts(); updateAllArrows(); };