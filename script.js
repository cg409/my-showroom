// Card එක Expand කරන සහ අනිත් ඒවා Close කරන function එක
function toggleExpand(card) {
    // වෙනත් active cards තියෙනවා නම් ඒවා අයින් කරනවා
    document.querySelectorAll('.product-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
    });

    // දැනට click කරපු එක active කරනවා/අයින් කරනවා
    card.classList.toggle('active');
}

// WhatsApp එකට message එක යවන function එක
// (මේක අපි පාවිච්චි කරන්නේ More Details පේජ් එක ඇතුළේ තියෙන button එකටයි)
function openWhatsApp(itemName) {
    let phone = "94727060167"; 
    let message = "Hello Med Hub! මට මේ " + itemName + " එක ගැන විස්තර දැනගන්න ඕනේ. මේක තවම තියෙනවද?";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

// පිටත click කළොත් active වෙලා තියෙන card එක වැහෙන්න (Optional - Cool effect)
window.onclick = function(event) {
    if (!event.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => {
            c.classList.remove('active');
        });
    }
}