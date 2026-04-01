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