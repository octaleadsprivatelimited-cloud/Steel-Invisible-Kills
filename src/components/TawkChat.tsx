import React, { useEffect } from 'react';

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

const TawkChat: React.FC = () => {
  useEffect(() => {
    // Check if Tawk.to is already loaded
    if (window.Tawk_API && window.Tawk_API.toggle) {
      return; // Already loaded
    }

    // Standard Tawk.to implementation (same as reference website)
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    (function() {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68ff9c07d0399e195008da17/1j8j7ivhh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.head.appendChild(s1);
      }
    })();
    
    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  // Show placeholder chat button until Tawk.to is configured
  const handleChatClick = () => {
    if (window.Tawk_API && typeof window.Tawk_API.toggle === 'function') {
      window.Tawk_API.toggle();
    } else {
      // Fallback to WhatsApp
      window.open('https://wa.me/917893987771?text=Hi! I would like to get a quote for Premium Invisible Grills and Cloth Hangers installation.', '_blank');
    }
  };

  return (
    <div className="fixed bottom-32 right-6 z-40">
      <button
        onClick={handleChatClick}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Chat with us"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </button>
    </div>
  );
};

export default TawkChat;