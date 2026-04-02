const allProducts = [
    { id: "sc-container", name: "Centella Cream", short: "Soothing.", long: "• Fast-absorbing formula<br>• Repairs skin barrier<br>• 100% Organic Centella", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400" },
    { id: "sc-container", name: "Rose Toner", short: "pH Balance.", long: "• Natural glow booster<br>• Refreshing aroma<br>• Alcohol-free formula", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400" },
    { id: "kb-container", name: "Glow Essence", short: "Glass Skin.", long: "• Deep hydration<br>• Korean formula<br>• Radiant finish", price: "Rs. 6,800", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
    { id: "bc-container", name: "Cocoa Body", short: "Moisture.", long: "• Cocoa butter rich<br>• 24h hydration<br>• Smooth finish", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1556229167-7319113946d8?w=400" }
];

const MY_NUMBER = "94727060167";

window.onload = () => { loadProducts(); };

function loadProducts() {
    allProducts.forEach(p => {
        const target = document.getElementById(p.id);
        if(!target) return;
        target.innerHTML += `
            <div class="card-wrapper">
                <div class="product-card" onclick="toggleExpand(event, this)">
                    <div class="card-image"><img src="${p.img}"></div>
                    <div class="card-details">
                        <h3 class="item-name">${p.name}</h3>
                        <p class="short-desc">${p.short}</p>
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
    
    // Reset all cards and sections
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.category-section').forEach(s => s.style.zIndex = "10");

    if(!isActive) {
        card.classList.add('active');
        // Bring current section and card to front
        card.closest('.category-section').style.zIndex = "999";
    }
}

// Global click to reset
window.onclick = (e) => {
    if(!e.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.category-section').forEach(s => s.style.zIndex = "10");
    }
};