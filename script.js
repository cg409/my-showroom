const allProducts = [
    // SKIN CARE
    { id: "sc-container", name: "Centella Ampoule", long: "• Repairs skin barrier<br>• Calms redness<br>• Organic extract", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400" },
    { id: "sc-container", name: "Vitamin C Serum", long: "• Brightens skin tone<br>• Fades dark spots<br>• Glow booster", price: "Rs. 3,800", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400" },
    { id: "sc-container", name: "Rose Water Toner", long: "• pH balancing<br>• Refreshing feel<br>• Pure rose extract", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400" },
    { id: "sc-container", name: "Sunscreen SPF 50", long: "• UV protection<br>• No white cast<br>• Lightweight", price: "Rs. 4,200", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { id: "sc-container", name: "Night Repair Cream", long: "• Overnight healing<br>• Intense moisture", price: "Rs. 5,100", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400" },

    // K-BEAUTY
    { id: "kb-container", name: "Snail Mucin 96", long: "• Deeply hydrating<br>• Skin regeneration", price: "Rs. 5,900", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400" },
    { id: "kb-container", name: "Propolis Essence", long: "• Royal jelly honey<br>• Instant radiance", price: "Rs. 6,800", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
    { id: "kb-container", name: "Rice Glow Toner", long: "• Softens skin texture<br>• Brightening", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400" },
    { id: "kb-container", name: "Mugwort Calming", long: "• Anti-inflammatory<br>• Great for acne", price: "Rs. 4,400", img: "https://images.unsplash.com/photo-1601049541289-9b1b7abc74a9?w=400" },
    { id: "kb-container", name: "Korean BB Cream", long: "• Natural coverage<br>• SPF 30+", price: "Rs. 3,500", img: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400" },

    // BODY CARE
    { id: "bc-container", name: "Cocoa Butter", long: "• 48h hydration<br>• Rich scent", price: "Rs. 2,900", img: "https://images.unsplash.com/photo-1608247764146-d73833f2c9b6?w=400" },
    { id: "bc-container", name: "Body Scrub Gold", long: "• Exfoliates dead skin<br>• Gold minerals", price: "Rs. 3,800", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { id: "bc-container", name: "Argan Body Oil", long: "• Luxurious argan oil<br>• Satin glow", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1601612620453-9da62cc829b5?w=400" },
    { id: "bc-container", name: "Hand Repair", long: "• Shea butter formula<br>• Soft hands", price: "Rs. 1,200", img: "https://images.unsplash.com/photo-1515377666359-24b5dd936720?w=400" },
    { id: "bc-container", name: "Foot Balm Mint", long: "• Peppermint cooling<br>• Heals heels", price: "Rs. 1,500", img: "https://images.unsplash.com/photo-1559567551-4424f7f54941?w=400" },

    // HAIR CARE
    { id: "hc-container", name: "Keratin Shampoo", long: "• Strengthening hair<br>• Shine booster", price: "Rs. 2,400", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400" },
    { id: "hc-container", name: "Argan Hair Mask", long: "• Weekly deep care<br>• Intense repair", price: "Rs. 3,900", img: "https://images.unsplash.com/photo-1527799881357-0296b063117b?w=400" },
    { id: "hc-container", name: "Growth Serum", long: "• Stimulates follicles<br>• Rosemary base", price: "Rs. 2,700", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400" },
    { id: "hc-container", name: "Silk Conditioner", long: "• Instant detangle<br>• Easy styling", price: "Rs. 2,100", img: "https://images.unsplash.com/photo-1552046122-03184de85e08?w=400" },
    { id: "hc-container", name: "Scalp Tonic", long: "• Cooling sensation<br>• Healthy scalp", price: "Rs. 1,900", img: "https://images.unsplash.com/photo-1519735815433-899aa06c3fb6?w=400" },

    // FACE MASKS
    { id: "fm-container", name: "Blueberry Mask", long: "• Antioxidant sheet<br>• Radiant glow", price: "Rs. 450", img: "https://images.unsplash.com/photo-1512496011931-d21d8b532299?w=400" },
    { id: "fm-container", name: "Charcoal Peel", long: "• Detoxifies pores<br>• Removes blackheads", price: "Rs. 1,750", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400" },
    { id: "fm-container", name: "Aloe Vera Gel", long: "• 99% pure aloe<br>• Soothes burns", price: "Rs. 950", img: "https://images.unsplash.com/photo-1560934168-819612973b33?w=400" },
    { id: "fm-container", name: "Clay Mud Mask", long: "• Dead Sea minerals<br>• Deep cleaning", price: "Rs. 2,200", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400" },
    { id: "fm-container", name: "Night Sleep Mask", long: "• Intense hydration<br>• Lavender scent", price: "Rs. 3,100", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400" }
];

const MY_NUMBER = "94727060167";

window.onload = () => { 
    loadProducts(); setupNav(); setInterval(autoSlide, 5000); setupSearch(); 
};

function loadProducts() {
    allProducts.forEach(p => {
        const target = document.getElementById(p.id);
        if(!target) return;
        target.innerHTML += `
            <div class="card-wrapper" data-name="${p.name}">
                <div class="product-card" onclick="toggleExpand(event, this)">
                    <div class="card-image"><img src="${p.img}"></div>
                    <div class="card-details">
                        <h3 class="item-name">${p.name}</h3>
                        <div class="long-desc">${p.long}</div>
                        <p class="price">${p.price}</p>
                        <a href="https://wa.me/${MY_NUMBER}?text=Order: ${p.name}" target="_blank" class="wa-btn" onclick="event.stopPropagation()">
                            <i class="fab fa-whatsapp"></i> Order
                        </a>
                    </div>
                </div>
            </div>`;
    });
}

function toggleExpand(e, card) {
    e.stopPropagation();
    const isActive = card.classList.contains('active');
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.category-section').forEach(s => s.style.zIndex = "10");

    if(!isActive) {
        card.classList.add('active');
        card.closest('.category-section').style.zIndex = "999";
    }
}

function setupNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-tab'));
            link.classList.add('active-tab');
            const targetEl = document.getElementById(link.getAttribute('data-target'));
            window.scrollTo({ top: targetEl.offsetTop - 130, behavior: 'smooth' });
        };
    });
}

function setupSearch() {
    const sInput = document.getElementById('main-search'), sSuggest = document.getElementById('search-suggestions');
    sInput.oninput = () => {
        const val = sInput.value.toLowerCase().trim();
        if(val) {
            sSuggest.style.display = 'block'; sSuggest.innerHTML = '';
            allProducts.filter(p => p.name.toLowerCase().includes(val)).slice(0, 5).forEach(m => {
                const div = document.createElement('div'); div.className = 'suggestion-item'; div.textContent = m.name;
                div.onclick = () => { scrollToItem(m.name); sSuggest.style.display = 'none'; sInput.value = ''; };
                sSuggest.appendChild(div);
            });
        } else sSuggest.style.display = 'none';
    };
}

function scrollToItem(name) {
    const wrapper = document.querySelector(`.card-wrapper[data-name="${name}"]`);
    if(wrapper) {
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => toggleExpand({stopPropagation:()=>{}}, wrapper.querySelector('.product-card')), 800);
    }
}

let currentSlide = 0;
function autoSlide() { 
    currentSlide = (currentSlide + 1) % 3; 
    const slides = document.getElementById('hero-slides');
    if(slides) slides.style.transform = `translateX(-${currentSlide * 100}%)`; 
}

window.onclick = (e) => {
    if(!e.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.category-section').forEach(s => s.style.zIndex = "10");
    }
    if(!e.target.closest('.search-wrapper')) document.getElementById('search-suggestions').style.display = 'none';
};