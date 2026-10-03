import React from 'react';
import { OffPlanProject } from '../types';
import { Building2, Calendar, TrendingUp, CheckCircle2, ChevronRight, ShieldCheck, FileText } from 'lucide-react';

interface OffPlanHighlightsProps {
  projects: OffPlanProject[];
  onRegisterInterest: (project: OffPlanProject) => void;
}

export const OffPlanHighlights: React.FC<OffPlanHighlightsProps> = ({
  projects,
  onRegisterInterest
}) => {
  return (
    <section id="new-construction" className="py-28 bg-[#09090C] text-[#EDEDED] relative border-t border-[#C9A86C]/15 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C9A86C]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] font-semibold mb-2 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Master Developments & Landmarks</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            New Construction & Off-Plan Horizons
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9A9AA6] font-light">
            Vetted institutional developments with guaranteed escrow governance, verified regulatory approvals, and flexible 3 to 4-year structured payment milestones.
          </p>
        </div>

        {/* Highlight Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111116] border border-[#24242E] hover:border-[#C9A86C]/40 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Media header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A22]">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.88]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3 bg-[#0A0A0B]/85 backdrop-blur-sm border border-[#C9A86C]/30 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider text-[#F3E7C4]">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-medium text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {project.location}
                    </span>
                    <span className="text-[#3DD68C] font-semibold text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Fully Approved
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8A96]">
                      {project.city} Metropolitan
                    </span>
                    <span className="text-xs text-[#C9A86C] font-semibold">
                      {project.stats.unitsRemaining} Units Left
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white mt-1 group-hover:text-[#F3E7C4] transition-colors">
                    {project.name}
                  </h3>

                  {/* Construction Progress Bar */}
                  <div className="mt-5 p-3.5 bg-[#17171F] rounded-lg border border-[#272733]">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#9E9EA8] font-medium">Construction Progress</span>
                      <span className="text-[#F3E7C4] font-semibold tabular-nums">{project.progressPercent}%</span>
                    </div>

                    <div className="w-full h-2 bg-[#252530] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#B38944] via-[#C9A86C] to-[#F3E7C4] transition-all duration-1000"
                        style={{ width: `${project.progressPercent}%` }}
                      />
                    </div>

                    <div className="mt-2 text-[11px] text-[#7A7A88] flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A86C]" />
                      <span>Current Phase: {project.currentPhase}</span>
                    </div>
                  </div>

                  {/* Financial & Milestone Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#15151C] border border-[#23232C] rounded-lg">
                      <span className="text-[#7A7A88] block text-[10px] uppercase tracking-wider">
                        Handover Target
                      </span>
                      <div className="flex items-center gap-1.5 text-white font-medium mt-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A86C]" />
                        <span>{project.handoverDate}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#15151C] border border-[#23232C] rounded-lg">
                      <span className="text-[#7A7A88] block text-[10px] uppercase tracking-wider">
                        Payment Schedule
                      </span>
                      <div className="flex items-center gap-1.5 text-white font-medium mt-1">
                        <FileText className="w-3.5 h-3.5 text-[#C9A86C]" />
                        <span>{project.paymentPlanYears} Plan</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="mt-5 space-y-2 text-xs text-[#B0B0BD]">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86C] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <div className="py-4 border-t border-[#20202A] flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8A96] block">
                      Starting Investment
                    </span>
                    <span className="font-serif text-lg font-bold text-[#F3E7C4] tabular-nums">
                      {project.startingPrice}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8A96] block">
                      Target Yield
                    </span>
                    <span className="text-xs font-semibold text-[#3DD68C] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {project.stats.expectedAppreciation}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRegisterInterest(project)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#C9A86C] to-[#B38944] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Register Interest & Payment Plan</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
