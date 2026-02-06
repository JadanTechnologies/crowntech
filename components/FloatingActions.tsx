
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_LINK, PHONES } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {/* Mobile Call Button (Only visible on small screens) */}
      <a
        href={`tel:${PHONES[0]}`}
        className="md:hidden flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      
      {/* WhatsApp Button (Always visible) */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;
