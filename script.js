function cleanPhoneNumber(phone) {
    return phone.replace(/\D/g, '');
}

function generateWhatsAppLink() {
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const cleanNumber = cleanPhoneNumber(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

function openWhatsApp() {
    const link = generateWhatsAppLink();
    window.open(link, '_blank');
}

function copyLink() {
    const link = generateWhatsAppLink();
    navigator.clipboard.writeText(link);
    
    const copyButton = document.getElementById('copyButton');
    const originalText = copyButton.innerHTML;
    
    copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        Copiado!
    `;
    
    setTimeout(() => {
        copyButton.innerHTML = originalText;
    }, 2000);
}