import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_INFO } from '../data/properties';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpen = () => {
    const text = encodeURIComponent('Hello Muhammad Imran, I am visiting the Dunyaland luxury real estate portal and would like to inquire about private acquisitions.');
    window.open(`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#121217]/95 border border-[#25D366]/40 backdrop-blur-md text-xs text-white rounded-full shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-medium text-[11px]">Chat with Muhammad Imran</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#888] hover:text-white ml-1 p-0.5"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with ambient pulse */}
      <button
        onClick={handleOpen}
        className="relative group p-3.5 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Direct WhatsApp Consultation with Muhammad Imran"
        title="Chat on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 group-hover:opacity-100 pointer-events-none" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </button>
    </div>
  );
};
