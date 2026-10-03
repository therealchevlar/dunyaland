import React, { useState, useMemo } from 'react';
import { Property, PropertyStatus, Currency } from '../types';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

interface PropertiesShowcaseProps {
  properties: Property[];
  currentCurrency: Currency;
  onSelectProperty: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
}

export const PropertiesShowcase: React.FC<PropertiesShowcaseProps> = ({
  properties,
  currentCurrency,
  onSelectProperty,
  onScheduleVisit,
}) => {
  const [activeStatus, setActiveStatus] = useState<PropertyStatus | 'all'>('ready');
  const [activeCity, setActiveCity] = useState<'All' | 'Karachi' | 'Lahore' | 'Islamabad'>('All');

  // Format price into selected currency
  const formatPrice = (pricePKR: number, defaultDisplay: string): string => {
    if (currentCurrency === 'PKR') {
      return defaultDisplay;
    }
    // Approximate conversion rates: 1 USD ≈ 278 PKR, 1 AED ≈ 75.7 PKR
    if (currentCurrency === 'USD') {
      const usdVal = pricePKR / 278;
      if (usdVal >= 1000000) {
        return `$${(usdVal / 1000000).toFixed(2)}M USD`;
      }
      return `$${Math.round(usdVal).toLocaleString()} USD`;
    }
    if (currentCurrency === 'AED') {
      const aedVal = pricePKR / 75.7;
      if (aedVal >= 1000000) {
        return `AED ${(aedVal / 1000000).toFixed(2)}M`;
      }
      return `AED ${Math.round(aedVal).toLocaleString()}`;
    }
    return defaultDisplay;
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      const statusMatch = activeStatus === 'all' || item.status === activeStatus;
      const cityMatch = activeCity === 'All' || item.city === activeCity;
      return statusMatch && cityMatch;
    });
  }, [properties, activeStatus, activeCity]);

  return (
    <section id="properties" className="relative py-28 bg-[#0D0D10] text-[#EDEDED] border-t border-[#C9A86C]/15">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C9A86C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Distinguished Residences
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9A9AA6] max-w-xl font-light">
              Handpicked luxury estates, waterfront residences, and high-altitude penthouses across Pakistan’s most prestigious postcodes.
            </p>
          </div>

          {/* Status Tabs: Ready to Move In vs Off-Plan */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="inline-flex p-1 bg-[#16161C] border border-[#2D2D36] rounded-lg">
              <button
                onClick={() => setActiveStatus('ready')}
                className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-md transition-all uppercase whitespace-nowrap ${
                  activeStatus === 'ready'
                    ? 'bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] shadow-md'
                    : 'text-[#A0A0AB] hover:text-white'
                }`}
              >
                Ready to Move In
              </button>
              <button
                onClick={() => setActiveStatus('off-plan')}
                className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-md transition-all uppercase whitespace-nowrap ${
                  activeStatus === 'off-plan'
                    ? 'bg-gradient-to-r from-[#DFBF7A] via-[#C9A86C] to-[#B38944] text-[#0A0A0B] shadow-md'
                    : 'text-[#A0A0AB] hover:text-white'
                }`}
              >
                Off-Plan & New
              </button>
              <button
                onClick={() => setActiveStatus('all')}
                className={`px-3 py-2 text-xs font-semibold tracking-wider rounded-md transition-all uppercase whitespace-nowrap ${
                  activeStatus === 'all'
                    ? 'bg-[#292933] text-white'
                    : 'text-[#8A8A96] hover:text-white'
                }`}
              >
                All
              </button>
            </div>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium border-b border-[#23232C]">
          <span className="text-[#737380] uppercase tracking-wider text-[11px] mr-2">Region:</span>
          {(['All', 'Karachi', 'Lahore', 'Islamabad'] as const).map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-3.5 py-1.5 rounded transition-all whitespace-nowrap ${
                activeCity === city
                  ? 'bg-[#C9A86C]/15 border border-[#C9A86C] text-[#F3E7C4] font-semibold'
                  : 'bg-[#141418] border border-[#23232B] text-[#9E9EA8] hover:text-white hover:border-[#3D3D47]'
              }`}
            >
              {city === 'All' ? 'All Metropolitans' : `${city} Prime`}
            </button>
          ))}
          <span className="text-xs text-[#7A7A88] ml-auto hidden md:inline tabular-nums">
            Showing {filteredProperties.length} verified {filteredProperties.length === 1 ? 'property' : 'properties'}
          </span>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="group bg-[#131317] border border-[#26262F] hover:border-[#C9A86C]/50 rounded-lg overflow-hidden transition-all duration-300 flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A1A22]">
                <img
                  src={property.coverImage}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-100"
                  onError={(e) => {
                    // Graceful fallback to dark marble architectural SVG canvas
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-gradient-to-br', 'from-[#1A1A22]', 'to-[#0E0E12]');
                    }
                  }}
                />

                {/* Scrim Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-black/30 pointer-events-none" />

                {/* Top Floating Badge Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#0A0A0B]/80 backdrop-blur-md text-[#F3E7C4] border border-[#C9A86C]/30 rounded">
                    {property.type}
                  </span>

                  {property.exclusive && (
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 bg-[#C9A86C] text-[#0A0A0B] rounded shadow-sm">
                      Dunyaland Exclusive
                    </span>
                  )}
                </div>

                {/* Bottom Status Marker on Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-1.5 drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A86C]" />
                    <span className="font-medium text-xs">{property.subtitle}</span>
                  </div>
                  {property.status === 'off-plan' && property.constructionProgress && (
                    <span className="text-[11px] text-[#F3E7C4] font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {property.constructionProgress}% Built
                    </span>
                  )}
                </div>
              </div>

              {/* Property Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex items-center gap-2 text-xs text-[#8E8E9E] mb-2">
                    <span>{property.city}</span>
                    <span aria-hidden="true">·</span>
                    <span>{property.neighborhood}</span>
                    {property.status === 'ready' ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#3DD68C] flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Ready
                        </span>
                      </>
                    ) : (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#C9A86C] flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Handover {property.completionDate}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#F3E7C4] transition-colors leading-snug">
                    {property.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 text-xs text-[#A8A8B4] line-clamp-1">
                    {property.tagline}
                  </p>

                  {/* Spec Row */}
                  <div className="mt-5 py-3 border-y border-[#202028] flex items-center justify-between text-xs text-[#C5C5D1]">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-[#C9A86C]" />
                      <span className="font-medium tabular-nums">{property.beds}</span>
                      <span className="text-[#7A7A88]">Beds</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-[#C9A86C]" />
                      <span className="font-medium tabular-nums">{property.baths}</span>
                      <span className="text-[#7A7A88]">Baths</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#C9A86C]" />
                      <span className="font-medium tabular-nums">{property.areaSqFt.toLocaleString()}</span>
                      <span className="text-[#7A7A88]">Sq Ft</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="mt-6 pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8A96] block">
                      {property.status === 'off-plan' ? 'Starting From' : 'Asking Price'}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#F3E7C4] tabular-nums">
                      {formatPrice(property.pricePKR, property.priceDisplay)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProperty(property)}
                      className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1D1D25] hover:bg-[#C9A86C] hover:text-[#0A0A0B] text-white border border-[#2D2D38] hover:border-[#C9A86C] rounded transition-all duration-200"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onScheduleVisit(property)}
                      className="p-2 text-[#C9A86C] hover:text-white bg-[#C9A86C]/10 hover:bg-[#C9A86C]/25 border border-[#C9A86C]/30 rounded transition-all"
                      title="Schedule private viewing"
                      aria-label={`Schedule private viewing for ${property.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All / Portfolio Inquiry Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#14141A] via-[#1A1A22] to-[#14141A] border border-[#C9A86C]/25 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white">
              Seeking An Off-Market Private Listing?
            </h3>
            <p className="text-sm text-[#A0A0AB] mt-1 max-w-xl">
              Over 30% of Dunyaland’s ultra-prime transactions in Karachi and Islamabad occur strictly off-market. Request access to our discreet private ledger.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-[#C9A86C] hover:bg-[#DFBF7A] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.2em] rounded transition-all shadow-lg whitespace-nowrap"
          >
            Access Private Ledger
          </a>
        </div>
      </div>
    </section>
  );
};
