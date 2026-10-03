import React, { useState } from 'react';
import { BRAND_INFO } from '../data/properties';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Ready to Move In',
    city: 'Karachi',
    budget: 'PKR 15 Crore+',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Muhammad Imran,\n\nI am contacting you from the Dunyaland Website regarding a private inquiry:\n• Name: ${formData.name || 'Discreet Client'}\n• Interest: ${formData.interest}\n• City: ${formData.city}\n• Phone: ${formData.phone || 'Provided upon contact'}\n• Note: ${formData.message || 'I would like to arrange a private consultation.'}`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-[#09090C] text-[#EDEDED] relative border-t border-[#C9A86C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Executive Contact & Office Presence */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] font-semibold mb-2">
                Private Consultation
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Initiate A Confidential Conversation
              </h2>
              <p className="mt-4 text-sm text-[#9A9AA6] leading-relaxed font-light">
                Whether you seek an iconic penthouse overlooking the Arabian Sea or institutional guidance for off-plan capital placement, our executive advisory is at your command.
              </p>

              {/* Direct Phone Lines */}
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-[#121217] border border-[#22222D] rounded-lg">
                  <div className="text-[11px] uppercase tracking-wider text-[#7E7E8C]">
                    Founder & Managing Director
                  </div>
                  <div className="text-base font-serif font-bold text-white mt-0.5">
                    Muhammad Imran
                  </div>
                  <div className="mt-3 space-y-2">
                    {BRAND_INFO.phones.map((phone) => (
                      <a
                        key={phone.number}
                        href={`tel:${phone.raw}`}
                        className="flex items-center gap-3 text-sm text-[#D8D8E2] hover:text-[#C9A86C] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#C9A86C]" />
                        <span className="tabular-nums font-medium tracking-wide">{phone.number}</span>
                        <span className="text-[10px] text-[#7E7E8C]">({phone.label})</span>
                      </a>
                    ))}
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="flex items-center gap-3 text-sm text-[#D8D8E2] hover:text-[#C9A86C] transition-colors pt-1"
                    >
                      <Mail className="w-4 h-4 text-[#C9A86C]" />
                      <span>{BRAND_INFO.email}</span>
                    </a>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="p-4 bg-[#121217] border border-[#22222D] rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C9A86C] shrink-0 mt-1" />
                    <div className="text-xs">
                      <span className="font-semibold text-white block">Karachi Executive Suite:</span>
                      <span className="text-[#9A9AA6]">{BRAND_INFO.headquarters.karachi}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C9A86C] shrink-0 mt-1" />
                    <div className="text-xs">
                      <span className="font-semibold text-white block">Islamabad Capital Suite:</span>
                      <span className="text-[#9A9AA6]">{BRAND_INFO.headquarters.islamabad}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1 border-t border-[#1D1D27] text-xs text-[#8A8A96]">
                    <Clock className="w-3.5 h-3.5 text-[#C9A86C]" />
                    <span>{BRAND_INFO.headquarters.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Block */}
            <div className="mt-8 p-5 bg-gradient-to-r from-[#14141B] to-[#1B1B24] border border-[#25D366]/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Instant WhatsApp Concierge</h4>
                  <p className="text-xs text-[#A0A0AB]">Connect directly with Muhammad Imran for immediate inquiries.</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppDirect}
                className="mt-4 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch WhatsApp Dialogue</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-End Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121217] border border-[#24242F] p-8 sm:p-10 rounded-xl relative shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#3DD68C]/15 border border-[#3DD68C]/40 mx-auto flex items-center justify-center text-[#3DD68C]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-white">
                    Inquiry Transmitted with Discretion
                  </h3>
                  <p className="text-sm text-[#A0A0AB] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'valued investor'}. Muhammad Imran has received your inquiry. An executive associate will reach out within 4 business hours to arrange your private consultation.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-2.5 bg-[#25D366] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#1C1C24] hover:bg-[#252530] text-white text-xs font-medium rounded transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl text-white">
                      Request Private Advisory or Viewing
                    </h3>
                    <p className="text-xs text-[#8A8A96] mt-1">
                      All communications are strictly confidential and governed by non-disclosure standards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Khan"
                        className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white placeholder-[#5A5A66] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white placeholder-[#5A5A66] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. tkhan@investments.com"
                        className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white placeholder-[#5A5A66] transition-all"
                      />
                    </div>

                    {/* Preferred Region */}
                    <div>
                      <label htmlFor="city" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                        Target City
                      </label>
                      <select
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white transition-all"
                      >
                        <option value="Karachi">Karachi (Clifton / DHA / Emaar)</option>
                        <option value="Lahore">Lahore (DHA / Gulberg / Raya)</option>
                        <option value="Islamabad">Islamabad (Sector F / Blue Area)</option>
                        <option value="Multiple">Multiple Metropolitans</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Interest Type */}
                    <div>
                      <label htmlFor="interest" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                        Property Interest
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white transition-all"
                      >
                        <option value="Ready to Move In">Ready to Move In (Luxury Villa / Penthouse)</option>
                        <option value="Off-Plan & New Construction">Off-Plan & New Construction (Installments)</option>
                        <option value="Commercial Landmark">Commercial Landmark / Retail Floor</option>
                        <option value="Off-Market Private Ledger">Off-Market Private Ledger Access</option>
                      </select>
                    </div>

                    {/* Budget Tier */}
                    <div>
                      <label htmlFor="budget" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                        Target Capital Allocation
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white transition-all"
                      >
                        <option value="PKR 10 - 20 Crore">PKR 10 - 20 Crore ($350k - $700k)</option>
                        <option value="PKR 20 - 35 Crore">PKR 20 - 35 Crore ($700k - $1.2M)</option>
                        <option value="PKR 35 - 50 Crore+">PKR 35 - 50 Crore+ ($1.2M - $2M+)</option>
                        <option value="Institutional Family Office">Institutional / Family Office (Multi-Asset)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#A0A0AB] mb-2 font-medium">
                      Specific Requirements or Private Viewing Dates
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your preferred viewing timeline, specific neighborhood desires, or international wire criteria..."
                      className="w-full px-4 py-3 bg-[#181820] border border-[#2B2B38] focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] rounded text-sm text-white placeholder-[#5A5A66] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.2em] rounded hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(201,168,108,0.25)]"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Encrypted Inquiry...</span>
                    ) : (
                      <>
                        <span>Transmit Private Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
