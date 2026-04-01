/**
 * Card එක Expand කිරීමට හෝ Collapse කිරීමට පාවිච්චි වේ.
 */
function toggleExpand(card) {
    // දැනට එම Card එක Active ද කියා පරීක්ෂා කරයි
    const isActive = card.classList.contains('active');
    
    // සියලුම Cards වල තියෙන Active පන්තිය ඉවත් කරයි (Reset all)
    document.querySelectorAll('.product-card').forEach(c => {
        c.classList.remove('active');
    });

    // දැනට Click කළ Card එක කලින් Active වී නොතිබුණේ නම් පමණක් එය Active කරයි
    if (!isActive) {
        card.classList.add('active');
    }
}

/**
 * Card එකෙන් පිටත Click කරන විට එය Close කිරීමට පාවිච්චි වේ.
 */
window.onclick = function(event) {
    // Click කළ ස්ථානය Product Card එකක් ඇතුළත නොවේ නම්
    if (!event.target.closest('.product-card')) {
        document.querySelectorAll('.product-card').forEach(c => {
            c.classList.remove('active');
        });
    }
}

/**
 * WhatsApp සම්බන්ධ කිරීමේ Function එක 
 * (මෙය පසුව Details Page එකේදී පාවිච්චි කළ හැක)
 */
function openWhatsApp(itemName) {
    let phone = "94727060167"; 
    let message = "Hello Med Hub! මට මේ " + itemName + " එක ගැන විස්තර දැනගන්න ඕනේ.";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}