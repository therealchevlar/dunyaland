import React, { useState } from 'react';
import { ArrowDown, Compass, ShieldCheck, Award, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { BRAND_INFO } from '../data/properties';
import { Logo } from './Logo';

interface HeroProps {
  onExploreClick: () => void;
  onRequestViewingClick: () => void;
  onOpenLogoCustomizer?: () => void;
  customLogoUrl?: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onRequestViewingClick,
  onOpenLogoCustomizer,
  customLogoUrl
}) => {
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);

  // Subtle ambient audio synthesizer via Web Audio API (zero external network dependency)
  const toggleAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!ambientAudioActive) {
        const ctx = new AudioCtx();
        // Create warm chord drones (F# minor / C# suspended luxury chord)
        const freqs = [185.00, 277.18, 369.99, 440.00, 554.37];
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Gentle tremolo
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.15 + idx * 0.05, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(0.01, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(gain.gain);
          lfo.start();

          gain.gain.setValueAtTime(0.02, ctx.currentTime);
          osc.connect(gain);
          gain.connect(filter);
          osc.start();
        });

        filter.connect(masterGain);
        masterGain.connect(ctx.destination);
        (window as unknown as { __dunyaAudio?: { ctx: AudioContext; gain: GainNode } }).__dunyaAudio = { ctx, gain: masterGain };
        setAmbientAudioActive(true);
      } else {
        const stored = (window as unknown as { __dunyaAudio?: { ctx: AudioContext; gain: GainNode } }).__dunyaAudio;
        if (stored) {
          stored.gain.gain.exponentialRampToValueAtTime(0.0001, stored.ctx.currentTime + 1.2);
          setTimeout(() => {
            stored.ctx.close();
          }, 1500);
        }
        setAmbientAudioActive(false);
      }
    } catch {
      // Audio fallback gracefully handled
      setAmbientAudioActive(!ambientAudioActive);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Architectural Canvas & Dusk Illumination */}
      <div className="absolute inset-0 z-0">
        {/* Deep cinematic backdrop image with graceful fallback */}
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=85"
          alt="Luxury architectural towers at dusk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite] filter brightness-[0.38] contrast-[1.12]"
        />

        {/* Multi-tier gradient overlay to ensure WCAG AA contrast & cinematic mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-[#0A0A0B]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,108,0.12)_0%,_transparent_70%)]" />
        
        {/* Subtle architectural grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #C9A86C 1px, transparent 1px), linear-gradient(to bottom, #C9A86C 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Ambient floating gold light aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C9A86C]/10 rounded-full blur-[120px] pointer-events-none animate-ambient" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Prominent Exact Emblem & Brand Wordmark */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="p-2.5 rounded-full bg-[#0E0E12]/80 border border-[#C9A86C]/30 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] mb-3">
            <Logo variant="mark" size={68} customLogoUrl={customLogoUrl} />
          </div>
          <div className="text-xs uppercase tracking-[0.34em] text-[#C9A86C] font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DUNYALAND · REAL ESTATE & MARKETING</span>
          </div>
        </div>

        {/* Main Monolithic Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] max-w-4xl text-balance">
          Where You Meet Your <span className="italic font-light text-gold-gradient">Expectations.</span>
        </h1>

        {/* Subtitle / Brand Mission Prose */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#B8B8C2] font-light max-w-2xl leading-relaxed text-balance">
          DUNYALAND bridges international high-net-worth standards with Pakistan’s most exclusive residential sanctuaries, trophy penthouses, and visionary off-plan towers.
        </p>

        {/* Primary CTA Decision Block (Restraint: 1 Primary Gold + 1 Outline Action) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.2em] rounded hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_rgba(201,168,108,0.32)] flex items-center justify-center gap-2"
          >
            <span>Explore Properties</span>
            <Compass className="w-4 h-4" />
          </button>

          <button
            onClick={onRequestViewingClick}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#C9A86C]/40 bg-[#121217]/60 backdrop-blur-sm text-[#F3E7C4] hover:bg-[#C9A86C]/10 hover:border-[#C9A86C] text-xs font-semibold uppercase tracking-[0.2em] rounded transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Request Private Viewing</span>
          </button>
        </div>

        {/* Sovereign Trust Signals Adjacency */}
        <div className="mt-16 pt-8 border-t border-[#C9A86C]/15 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#F3E7C4] tabular-nums">
              PKR 48B+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#8A8A96] mt-1">
              Curated Portfolio
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#F3E7C4] tabular-nums">
              100%
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#8A8A96] mt-1">
              Title Verified
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#F3E7C4] tabular-nums">
              18+ Years
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#8A8A96] mt-1">
              Leadership Legacy
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#F3E7C4] tabular-nums">
              450+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#8A8A96] mt-1">
              Private Investors
            </div>
          </div>
        </div>
      </div>

      {/* Floating Audio Atmosphere & Logo Switcher Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        {onOpenLogoCustomizer && (
          <button
            onClick={onOpenLogoCustomizer}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141418]/80 backdrop-blur-md border border-[#C9A86C]/20 hover:border-[#C9A86C]/60 text-[10px] uppercase tracking-wider text-[#C9A86C] rounded transition-all"
            title="Custom logo manager"
          >
            <span>Logo Options</span>
          </button>
        )}

        <button
          onClick={toggleAmbientSound}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#141418]/80 backdrop-blur-md border border-[#C9A86C]/20 hover:border-[#C9A86C]/60 text-[11px] text-[#A5A5B2] hover:text-[#F3E7C4] rounded transition-all"
          aria-label={ambientAudioActive ? 'Mute luxury ambient audio' : 'Play luxury ambient audio'}
          title="Toggle subtle luxury atmospheric audio"
        >
          {ambientAudioActive ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#C9A86C] animate-pulse" />
              <span className="hidden sm:inline">Ambience On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#888]" />
              <span className="hidden sm:inline">Ambience Off</span>
            </>
          )}
        </button>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <a
        href="#properties"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#8E8E9A] hover:text-[#C9A86C] transition-colors group"
        aria-label="Scroll down to featured properties"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium opacity-70 group-hover:opacity-100">
          Scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C9A86C]" />
      </a>
    </section>
  );
};
