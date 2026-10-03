import { Property, OffPlanProject, Testimonial } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'dunya-clifton-sky-penthouse',
    title: 'The Sky Sanctuary Penthouse',
    subtitle: 'Clifton Block 4, Karachi',
    tagline: 'Dual-Level Panoramic Arabian Sea Vistas',
    status: 'ready',
    type: 'Penthouse',
    city: 'Karachi',
    location: 'Clifton Block 4',
    neighborhood: 'Marine Promenade Precinct',
    pricePKR: 420000000,
    priceDisplay: 'PKR 42.0 Crore',
    beds: 5,
    baths: 6,
    areaSqFt: 8200,
    areaYards: '910 Sq Yds Equivalent',
    exclusive: true,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80'
    ],
    features: [
      'Private High-Speed Elevator with Biometric Access',
      'Double-Height Glass Living Salon with Sea Views',
      'Italian Calacatta Gold Marble Throughout',
      'Infinity Heated Plunge Pool on Private Terrace',
      'Smart Creston Home Automation System',
      'Bespoke German Poggenpohl Chef Kitchen'
    ],
    architecturalHighlights: [
      'Engineered Acoustic Floor-to-Ceiling Thermal Glazing',
      'Private 4-Car Climate-Controlled Basement Bays',
      'Dedicated Staff Quarters with Independent Service Access'
    ],
    description: 'An architectural tour de force dominating Karachi’s maritime skyline. Spanning 8,200 square feet across two cantilevered upper floors, this trophy penthouse provides unrivaled 360-degree vistas over the Arabian Sea and city lights. Hand-selected European finishes, private rooftop entertainment deck, and 24/7 sovereign concierge service.'
  },
  {
    id: 'dunya-dha-raya-golf-villa',
    title: 'The Sovereign Estate Villa',
    subtitle: 'DHA Phase 6 (Raya Fairways), Lahore',
    tagline: 'Modernist Sanctuary Facing The Championship Greens',
    status: 'ready',
    type: 'Luxury Villa',
    city: 'Lahore',
    location: 'DHA Phase 6, Raya Golf Club',
    neighborhood: 'Fairway Green Boulevard',
    pricePKR: 340000000,
    priceDisplay: 'PKR 34.0 Crore',
    beds: 6,
    baths: 7,
    areaSqFt: 9000,
    areaYards: '2 Kanal (1,000 Sq Yds)',
    exclusive: true,
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80'
    ],
    features: [
      'Direct Unobstructed 18-Hole Golf Course Frontage',
      'Olmec Travertine & Teak Wood Architectural Facade',
      'Private 40ft Heated Lap Pool with Sunken Lounge',
      '12-Seat Dolby Atmos Cinema Suite',
      'Full Solar Micro-Grid (35KW Hybrid Storage)',
      'Sub-Zero & Wolf Integrated Kitchen Suite'
    ],
    architecturalHighlights: [
      'Triple-Height Skylit Central Courtyard with Olive Tree',
      'Underground Wine & Tasting Lounge / Private Vault',
      'Dual Master Suites with Private Garden Terraces'
    ],
    description: 'Positioned on the most coveted fairway frontage of DHA Raya, Lahore, this 2-Kanal masterpiece marries monolithic stone architecture with lush organic landscape design. Designed for the discerning family requiring total privacy, regal entertaining capacity, and golf course vistas.'
  },
  {
    id: 'dunya-margalla-crest-islamabad',
    title: 'Margalla Hillside Palace',
    subtitle: 'Sector F-6/3, Islamabad',
    tagline: 'Diplomatic Enclave Perch Overlooking The Capital Basin',
    status: 'ready',
    type: 'Luxury Villa',
    city: 'Islamabad',
    location: 'Sector F-6/3, Margalla Foothills',
    neighborhood: 'Diplomatic Crest',
    pricePKR: 480000000,
    priceDisplay: 'PKR 48.0 Crore',
    beds: 6,
    baths: 8,
    areaSqFt: 11500,
    areaYards: '2.5 Kanal (1,250 Sq Yds)',
    exclusive: true,
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80'
    ],
    features: [
      'Panoramic Margalla Hills & Faisal Mosque Horizon Views',
      'Bespoke Embassy-Grade Security Infrastructure',
      'Infinity Glass Cantilevered Dining Pavilion',
      'Finnish Pine Sauna & Hydrotherapy Wellness Suite',
      'Imported Statuario White Marble Floor Plates',
      'Guard House with Monitored Perimeter Defense'
    ],
    architecturalHighlights: [
      'Multilevel Waterfall Cascade into Landscaped Gardens',
      'Custom Bronze Chandeliers & French Oak Parquetry',
      'Private Boardroom with Secure Communication Nodes'
    ],
    description: 'Arguably the most prestigious residential compound in Islamabad’s premier Sector F-6. Surrounded by protected pines and national parkland, this estate offers diplomatic serenity, majestic high ceilings, and bespoke European craftsmanship.'
  },
  {
    id: 'dunya-oceanfront-residence-emaar',
    title: 'The Coral Marina Waterfront',
    subtitle: 'Emaar Oceanfront (DHA Phase 8), Karachi',
    tagline: 'Private Marina Facing Residences with Private Yacht Berths',
    status: 'ready',
    type: 'Waterfront Residence',
    city: 'Karachi',
    location: 'Emaar Oceanfront, DHA Phase 8',
    neighborhood: 'Crescent Bay South',
    pricePKR: 195000000,
    priceDisplay: 'PKR 19.5 Crore',
    beds: 4,
    baths: 5,
    areaSqFt: 4600,
    exclusive: false,
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80'
    ],
    features: [
      'Direct Beachfront & Deep-Water Marina Access',
      'Deep Glass Balconies with Sunset Ocean Exposure',
      'Full Access to Private Residents Beach Club',
      'Dedicated Valet & Yacht Charter Desk',
      'Integrated Miele Kitchen Appliances',
      '2 Designated Covered Parking Bays'
    ],
    architecturalHighlights: [
      'Marine-Grade Anti-Corrosion Architectural Glazing',
      'Acoustic Multi-Layer Ceilings & Solid Teak Doors',
      'Double-Glazed Low-E Solar Reflective Windows'
    ],
    description: 'Step into Pakistan’s premier master-planned gated oceanfront enclave in DHA Phase 8. This signature residence features soothing ocean breezes, contemporary open-concept entertaining spaces, and international-standard amenities managed by Emaar.'
  },
  {
    id: 'dunya-gulberg-crown-tower',
    title: 'The Luminary High-Rise Residence',
    subtitle: 'Main Boulevard, Gulberg III, Lahore',
    tagline: 'High-Altitude Luxury in Lahore’s Financial & Cultural Hub',
    status: 'off-plan',
    type: 'Signature Apartment',
    city: 'Lahore',
    location: 'Main Boulevard Gulberg',
    neighborhood: 'MM Alam Financial Corridor',
    pricePKR: 125000000,
    priceDisplay: 'PKR 12.5 Crore (Starting)',
    beds: 3,
    baths: 4,
    areaSqFt: 3400,
    completionDate: 'Q4 2027',
    constructionProgress: 62,
    downPayment: '20% Initial Commitment',
    installmentPlan: '3.5 Year Flexible Quarterly Schedule',
    exclusive: true,
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    features: [
      'Rooftop Helipad & Infinity Sky Lounge (42nd Floor)',
      'Floor-to-Ceiling Thermal Glazing with City Skyline Vistas',
      'Private Cigar Lounge & Temperature-Controlled Cellar',
      'Smart Valet Parking with Electric Vehicle Chargers',
      'High-Speed German Schindler Elevators',
      'Dedicated Concierge & 24/7 Security Operations'
    ],
    architecturalHighlights: [
      'Curvilinear Aerodynamic Wind-Engineered Facade',
      'LEED Gold Certified Sustainable Construction',
      '3-Tier Water Filtration & Continuous Power Backing'
    ],
    description: 'A soaring beacon on Lahore’s Main Boulevard. Designed by award-winning international architects, The Luminary introduces high-altitude metropolitan living, five-star hospitality services, and investor-grade capital appreciation.'
  },
  {
    id: 'dunya-islamabad-grand-heights',
    title: 'The Horizon One Residences',
    subtitle: 'Blue Area / Sector G-7, Islamabad',
    tagline: 'Signature Twin Towers with Margalla Panoramas',
    status: 'off-plan',
    type: 'Penthouse',
    city: 'Islamabad',
    location: 'Jinnah Avenue, Blue Area',
    neighborhood: 'Central Business District',
    pricePKR: 168000000,
    priceDisplay: 'PKR 16.8 Crore (Starting)',
    beds: 4,
    baths: 5,
    areaSqFt: 4100,
    completionDate: 'Q2 2028',
    constructionProgress: 44,
    downPayment: '15% Booking',
    installmentPlan: '4 Year Structured Payment Plan',
    exclusive: true,
    coverImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80'
    ],
    features: [
      'Direct Views of Margalla National Park & Monument',
      'Exclusive Resident Sky Spa & Heated Glass Pool',
      'Double-Height Grand Lobby with 24h Concierge',
      'Private Business Suites & Executive Boardrooms',
      'Dedicated Resident Club & Screening Theater',
      'State-of-the-Art Seismic Class 8 Structural Code'
    ],
    architecturalHighlights: [
      'Acoustic Triple Glazed Curtain Wall System',
      'Touchless Resident Facial Recognition Ingress',
      'Integrated Gray-Water Recycling & Solar Crown'
    ],
    description: 'Positioned in the prime commercial spine of Islamabad, Horizon One redefines corporate and executive residential luxury in the capital. Unrivaled capital growth metrics backed by Dunyaland’s institutional underwriting.'
  }
];

export const OFF_PLAN_PROJECTS: OffPlanProject[] = [
  {
    id: 'project-the-luminary-gulberg',
    name: 'The Luminary Tower',
    developer: 'Dunyaland Signature Developments',
    location: 'Main Boulevard Gulberg, Lahore',
    city: 'Lahore',
    category: 'Ultra-Luxury High-Rise',
    progressPercent: 62,
    currentPhase: 'Superstructure Level 28 & Facade Glazing',
    handoverDate: 'December 2027',
    startingPrice: 'PKR 12.5 Crore',
    paymentPlanYears: '3.5 Years',
    downPaymentPercent: '20%',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    stats: {
      totalFloors: 42,
      unitsRemaining: 14,
      expectedAppreciation: '+38% Upon Handover'
    },
    highlights: [
      'Rooftop Helipad & Sky Club',
      '4-Year Post-Handover Rental Guarantee Available',
      'CDA/LDA Approved with Clear Title Deed Guarantee'
    ]
  },
  {
    id: 'project-horizon-one-capital',
    name: 'Horizon One Residences',
    developer: 'Capital Luxury Consortium & Dunyaland',
    location: 'Blue Area, Islamabad',
    city: 'Islamabad',
    category: 'Twin-Tower Landmark Complex',
    progressPercent: 44,
    currentPhase: 'Core Concrete Pouring Level 16',
    handoverDate: 'June 2028',
    startingPrice: 'PKR 16.8 Crore',
    paymentPlanYears: '4 Years',
    downPaymentPercent: '15%',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    stats: {
      totalFloors: 36,
      unitsRemaining: 21,
      expectedAppreciation: '+42% Projected ROI'
    },
    highlights: [
      'Unobstructed Margalla Hills Panorama',
      'Institutional Escrow Account Management',
      'Diplomatic Security Specification'
    ]
  },
  {
    id: 'project-marina-crest-karachi',
    name: 'Marina Crest Luxury Suites',
    developer: 'Dunyaland Waterfront Portfolio',
    location: 'Clifton Beachfront, Karachi',
    city: 'Karachi',
    category: 'Prime Seafront Residences',
    progressPercent: 78,
    currentPhase: 'Interior MEP & Italian Stone Fit-Out',
    handoverDate: 'September 2026',
    startingPrice: 'PKR 22.0 Crore',
    paymentPlanYears: '2 Years',
    downPaymentPercent: '25%',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    stats: {
      totalFloors: 32,
      unitsRemaining: 7,
      expectedAppreciation: '+29% Realized Yield'
    },
    highlights: [
      'Direct Arabian Sea Access & Private Pier',
      'Pre-Handover Site Inspection Protocol',
      'Foreign Currency Repatriation Assistance'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Tariq Al-Rashidi',
    role: 'Managing Partner, Sovereign Capital',
    location: 'Dubai, UAE',
    propertyPurchased: 'Penthouse Collection, Clifton, Karachi',
    quote: 'As an overseas Pakistani living in Dubai for 24 years, finding institutional transparency in Karachi was my greatest hesitation. Muhammad Imran and the Dunyaland team delivered end-to-end legal title verification, clear construction milestone reporting, and seamless capital transfer. Truly international standards.',
    rating: 5,
    verifiedTransaction: true,
    avatarText: 'TR'
  },
  {
    id: 'test-2',
    clientName: 'Dr. Zoya & Kamran Siddiqui',
    role: 'Cardiothoracic Surgeon & Tech Investor',
    location: 'London (Mayfair), United Kingdom',
    propertyPurchased: '2-Kanal Golf Estate, DHA Raya, Lahore',
    quote: 'Dunyaland curates only the top tier of Pakistan real estate. There are no gimmicks or low-grade listings on their books. Muhammad Imran personally oversaw our private acquisition and ensured the property deed was completely verified. Their discretion and taste are second to none.',
    rating: 5,
    verifiedTransaction: true,
    avatarText: 'ZS'
  },
  {
    id: 'test-3',
    clientName: 'Haris Qureshi',
    role: 'Managing Director, Horizon Ventures',
    location: 'Islamabad / New York',
    propertyPurchased: 'The Horizon One Residences, Blue Area',
    quote: 'Investing off-plan in Pakistan requires absolute trust in the marketing and underwriting partner. Dunyaland’s milestone tracking and structured escrow framework gave our family total peace of mind. They are redefining luxury real estate in the country.',
    rating: 5,
    verifiedTransaction: true,
    avatarText: 'HQ'
  }
];

export const BRAND_INFO = {
  name: 'DUNYALAND',
  subtitle: 'Real Estate & Marketing',
  tagline: 'Where you meet your expectations',
  founder: 'Muhammad Imran',
  founderTitle: 'Founder & Managing Director',
  phones: [
    { label: 'Primary Contact', number: '+92 333 2334124', raw: '+923332334124' },
    { label: 'Executive Line', number: '+92 334 1111533', raw: '+923341111533' }
  ],
  email: 'imran.dunyaland@gmail.com',
  whatsapp: '+923332334124',
  headquarters: {
    karachi: 'Executive Tower 7, Marine Promenade, Clifton Block 4, Karachi, Pakistan',
    islamabad: 'Dunyaland Private Suite, Blue Area Commercial Strip, Islamabad, Pakistan',
    hours: 'Mon – Sat: 10:00 AM – 8:00 PM (Private Viewings by Appointment)'
  },
  stats: [
    { label: 'Curated Portfolio Volume', value: 'PKR 48B+' },
    { label: 'High-Net-Worth Investors', value: '450+' },
    { label: 'Clear Title Guarantee', value: '100%' },
    { label: 'Years of Market Excellence', value: '18+' }
  ]
};
