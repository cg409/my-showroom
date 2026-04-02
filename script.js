// 🛒 DATA - Items 5 බැගින් Categories 3කට
const products = [
    { cat: "sc-container", name: "Centella Cream", short: "Herbal hydration.", long: "• Soothes redness<br>• Repairs barrier", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400" },
    { cat: "sc-container", name: "Rose Toner", short: "Pore care.", long: "• Natural extract<br>• pH Balance", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400" },
    { cat: "sc-container", name: "Hyaluronic Acid", short: "Water glow.", long: "• 24h hydration<br>• Plumping", price: "Rs. 5,200", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400" },
    { cat: "sc-container", name: "Clay Mask", short: "Detox skin.", long: "• Oil control<br>• Clear pores", price: "Rs. 3,400", img: "https://images.unsplash.com/photo-1598454441315-9989b5c2dfbf?w=400" },
    { cat: "sc-container", name: "Night Oil", short: "Repair glow.", long: "• Vitamin E<br>• Overnight magic", price: "Rs. 7,500", img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400" },

    { cat: "kb-container", name: "Glow Serum", short: "K-Glass skin.", long: "• Brightens skin<br>• Anti-aging", price: "Rs. 6,800", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400" },
    { cat: "kb-container", name: "Rice Essence", short: "Traditional whitening.", long: "• Smooth texture<br>• Pure rice water", price: "Rs. 4,200", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
    { cat: "kb-container", name: "SPF 50 Milk", short: "No white cast.", long: "• Lightweight<br>• UV Protection", price: "Rs. 3,900", img: "https://images.unsplash.com/photo-1622791269389-98ff2a0d7f55?w=400" },
    { cat: "kb-container", name: "Lip Tint", short: "Berry finish.", long: "• Long lasting<br>• Moist lips", price: "Rs. 2,100", img: "https://images.unsplash.com/photo-1631730486572-c045155f6e80?w=400" },
    { cat: "kb-container", name: "Collagen Mask", short: "Firming.", long: "• Anti-wrinkle<br>• Deep essence", price: "Rs. 1,500", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400" },

    { cat: "bc-container", name: "Cocoa Lotion", short: "Smooth skin.", long: "• 48h moisture<br>• Non-greasy", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { cat: "bc-container", name: "Body Scrub", short: "Coffee glow.", long: "• Exfoliates<br>• Softening", price: "Rs. 2,900", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400" },
    { cat: "bc-container", name: "Body Butter", short: "Rich Shea.", long: "• Deep nourishing<br>• For dry skin", price: "Rs. 4,800", img: "https://images.unsplash.com/photo-1590156221122-c748e7898a0a?w=400" },
    { cat: "bc-container", name: "Body Mist", short: "Floral scent.", long: "• Long lasting<br>• Refreshing", price: "Rs. 2,500", img: "https://images.unsplash.com/photo-1594125355630-d30f2e3ca305?w=400" },
    { cat: "bc-container", name: "Hand Cream", short: "Soft hands.", long: "• Fast absorbing<br>• Daily use", price: "Rs. 1,200", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400" }
];

const WHATSAPP_NO = "94727060167";

function init() {
    products.forEach(p => {
        const container = document.getElementById(p.cat);
        if(!container) return;
        const url = `https://wa.me/${WHATSAPP_NO}?text=Hi, I'm interested in ${p.name}`;
        container.innerHTML += `
            <div class="card-wrapper" data-name="${p.name}">
                <div class="product-card" onclick="toggleExpand(event, this)">
                    <div class="card-image"><img src="${p.img}"></div>
                    <div class="card-details">
                        <h3 class="item-name">${p.name}</h3>
                        <p class="short-desc">${p.short}</p>
                        <div class="long-desc">${p.long}</div>
                        <p class="price">${p.price}</p>
                        <a href="${url}" target="_blank" class="wa-btn" onclick="event.stopPropagation()">
                            <i class="fab fa-whatsapp"></i> FOR MORE
                        </a>
                    </div>
                </div>
            </div>`;
    });
    updateArrows();
}

// Slider
let slideIdx = 0;
setInterval(() => {
    slideIdx = (slideIdx + 1) % 3;
    document.getElementById('hero-slides').style.transform = `translateX(-${slideIdx * 100}%)`;
}, 5000);

// Expand
function toggleExpand(e, card) {
    const isActive = card.classList.contains('active');
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
    if(!isActive) card.classList.add('active');
}

window.onclick = (e) => {
    if(!e.target.closest('.product-card')) document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
};

// Scroll
function sideScroll(id, dir) {
    const el = document.getElementById(id);
    el.scrollLeft += (dir === 'left' ? -280 : 280);
    setTimeout(updateArrows, 300);
}

function updateArrows() {
    document.querySelectorAll('.category-section').forEach(s => {
        const c = s.querySelector('.horizontal-scroll-container');
        s.querySelector('.left').style.display = c.scrollLeft > 10 ? 'flex' : 'none';
        s.querySelector('.right').style.display = (c.scrollLeft + c.clientWidth < c.scrollWidth - 10) ? 'flex' : 'none';
    });
}

// Tabs
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-tab'));
        link.classList.add('active-tab');
    };
});

window.onload = init;