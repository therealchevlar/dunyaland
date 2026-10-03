import React, { useState } from 'react';
import { Property, Currency } from '../types';
import { BRAND_INFO } from '../data/properties';
import { X, Bed, Bath, Maximize2, MapPin, CheckCircle2, ShieldCheck, Calendar, Phone, MessageCircle } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  currentCurrency: Currency;
  onClose: () => void;
  onScheduleVisit: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  currentCurrency,
  onClose,
  onScheduleVisit
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!property) return null;

  const formatPrice = (pricePKR: number, defaultDisplay: string): string => {
    if (currentCurrency === 'PKR') return defaultDisplay;
    if (currentCurrency === 'USD') {
      const usdVal = pricePKR / 278;
      if (usdVal >= 1000000) return `$${(usdVal / 1000000).toFixed(2)}M USD`;
      return `$${Math.round(usdVal).toLocaleString()} USD`;
    }
    if (currentCurrency === 'AED') {
      const aedVal = pricePKR / 75.7;
      if (aedVal >= 1000000) return `AED ${(aedVal / 1000000).toFixed(2)}M`;
      return `AED ${Math.round(aedVal).toLocaleString()}`;
    }
    return defaultDisplay;
  };

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.coverImage];

  const handleWhatsAppInquiry = () => {
    const text = `Hello Muhammad Imran,\n\nI am inquiring about the ${property.title} (${property.subtitle}).\nReference ID: ${property.id}\nAsking: ${property.priceDisplay}\n\nPlease share the private dossier and available viewing slots.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#111116] border border-[#C9A86C]/30 rounded-2xl overflow-hidden shadow-2xl my-8 text-[#EDEDED] flex flex-col max-h-[92vh]">
        {/* Sticky Header Bar */}
        <div className="px-6 py-4 bg-[#16161D] border-b border-[#262633] flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-[#C9A86C]/15 border border-[#C9A86C]/40 text-[#F3E7C4] rounded">
              {property.status === 'ready' ? 'Ready for Handover' : 'Off-Plan Project'}
            </span>
            <span className="text-xs text-[#A0A0AB] hidden sm:inline">
              Ref: {property.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#9E9EA8] hover:text-white bg-[#22222C] hover:bg-[#30303E] rounded-full transition-colors"
            aria-label="Close property details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full bg-[#181822] rounded-xl overflow-hidden border border-[#272733]">
              <img
                src={images[activeImageIdx]}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-xs px-2.5 py-1 rounded text-white tabular-nums">
                {activeImageIdx + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`relative w-20 h-14 rounded-md overflow-hidden shrink-0 border transition-all ${
                      activeImageIdx === i ? 'border-[#C9A86C] ring-1 ring-[#C9A86C]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#21212B]">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#C9A86C] font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.location}, {property.city}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-1">
                {property.title}
              </h1>
              <p className="text-sm text-[#A0A0AB] mt-1 italic font-serif">
                {property.tagline}
              </p>
            </div>

            <div className="md:text-right">
              <span className="text-[11px] uppercase tracking-wider text-[#7E7E8C] block">
                {property.status === 'off-plan' ? 'Starting From' : 'Acquisition Value'}
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E7C4] tabular-nums">
                {formatPrice(property.pricePKR, property.priceDisplay)}
              </span>
            </div>
          </div>

          {/* Spec Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#16161D] border border-[#23232F] rounded-xl text-center">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7E7E8C] block">Bedrooms</span>
              <div className="flex items-center justify-center gap-1.5 text-white font-serif text-xl font-bold mt-0.5">
                <Bed className="w-4 h-4 text-[#C9A86C]" />
                <span className="tabular-nums">{property.beds}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7E7E8C] block">Bathrooms</span>
              <div className="flex items-center justify-center gap-1.5 text-white font-serif text-xl font-bold mt-0.5">
                <Bath className="w-4 h-4 text-[#C9A86C]" />
                <span className="tabular-nums">{property.baths}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7E7E8C] block">Covered Space</span>
              <div className="flex items-center justify-center gap-1.5 text-white font-serif text-xl font-bold mt-0.5">
                <Maximize2 className="w-4 h-4 text-[#C9A86C]" />
                <span className="tabular-nums">{property.areaSqFt.toLocaleString()} Sq Ft</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7E7E8C] block">Plot / Share</span>
              <div className="text-white font-serif text-lg font-bold mt-0.5">
                {property.areaYards || 'Trophy Unit'}
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div>
            <h3 className="font-serif text-xl text-white mb-2">Architectural Description</h3>
            <p className="text-sm sm:text-base text-[#B0B0BE] font-light leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Signature Amenities & Structural Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 bg-[#14141A] border border-[#22222D] rounded-xl">
              <h4 className="text-xs uppercase tracking-wider text-[#C9A86C] font-semibold mb-3">
                Key Residence Features
              </h4>
              <ul className="space-y-2.5 text-xs text-[#C5C5D2]">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-[#14141A] border border-[#22222D] rounded-xl">
              <h4 className="text-xs uppercase tracking-wider text-[#C9A86C] font-semibold mb-3">
                Structural & Security Specifications
              </h4>
              <ul className="space-y-2.5 text-xs text-[#C5C5D2]">
                {property.architecturalHighlights.map((high, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3DD68C] shrink-0 mt-0.5" />
                    <span>{high}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Off-Plan Payment Milestones if applicable */}
          {property.status === 'off-plan' && property.installmentPlan && (
            <div className="p-5 bg-gradient-to-r from-[#171720] to-[#1E1E28] border border-[#C9A86C]/30 rounded-xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A86C] font-semibold mb-2">
                <Calendar className="w-4 h-4" />
                <span>Structured Installment Terms</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mt-3">
                <div className="p-3 bg-[#111116] rounded border border-[#252530]">
                  <span className="text-[#7A7A88] block text-[10px]">Down Payment Commitment</span>
                  <span className="text-white font-semibold text-sm mt-0.5 block">{property.downPayment}</span>
                </div>
                <div className="p-3 bg-[#111116] rounded border border-[#252530]">
                  <span className="text-[#7A7A88] block text-[10px]">Installment Horizon</span>
                  <span className="text-white font-semibold text-sm mt-0.5 block">{property.installmentPlan}</span>
                </div>
                <div className="p-3 bg-[#111116] rounded border border-[#252530]">
                  <span className="text-[#7A7A88] block text-[10px]">Expected Handover Date</span>
                  <span className="text-white font-semibold text-sm mt-0.5 block">{property.completionDate}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Action Footer */}
        <div className="px-6 py-4 bg-[#15151C] border-t border-[#262633] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#8E8E9A] flex items-center gap-2">
            <span>Direct consultation with</span>
            <span className="text-white font-medium">Muhammad Imran</span>
            <span>({BRAND_INFO.phones[0].number})</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onScheduleVisit(property);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Schedule Private Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
