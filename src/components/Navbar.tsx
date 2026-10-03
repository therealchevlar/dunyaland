import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BRAND_INFO } from '../data/properties';
import { Currency } from '../types';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  customLogoUrl: string | null;
  onOpenLogoCustomizer: () => void;
  onOpenPrivateViewing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  customLogoUrl,
  onOpenLogoCustomizer,
  onOpenPrivateViewing
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Properties', href: '#properties' },
    { label: 'New Construction', href: '#new-construction' },
    { label: 'Why Dunyaland', href: '#why-dunyaland' },
    { label: 'Our Story', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#C9A86C]/20 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0A0A0B]/80 via-[#0A0A0B]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand mark */}
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A86C]"
            aria-label="DUNYALAND Real Estate & Marketing Home"
          >
            <Logo customLogoUrl={customLogoUrl} />
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#CCCCCC]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F3E7C4] transition-colors relative py-1 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A86C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary actions & quick contact */}
          <div className="hidden md:flex items-center gap-4">
            {/* Currency selector */}
            <div className="flex items-center bg-[#16161B] border border-[#2D2D36] rounded-md p-0.5 text-xs text-[#A0A0AB]">
              {(['PKR', 'USD', 'AED'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => onCurrencyChange(cur)}
                  className={`px-2 py-1 rounded transition-colors font-medium ${
                    currentCurrency === cur
                      ? 'bg-[#C9A86C] text-[#0A0A0B] shadow-sm font-semibold'
                      : 'hover:text-white'
                  }`}
                  aria-label={`Switch currency to ${cur}`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Direct Executive Phone link */}
            <a
              href={`tel:${BRAND_INFO.phones[0].raw}`}
              className="flex items-center gap-2 text-xs text-[#D8D8E0] hover:text-[#C9A86C] transition-colors px-2 py-1.5 whitespace-nowrap"
              title="Call Muhammad Imran directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A86C]" />
              <span className="tabular-nums font-medium tracking-wider">{BRAND_INFO.phones[0].number}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenPrivateViewing}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A0A0B] bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_14px_rgba(201,168,108,0.25)] whitespace-nowrap"
            >
              <span>Private Viewing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPrivateViewing}
              className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0A0A0B] bg-[#C9A86C] rounded"
            >
              Viewing
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C9A86C] hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F13] border-b border-[#C9A86C]/25 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#D4D4D8] hover:text-[#C9A86C] py-1 border-b border-[#23232B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#8E8E9A]">
              <span>Display Currency:</span>
              <div className="flex gap-1">
                {(['PKR', 'USD', 'AED'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => onCurrencyChange(cur)}
                    className={`px-2.5 py-1 text-xs rounded ${
                      currentCurrency === cur ? 'bg-[#C9A86C] text-[#0A0A0B] font-bold' : 'bg-[#1C1C22] text-[#CCC]'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${BRAND_INFO.phones[0].raw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#191920] border border-[#2D2D36] text-white text-xs font-medium rounded"
              >
                <Phone className="w-4 h-4 text-[#C9A86C]" />
                <span>Call: {BRAND_INFO.phones[0].number}</span>
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hello Muhammad Imran, I am interested in Dunyaland luxury properties.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold rounded"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Muhammad Imran</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
