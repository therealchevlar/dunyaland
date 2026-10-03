import React from 'react';
import { BRAND_INFO } from '../data/properties';
import { Phone, Mail, MessageCircle, ShieldCheck, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#09090C] text-[#EDEDED] relative border-t border-[#C9A86C]/15 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#C9A86C]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Executive Portrait & Signature Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer champagne gold frame offset */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C9A86C]/25 transform rotate-1 pointer-events-none" />
              
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#15151C] border border-[#272733] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                  alt="Muhammad Imran – Founder of Dunyaland Real Estate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95"
                />
                
                {/* Subtle dark film scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-black/20" />

                {/* Floating Bottom Name Plaque */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0F0F14]/90 backdrop-blur-md border border-[#C9A86C]/30 rounded-lg">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#C9A86C] font-semibold">
                    Managing Director
                  </div>
                  <div className="font-serif text-2xl font-bold text-white mt-1">
                    Muhammad Imran
                  </div>
                  <div className="text-xs text-[#9E9EA8] mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3DD68C]" />
                    <span>Founder, Dunyaland Real Estate & Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose, Quote, & Direct Contact */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] font-semibold mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>Vision & Leadership</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15]">
              Redefining Pakistani Real Estate On The World Stage.
            </h2>

            {/* Prominent Editorial Quote */}
            <div className="my-8 pl-6 border-l-2 border-[#C9A86C]">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F3E7C4] font-light leading-relaxed">
                “Dunyaland was founded on a singular commitment: where you meet your expectations. Luxury is never about ostentation; it is an uncompromising standard of absolute title security, architectural integrity, and lasting legacy.”
              </blockquote>
              <cite className="block text-xs uppercase tracking-widest text-[#8A8A96] mt-3 not-italic">
                — Muhammad Imran
              </cite>
            </div>

            {/* Narrative text */}
            <div className="space-y-4 text-sm sm:text-base text-[#B0B0BD] leading-relaxed font-light">
              <p>
                For nearly two decades, Muhammad Imran has navigated the high-end property landscape of Pakistan, serving institutional leaders, foreign dignitaries, and prominent diaspora families across the United Kingdom, the Arabian Gulf, and the United States.
              </p>
              <p>
                Recognizing the market’s demand for unblemished transparency and Dubai/London caliber advisory, Dunyaland curates an elite inventory that rejects speculative clutter. Every residence on our ledger has been vetted for complete regulatory sanction, structural excellence, and sovereign value retention.
              </p>
            </div>

            {/* Direct Contact Action Badges */}
            <div className="mt-8 pt-6 border-t border-[#20202A] flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${BRAND_INFO.phones[0].raw}`}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-[#16161D] hover:bg-[#1E1E28] border border-[#2B2B38] text-white text-xs font-semibold rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A86C]" />
                <span>Direct Line: {BRAND_INFO.phones[0].number}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hello Muhammad Imran, I would like to consult with you directly regarding Dunyaland properties.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Private Advisory</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-[#16161D] hover:bg-[#1E1E28] border border-[#2B2B38] text-[#C5C5D1] hover:text-white text-xs font-medium rounded transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9A86C]" />
                <span>{BRAND_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
