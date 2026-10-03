import React from 'react';
import { Logo } from './Logo';
import { BRAND_INFO } from '../data/properties';
import { Phone, Mail, MapPin, Instagram, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  customLogoUrl: string | null;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#C9A86C]/20 text-[#A0A0AB] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A22]">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo customLogoUrl={customLogoUrl} />
            <p className="font-serif italic text-[#C9A86C] text-sm pt-2">
              “{BRAND_INFO.tagline}”
            </p>
            <p className="text-xs sm:text-sm text-[#8E8E9A] leading-relaxed max-w-sm font-light">
              DUNYALAND is Pakistan’s foremost luxury real estate advisory and marketing firm. Specializing in high-altitude penthouses, coastal sanctuaries, and institutional off-plan capital placement in Karachi, Lahore, and Islamabad.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#14141A] border border-[#262633] hover:border-[#C9A86C] flex items-center justify-center text-[#D8D8E2] hover:text-[#C9A86C] transition-colors"
                aria-label="DUNYALAND Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#14141A] border border-[#262633] hover:border-[#C9A86C] flex items-center justify-center text-[#D8D8E2] hover:text-[#C9A86C] transition-colors"
                aria-label="Global Network"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Portfolio Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white">
              Portfolio
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#properties" className="hover:text-[#F3E7C4] transition-colors">
                  Ready Penthouse Collection
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#F3E7C4] transition-colors">
                  Golf & Hillside Villas
                </a>
              </li>
              <li>
                <a href="#new-construction" className="hover:text-[#F3E7C4] transition-colors">
                  Off-Plan Developments
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#F3E7C4] transition-colors">
                  Waterfront Residences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3E7C4] transition-colors">
                  Off-Market Private Ledger
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white">
              Presence
            </div>
            <ul className="space-y-2.5">
              <li>
                <span className="text-white block font-medium">Karachi</span>
                <span className="text-[#737380] text-[11px]">Clifton & DHA Phase 8</span>
              </li>
              <li>
                <span className="text-white block font-medium">Lahore</span>
                <span className="text-[#737380] text-[11px]">DHA Raya & Gulberg</span>
              </li>
              <li>
                <span className="text-white block font-medium">Islamabad</span>
                <span className="text-[#737380] text-[11px]">Blue Area & Diplomatic Crest</span>
              </li>
              <li>
                <span className="text-white block font-medium">Overseas Desk</span>
                <span className="text-[#737380] text-[11px]">Dubai · London · New York</span>
              </li>
            </ul>
          </div>

          {/* Direct Leadership (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white">
              Direct Inquiries
            </div>
            <div className="space-y-2">
              <p className="text-[#D8D8E2] font-serif text-sm font-semibold">
                {BRAND_INFO.founder}
              </p>
              <div className="space-y-1.5 text-xs text-[#8E8E9A]">
                {BRAND_INFO.phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-2 hover:text-[#C9A86C] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A86C]" />
                    <span className="tabular-nums">{phone.number}</span>
                  </a>
                ))}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#C9A86C] transition-colors pt-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C9A86C]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F6F7D]">
          <div>
            © 2026 DUNYALAND Real Estate & Marketing. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Confidentiality Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>Title Escrow Protection</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A0A0AB] hover:text-[#C9A86C] transition-colors ml-4"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
