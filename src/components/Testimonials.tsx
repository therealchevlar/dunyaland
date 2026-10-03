import React from 'react';
import { TESTIMONIALS } from '../data/properties';
import { Quote, Star, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 bg-[#0D0D11] text-[#EDEDED] relative border-t border-[#C9A86C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] font-semibold mb-2">
            Client Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Trusted By Global Investors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9A9AA6] font-light">
            Reflections from overseas families, diplomats, and business leaders who acquired their cornerstone properties with Dunyaland.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#121217] border border-[#21212B] hover:border-[#C9A86C]/40 p-8 rounded-xl transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Header with Star Rating & Gold Quote */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A86C] text-[#C9A86C]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C9A86C]/30 group-hover:text-[#C9A86C]/60 transition-colors" />
                </div>

                {/* Quote Content */}
                <blockquote className="text-sm sm:text-[15px] text-[#C8C8D4] leading-relaxed font-light italic">
                  “{t.quote}”
                </blockquote>

                {/* Property Acquired Marker */}
                <div className="mt-5 pt-4 border-t border-[#1C1C26] text-xs text-[#9E9EA8]">
                  <span className="text-[#6D6D78] block text-[10px] uppercase tracking-wider">
                    Acquisition:
                  </span>
                  <span className="text-[#F3E7C4] font-medium mt-0.5 block">
                    {t.propertyPurchased}
                  </span>
                </div>
              </div>

              {/* Client Info Lockup */}
              <div className="mt-8 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1F1F2A] border border-[#C9A86C]/40 flex items-center justify-center font-serif font-bold text-[#F3E7C4] text-xs">
                  {t.avatarText}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-semibold text-white text-sm">
                      {t.clientName}
                    </span>
                    {t.verifiedTransaction && (
                      <span title="Verified Acquisition" className="inline-flex">
                        <CheckCircle className="w-3 h-3 text-[#3DD68C]" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#848492]">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
