// 🛒 PRODUCT DATA CENTER - මෙතනට ඔයාට ඕන තරම් Items දාන්න පුළුවන්
const allProducts = [
    {
    section: "sc-1",
    name: "Centella Cream",
    short: "Pure herbal hydration.",
    long: "• Deep soothing effect<br>• Repairs skin barrier",
    price: "Rs. 4,500",
    img: "images/1.png" // මෙන්න මේ විදිහට විතරක් දාන්න
    },
    {
        section: "sc-1",
        name: "Rose Toner",
        short: "Natural petal extract.",
        long: "• Tightens pores<br>• Ph balancing",
        price: "Rs. 2,800",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400"
    },
    {
        section: "sc-1",
        name: "Hyaluronic Acid",
        short: "Intense moisture boost.",
        long: "• Plumps dry skin<br>• 24h hydration",
        price: "Rs. 5,200",
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400"
    },
    {
        section: "sc-1",
        name: "Clay Detox Mask",
        short: "Pore deep cleaning.",
        long: "• Oil control<br>• Smooth texture",
        price: "Rs. 3,400",
        img: "https://images.unsplash.com/photo-1598454441315-9989b5c2dfbf?w=400"
    },
    {
        section: "sc-1",
        name: "Night Oil",
        short: "Overnight repair.",
        long: "• Rich nutrients<br>• Natural glow",
        price: "Rs. 7,500",
        img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400"
    },
    {
        section: "sc-2", // K-Beauty Section
        name: "Glow Serum",
        short: "Glass skin effect.",
        long: "• Vitamin C rich<br>• Brightens skin",
        price: "Rs. 6,800",
        img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400"
    },
    {
        section: "sc-2",
        name: "Rice Essence",
        short: "Traditional whitening.",
        long: "• Softens texture<br>• Pure rice water",
        price: "Rs. 4,200",
        img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
    },
    {
        section: "sc-2",
        name: "SPF 50 Milk",
        short: "Sun shield pro.",
        long: "• No white cast<br>• Lightweight",
        price: "Rs. 3,900",
        img: "https://images.unsplash.com/photo-1622791269389-98ff2a0d7f55?w=400"
    },
    {
        section: "sc-2",
        name: "Lip Tint",
        short: "Berry velvet finish.",
        long: "• Long lasting<br>• Moist lips",
        price: "Rs. 2,100",
        img: "https://images.unsplash.com/photo-1631730486572-c045155f6e80?w=400"
    },
    {
        section: "sc-2",
        name: "Collagen Mask",
        short: "Firming sheet mask.",
        long: "• Deep essence<br>• Anti-wrinkle",
        price: "Rs. 1,500",
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400"
    },
 
    {
        section: "sc-3",
        name: "Collagen Mask",
        short: "Firming sheet mask.",
        long: "• Deep essence<br>• Anti-wrinkle",
        price: "Rs. 1,500",
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400"
    }


];

// --- ⚙️ CORE ENGINE ---

// 1. Generate HTML Cards
function initProducts() {
    allProducts.forEach(p => {
        const target = document.getElementById(p.section);
        if(!target) return;
        const html = `
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
        target.innerHTML += html;
    });
}

// 2. Search & Suggestions
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
        const matches = allProducts.filter(p => p.name.toLowerCase().includes(val)).slice(0,5);
        matches.forEach(m => {
            const d = document.createElement('div');
            d.className = 'suggestion-item';
            d.textContent = m.name;
            d.onclick = () => { sInput.value = m.name; performSearch(m.name); sSuggest.style.display = 'none'; };
            sSuggest.appendChild(d);
        });
    } else { sSuggest.style.display = 'none'; }
});

function performSearch(query) {
    const q = query.toLowerCase().trim();
    let found = false;
    sections.forEach(sec => {
        let hasInSec = false;
        const cat = sec.getAttribute('data-cat-name').toLowerCase();
        sec.querySelectorAll('.card-wrapper').forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if(name.includes(q) || cat.includes(q)) { card.style.display='block'; hasInSec=found=true; }
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

sInput.onkeypress = (e) => { if(e.key==='Enter') performSearch(sInput.value); };
document.getElementById('search-trigger').onclick = () => performSearch(sInput.value);

// 3. Navigation & Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('data-target'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-tab'));
        link.classList.add('active-tab');
        target.scrollIntoView({ behavior: 'smooth' });
    };
});

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

// 4. Card Interaction
function toggleExpand(e, card) {
    e.stopPropagation();
    const active = document.querySelector('.product-card.active');
    if(active && active !== card) active.classList.remove('active');
    card.classList.toggle('active');
}

window.onclick = (e) => {
    const active = document.querySelector('.product-card.active');
    if(active && !active.contains(e.target)) active.classList.remove('active');
    if(!e.target.closest('.search-wrapper')) sSuggest.style.display = 'none';
};

// Start
window.onload = () => { initProducts(); updateAllArrows(); };