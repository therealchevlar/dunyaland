import React from 'react';
import { ShieldCheck, Eye, KeyRound, Award, Banknote, UserCheck } from 'lucide-react';

export const WhyDunyaland: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Private & Off-Market Inventory',
      description: 'Gain confidential entry into Pakistan’s most protected estates, unlisted penthouses, and pre-launch developer allotments before they ever reach public channels.',
      icon: Eye
    },
    {
      num: '02',
      title: '100% Verified Legal Titles',
      description: 'Every plot, apartment, and villa passes comprehensive multi-tier legal audit with local development authorities (LDA, KDA, CDA, DHA) with absolute zero registry ambiguities.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Institutional Wealth Advisory',
      description: 'Underwriting guidance specifically tailored for overseas Pakistanis and institutional family offices across Dubai, the UK, North America, and Singapore.',
      icon: Banknote
    },
    {
      num: '04',
      title: 'Bespoke Architectural Standards',
      description: 'We exclusively represent properties that satisfy high structural criteria—modern seismic class codes, energy-efficient thermal glazing, and world-class luxury finishes.',
      icon: Award
    },
    {
      num: '05',
      title: 'White-Glove Sovereign Concierge',
      description: 'From private airport transfers for overseas viewings to full interior fit-out oversight and international escrow management, our service is completely end-to-end.',
      icon: UserCheck
    },
    {
      num: '06',
      title: 'Turnkey Handover & Asset Management',
      description: 'We do not abandon you at closing. Dunyaland manages post-handover tenant acquisition, premium asset preservation, and high-yield portfolio re-balancing.',
      icon: KeyRound
    }
  ];

  return (
    <section id="why-dunyaland" className="py-28 bg-[#0D0D11] text-[#EDEDED] relative border-t border-[#C9A86C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] font-semibold mb-2">
            The Dunyaland Standard
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Why Discerning Clients Choose Dunyaland
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9A9AA6] font-light">
            Founded on transparency, architectural discernment, and unyielding protection of capital.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-[#121217] border border-[#21212B] hover:border-[#C9A86C]/40 p-8 rounded-lg transition-all duration-300 group hover:bg-[#16161F] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-[#1C1C24] border border-[#2B2B38] flex items-center justify-center group-hover:border-[#C9A86C]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#C9A86C]" />
                    </div>
                    <span className="font-serif text-2xl font-light text-[#C9A86C]/40 group-hover:text-[#C9A86C] transition-colors tabular-nums">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#F3E7C4] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#9A9AA6] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1C26] flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#C9A86C]/80 font-medium">
                  <span>Dunyaland Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
