import React, { useState, useEffect } from 'react';
import { PROPERTIES, OFF_PLAN_PROJECTS } from './data/properties';
import { Property, OffPlanProject, Currency } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertiesShowcase } from './components/PropertiesShowcase';
import { OffPlanHighlights } from './components/OffPlanHighlights';
import { WhyDunyaland } from './components/WhyDunyaland';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { RegisterInterestModal } from './components/RegisterInterestModal';
import { LogoCustomizerModal } from './components/LogoCustomizerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('PKR');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [registerProject, setRegisterProject] = useState<OffPlanProject | null>(null);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  // Load custom logo from localStorage if previously set
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dunyaland_custom_logo');
      if (saved) {
        setCustomLogoUrl(saved);
      }
    } catch {
      // storage disabled fallback
    }
  }, []);

  const handleUpdateLogo = (url: string | null) => {
    setCustomLogoUrl(url);
    try {
      if (url) {
        localStorage.setItem('dunyaland_custom_logo', url);
      } else {
        localStorage.removeItem('dunyaland_custom_logo');
      }
    } catch {
      // ignore
    }
  };

  const handleScheduleVisit = (property: Property) => {
    setSelectedProperty(null);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
    // Pre-fill message area if needed
    const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;
    if (messageInput) {
      messageInput.value = `I would like to schedule a private viewing for: ${property.title} (${property.subtitle}).`;
      messageInput.focus();
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestViewing = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] relative selection:bg-[#C9A86C]/30 selection:text-[#F3E7C4]">
      {/* Top sticky navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        customLogoUrl={customLogoUrl}
        onOpenLogoCustomizer={() => setIsLogoModalOpen(true)}
        onOpenPrivateViewing={handleRequestViewing}
      />

      {/* Cinematic Full-Screen Hero */}
      <main>
        <Hero
          onExploreClick={handleExploreClick}
          onRequestViewingClick={handleRequestViewing}
          onOpenLogoCustomizer={() => setIsLogoModalOpen(true)}
          customLogoUrl={customLogoUrl}
        />

        {/* Properties Showcase (Main Feature) */}
        <PropertiesShowcase
          properties={PROPERTIES}
          currentCurrency={currentCurrency}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onScheduleVisit={handleScheduleVisit}
        />

        {/* New Construction & Off-Plan Landmarks */}
        <OffPlanHighlights
          projects={OFF_PLAN_PROJECTS}
          onRegisterInterest={(proj) => setRegisterProject(proj)}
        />

        {/* Why Dunyaland (Value Proposition) */}
        <WhyDunyaland />

        {/* Story & Leadership: Muhammad Imran */}
        <AboutSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact & Private Consultation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer customLogoUrl={customLogoUrl} />

      {/* Persistent WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          currentCurrency={currentCurrency}
          onClose={() => setSelectedProperty(null)}
          onScheduleVisit={handleScheduleVisit}
        />
      )}

      {/* Register Interest Modal */}
      {registerProject && (
        <RegisterInterestModal
          project={registerProject}
          onClose={() => setRegisterProject(null)}
        />
      )}

      {/* Logo Customizer Modal */}
      {isLogoModalOpen && (
        <LogoCustomizerModal
          customLogoUrl={customLogoUrl}
          onUpdateLogo={handleUpdateLogo}
          onClose={() => setIsLogoModalOpen(false)}
        />
      )}
    </div>
  );
}
