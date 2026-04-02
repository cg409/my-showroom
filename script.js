const allProducts = [
    // SKIN CARE (5)
    { id: "sc-container", name: "Centella Cream", long: "• Soothing booster<br>• Calms redness<br>• Natural glow", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400" },
    { id: "sc-container", name: "Rose Toner", long: "• Natural glow booster<br>• Refreshing aroma<br>• Alcohol-free", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400" },
    { id: "sc-container", name: "Vit C Serum", long: "• Brightening effect<br>• Fades dark spots<br>• antioxidant rich", price: "Rs. 3,500", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400" },
    { id: "sc-container", name: "Sunscreen SPF 50", long: "• UV protection<br>• No white cast<br>• Lightweight", price: "Rs. 4,200", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { id: "sc-container", name: "Night Cream", long: "• Intensive repair<br>• Deep hydration<br>• Anti-aging", price: "Rs. 5,100", img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400" },

    // K-BEAUTY (5)
    { id: "kb-container", name: "Glow Essence", long: "• Glass skin finish<br>• Deep hydration<br>• Korean formula", price: "Rs. 6,800", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400" },
    { id: "kb-container", name: "Snail Mucin", long: "• Skin regeneration<br>• Blemish care<br>• Smooth texture", price: "Rs. 5,900", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
    { id: "kb-container", name: "Rice Water", long: "• Brightening toner<br>• Traditional recipe<br>• Soft skin", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400" },
    { id: "kb-container", name: "Mugwort Mask", long: "• Instant calming<br>• Detoxifies pores<br>• Cooling effect", price: "Rs. 2,500", img: "https://images.unsplash.com/photo-1601049541289-9b1b7abc74a9?w=400" },
    { id: "kb-container", name: "Berry Lip Mask", long: "• Overnight repair<br>• Soft lips<br>• Berry extracts", price: "Rs. 1,800", img: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400" },

    // BODY CARE (5)
    { id: "bc-container", name: "Cocoa Lotion", long: "• 24h moisture<br>• Deep nourishment<br>• Cocoa butter", price: "Rs. 2,900", img: "https://images.unsplash.com/photo-1608247764146-d73833f2c9b6?w=400" },
    { id: "bc-container", name: "Gold Scrub", long: "• Exfoliating beads<br>• Radiant body glow<br>• Luxury feel", price: "Rs. 3,800", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" },
    { id: "bc-container", name: "Argan Oil", long: "• Pure Moroccan oil<br>• Skin & Hair care<br>• Non-greasy", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1601612620453-9da62cc829b5?w=400" },
    { id: "bc-container", name: "Hand Cream", long: "• Shea butter rich<br>• Quick absorbing<br>• Softens cuticles", price: "Rs. 1,200", img: "https://images.unsplash.com/photo-1515377666359-24b5dd936720?w=400" },
    { id: "bc-container", name: "Mint Foot Balm", long: "• Cooling peppermint<br>• Heals dry heels<br>• Antibacterial", price: "Rs. 1,500", img: "https://images.unsplash.com/photo-1559567551-4424f7f54941?w=400" },

    // HAIR CARE (5)
    { id: "hc-container", name: "Keratin Shampoo", long: "• Stronger hair<br>• Reduced frizz<br>• Protein formula", price: "Rs. 2,400", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400" },
    { id: "hc-container", name: "Argan Mask", long: "• Deep conditioner<br>• Silky hair finish<br>• Damage repair", price: "Rs. 3,900", img: "https://images.unsplash.com/photo-1527799881357-0296b063117b?w=400" },
    { id: "hc-container", name: "Hair Serum", long: "• Heat protection<br>• High shine<br>• Lightweight oil", price: "Rs. 2,700", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400" },
    { id: "hc-container", name: "Scalp Tonic", long: "• Promotes growth<br>• Rosemary base<br>• Healthy scalp", price: "Rs. 2,100", img: "https://images.unsplash.com/photo-1552046122-03184de85e08?w=400" },
    { id: "hc-container", name: "Conditioner", long: "• Detangles hair<br>• Extra softness<br>• Daily use", price: "Rs. 1,900", img: "https://images.unsplash.com/photo-1519735815433-899aa06c3fb6?w=400" },

    // FACE MASKS (5)
    { id: "fm-container", name: "Blueberry Mask", long: "• Antioxidant rich<br>• Glowing skin<br>• Sheet mask", price: "Rs. 450", img: "https://images.unsplash.com/photo-1512496011931-d21d8b532299?w=400" },
    { id: "fm-container", name: "Charcoal Peel", long: "• Deep pore clean<br>• Removes oil<br>• Detoxifying", price: "Rs. 1,750", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400" },
    { id: "fm-container", name: "Aloe Gel", long: "• 100% Organic<br>• Soothes burns<br>• Hydrating gel", price: "Rs. 950", img: "https://images.unsplash.com/photo-1560934168-819612973b33?w=400" },
    { id: "fm-container", name: "Clay Mask", long: "• Tightens pores<br>• Mineral rich<br>• Oil control", price: "Rs. 2,200", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400" },
    { id: "fm-container", name: "Night Mask", long: "• Sleep hydration<br>• Lavender scent<br>• Wake up fresh", price: "Rs. 3,100", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400" }
];

const MY_NUMBER = "94727060167";

window.onload = () => { 
    loadProducts(); setupNav(); setupSearch(); setInterval(autoSlide, 5000); 
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
                            <i class="fab fa-whatsapp"></i> Order Now
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
        card.closest('.category-section').style.zIndex = "1000";
        // smooth centering
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }, 150);
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
};