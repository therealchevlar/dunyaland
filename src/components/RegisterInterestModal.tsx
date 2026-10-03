import React, { useState } from 'react';
import { OffPlanProject } from '../types';
import { BRAND_INFO } from '../data/properties';
import { X, Send, CheckCircle2, MessageCircle, Building2 } from 'lucide-react';

interface RegisterInterestModalProps {
  project: OffPlanProject | null;
  onClose: () => void;
}

export const RegisterInterestModal: React.FC<RegisterInterestModalProps> = ({ project, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitPreference: 'Penthouse / Executive Suite',
    paymentPreference: '3.5 - 4 Year Installment Schedule',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `Hello Muhammad Imran,\n\nI wish to register my interest for ${project.name} (${project.location}).\n• Name: ${formData.name || 'Investor'}\n• Phone: ${formData.phone}\n• Unit Preference: ${formData.unitPreference}\n• Starting Target: ${project.startingPrice}\n\nPlease share the detailed payment schedule and unit allocation availability.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#121217] border border-[#C9A86C]/30 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-[#EDEDED]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#9E9EA8] hover:text-white bg-[#22222C] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#3DD68C]/15 border border-[#3DD68C]/40 mx-auto flex items-center justify-center text-[#3DD68C]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-white">Interest Successfully Registered</h3>
            <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed">
              Your registration for <strong>{project.name}</strong> has been logged in Dunyaland’s institutional registry. Muhammad Imran’s team will dispatch the full prospectus and floor plans directly.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 px-4 bg-[#25D366] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect via WhatsApp Now</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-[#1C1C24] hover:bg-[#252530] text-xs text-white rounded transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A86C] font-semibold">
              <Building2 className="w-4 h-4" />
              <span>Off-Plan Allocation</span>
            </div>

            <h3 className="font-serif text-2xl text-white">
              Register Interest: {project.name}
            </h3>
            <p className="text-xs text-[#8E8E9A]">
              Located at {project.location}. Starting from {project.startingPrice} with {project.paymentPlanYears} flexible payment options.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A0A0AB] mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Asad Malik"
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] rounded text-sm text-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A0A0AB] mb-1 font-medium">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +92 333 1234567"
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] rounded text-sm text-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A0A0AB] mb-1 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. asad@holdingcorp.com"
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] rounded text-sm text-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A0A0AB] mb-1 font-medium">
                  Unit Preference
                </label>
                <select
                  value={formData.unitPreference}
                  onChange={(e) => setFormData({ ...formData, unitPreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] rounded text-sm text-white transition-all"
                >
                  <option value="Penthouse / Executive Suite">Sky Penthouse / Executive Suite</option>
                  <option value="3-4 Bedroom Luxury Apartment">3-4 Bedroom Luxury Apartment</option>
                  <option value="2-3 Bedroom Residence">2-3 Bedroom Prime Residence</option>
                  <option value="Full Floor Investment">Full Floor / Multiple Units</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Registering Allocation...</span>
              ) : (
                <>
                  <span>Request Full Prospectus & Pricing</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
