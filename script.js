// 📦 25 PRODUCTS DATA
const allProducts = [
    // SKIN CARE (5)
    { id: "sc-container", name: "Centella Cream", short: "Herbal relief.", long: "• Soothing<br>• Barrier repair", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400" },
    { id: "sc-container", name: "Rose Toner", short: "Pore tightening.", long: "• pH Balancing<br>• Natural glow", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400" },
    { id: "sc-container", name: "Vitamin C Serum", short: "Brightening.", long: "• Anti-aging<br>• Even skin tone", price: "Rs. 3,500", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400" },
    { id: "sc-container", name: "Sunscreen SPF50", short: "UV Protection.", long: "• Non-greasy<br>• No white cast", price: "Rs. 4,200", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { id: "sc-container", name: "Night Repair", short: "Overnight magic.", long: "• Deep hydration<br>• Smooth skin", price: "Rs. 5,100", img: "https://images.unsplash.com/photo-1601049541289-9b1b7abc74a9?w=400" },

    // K-BEAUTY (5)
    { id: "kb-container", name: "Glow Essence", short: "Glass skin.", long: "• Hydrating<br>• Korean formula", price: "Rs. 6,800", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
    { id: "kb-container", name: "Snail Mucin", short: "Repairing.", long: "• Elasticity<br>• Moisture lock", price: "Rs. 5,900", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400" },
    { id: "kb-container", name: "Rice Water", short: "Softening.", long: "• Brightening<br>• Traditional", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400" },
    { id: "kb-container", name: "Mugwort Mask", short: "Calming.", long: "• For sensitive skin<br>• Detox", price: "Rs. 2,500", img: "https://images.unsplash.com/photo-1570191502231-bb24b5d87fe0?w=400" },
    { id: "kb-container", name: "Lip Mask", short: "Berry glow.", long: "• Soft lips<br>• Daily use", price: "Rs. 1,800", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400" },

    // BODY CARE (5)
    { id: "bc-container", name: "Cocoa Lotion", short: "Moisture.", long: "• Deep softening", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { id: "bc-container", name: "Body Scrub", short: "Exfoliating.", long: "• Coffee extract", price: "Rs. 2,100", img: "https://images.unsplash.com/photo-1608247764146-d73833f2c9b6?w=400" },
    { id: "bc-container", name: "Shower Gel", short: "Freshness.", long: "• Lavender scent", price: "Rs. 1,500", img: "https://images.unsplash.com/photo-1559567551-4424f7f54941?w=400" },
    { id: "bc-container", name: "Hand Cream", short: "Silky hands.", long: "• Shea butter", price: "Rs. 950", img: "https://images.unsplash.com/photo-1515377666359-24b5dd936720?w=400" },
    { id: "bc-container", name: "Body Oil", short: "Glowing skin.", long: "• Argan oil", price: "Rs. 3,800", img: "https://images.unsplash.com/photo-1601612620453-9da62cc829b5?w=400" },

    // HAIR CARE (5)
    { id: "hc-container", name: "Argan Shampoo", short: "Strength.", long: "• Damage repair", price: "Rs. 2,400", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400" },
    { id: "hc-container", name: "Conditioner", short: "Smooth hair.", long: "• Frizz control", price: "Rs. 2,400", img: "https://images.unsplash.com/photo-1519735815433-899aa06c3fb6?w=400" },
    { id: "hc-container", name: "Hair Mask", short: "Deep treat.", long: "• Keratin boost", price: "Rs. 3,500", img: "https://images.unsplash.com/photo-1527799881357-0296b063117b?w=400" },
    { id: "hc-container", name: "Hair Serum", short: "Shine.", long: "• Non-greasy", price: "Rs. 1,900", img: "https://images.unsplash.com/photo-1552046122-03184de85e08?w=400" },
    { id: "hc-container", name: "Root Tonic", short: "Growth.", long: "• Scalp health", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400" },

    // FACE MASKS (5)
    { id: "fm-container", name: "Clay Mask", short: "Pore detox.", long: "• Oil control", price: "Rs. 2,200", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400" },
    { id: "fm-container", name: "Sheet Mask", short: "Hydrating.", long: "• Instant glow", price: "Rs. 450", img: "https://images.unsplash.com/photo-1512496011931-d21d8b532299?w=400" },
    { id: "fm-container", name: "Aloe Gel", short: "Cooling.", long: "• Sunburn relief", price: "Rs. 1,200", img: "https://images.unsplash.com/photo-1560934168-819612973b33?w=400" },
    { id: "fm-container", name: "Peel Off", short: "Blackhead rem.", long: "• Deep clean", price: "Rs. 1,800", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400" },
    { id: "fm-container", name: "Charcoal Mask", short: "Purifying.", long: "• Clear skin", price: "Rs. 2,500", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400" }
];

const MY_NUMBER = "94727060167";

window.onload = () => {
    loadProducts();
    updateAllArrows();
    setupNav(); 
    setInterval(autoSlide, 5000);
};

function loadProducts() {
    allProducts.forEach(p => {
        const target = document.getElementById(p.id);
        if(!target) return;
        const waLink = `https://wa.me/${MY_NUMBER}?text=Order: ${p.name}`;

        target.innerHTML += `
            <div class="card-wrapper" data-name="${p.name}">
                <div class="product-card" onclick="toggleExpand(event, this)">
                    <div class="card-image"><img src="${p.img}"></div>
                    <div class="card-details">
                        <h3 class="item-name">${p.name}</h3>
                        <p class="short-desc">${p.short}</p>
                        <div class="long-desc">${p.long}</div>
                        <p class="price">${p.price}</p>
                        <a href="${waLink}" target="_blank" class="wa-btn" onclick="event.stopPropagation()">
                            <i class="fab fa-whatsapp"></i> Order
                        </a>
                    </div>
                </div>
            </div>`;
    });
}

function setupNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-tab'));
                this.classList.add('active-tab');
                const offset = 130;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
            }
        });
    });
}

const sInput = document.getElementById('main-search');
const sClear = document.getElementById('clear-search');
const sSuggest = document.getElementById('search-suggestions');

sInput.addEventListener('input', () => {
    const val = sInput.value.toLowerCase().trim();
    sClear.style.display = val ? 'inline-block' : 'none';
    sSuggest.innerHTML = '';
    if(val) {
        sSuggest.style.display = 'block';
        const matches = allProducts.filter(p => p.name.toLowerCase().includes(val)).slice(0, 5);
        matches.forEach(m => {
            const div = document.createElement('div');
            div.className = 'suggestion-item'; div.textContent = m.name;
            div.onclick = () => { sInput.value = m.name; performSearch(m.name); sSuggest.style.display = 'none'; };
            sSuggest.appendChild(div);
        });
    } else { sSuggest.style.display = 'none'; resetSearch(); }
});

sClear.onclick = () => {
    sInput.value = ''; sClear.style.display = 'none';
    sSuggest.style.display = 'none'; resetSearch();
};

function performSearch(q) {
    let found = false;
    document.querySelectorAll('.category-section').forEach(sec => {
        let hasInSec = false;
        sec.querySelectorAll('.card-wrapper').forEach(card => {
            if(card.getAttribute('data-name').toLowerCase().includes(q.toLowerCase())) {
                card.style.display='block'; hasInSec=found=true;
            } else card.style.display='none';
        });
        sec.style.display = hasInSec ? 'block' : 'none';
    });
    document.getElementById('no-results').style.display = found ? 'none' : 'block';
    updateAllArrows();
}

function resetSearch() {
    document.querySelectorAll('.category-section').forEach(s => {
        s.style.display = 'block';
        s.querySelectorAll('.card-wrapper').forEach(c => c.style.display='block');
    });
    document.getElementById('no-results').style.display = 'none';
    updateAllArrows();
}

function sideScroll(id, dir) {
    const el = document.getElementById(id);
    el.scrollLeft += (dir === 'left' ? -280 : 280);
    setTimeout(updateAllArrows, 300);
}

function updateAllArrows() {
    document.querySelectorAll('.category-section').forEach(s => {
        const c = s.querySelector('.horizontal-scroll-container');
        const l = s.querySelector('.left'), r = s.querySelector('.right');
        if(!c || !l || !r) return;
        l.style.display = c.scrollLeft > 10 ? 'flex' : 'none';
        r.style.display = (c.scrollLeft + c.clientWidth < c.scrollWidth - 10) ? 'flex' : 'none';
    });
}

function toggleExpand(e, card) {
    e.stopPropagation();
    const isActive = card.classList.contains('active');
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
    if(!isActive) card.classList.add('active');
}

let currentSlide = 0;
function autoSlide() {
    currentSlide = (currentSlide + 1) % 3;
    const slides = document.getElementById('hero-slides');
    if(slides) slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

window.onclick = (e) => {
    if(!e.target.closest('.product-card')) document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
    if(!e.target.closest('.search-wrapper')) sSuggest.style.display = 'none';
};