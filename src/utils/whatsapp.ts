export const openWhatsAppQuote = () => {
  const phoneNumber = '918074616049';
  const message = encodeURIComponent(
    'Hi! I would like to get a quote for safety nets installation. Please provide me with more information.'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Open WhatsApp in new tab/window
  window.open(whatsappUrl, '_blank');
};
