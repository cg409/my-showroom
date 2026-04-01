// WhatsApp function with your number
function openWhatsApp(itemName) {
    // ඔයාගේ නම්බර් එක මෙතනට දැම්මා
    let phone = "94727060167"; 
    
    // යවන මැසේජ් එක ලස්සනට හදමු
    let message = "Hello Med Hub! මට මේ " + itemName + " එක ගැන විස්තර දැනගන්න ඕනේ. මේක තවම තියෙනවද?";
    
    // URL එක හදලා අලුත් tab එකක open කරනවා
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
function openModal(name, desc, price, img, pageLink) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    document.getElementById('moreBtn').href = pageLink;
    document.getElementById('productModal').style.display = "block";
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

// පිටත click කළොත් වැහෙන්න
window.onclick = function(event) {
    let modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}