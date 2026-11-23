/**
 * Handler Permintaan Penawaran & WhatsApp Generator
 * (PRD Section 5.9, 6.4 & 12 - quotation.js)
 */

function sendProductInquiry(productName) {
  const number = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappNumber) 
    ? SITE_CONFIG.whatsappNumber 
    : '628000000000';

  const text = `Halo ${SITE_CONFIG ? SITE_CONFIG.companyName : 'Aris Ducting'}, saya ingin bertanya mengenai produk *${productName}*.\n\nMohon informasi spesifikasi, ketebalan material yang tersedia, dan estimasi penawaran harganya. Terima kasih.`;
  
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function sendServiceInquiry(serviceName) {
  const number = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappNumber) 
    ? SITE_CONFIG.whatsappNumber 
    : '628000000000';

  const text = `Halo ${SITE_CONFIG ? SITE_CONFIG.companyName : 'Aris Ducting'}, saya ingin berkonsultasi mengenai layanan *${serviceName}* untuk proyek kami.\n\nMohon informasi ketersediaan jadwal survei dan estimasi biayanya. Terima kasih.`;
  
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
