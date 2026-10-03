export type PropertyStatus = 'ready' | 'off-plan';

export type PropertyType = 'Penthouse' | 'Luxury Villa' | 'Signature Apartment' | 'Waterfront Residence' | 'Commercial Landmark';

export interface Property {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  status: PropertyStatus;
  type: PropertyType;
  city: 'Karachi' | 'Lahore' | 'Islamabad';
  location: string;
  neighborhood: string;
  pricePKR: number; // in PKR
  priceDisplay: string;
  beds: number;
  baths: number;
  areaSqFt: number;
  areaYards?: string;
  completionDate?: string;
  constructionProgress?: number; // percentage
  downPayment?: string;
  installmentPlan?: string;
  coverImage: string;
  gallery: string[];
  features: string[];
  description: string;
  architecturalHighlights: string[];
  exclusive: boolean;
}

export interface OffPlanProject {
  id: string;
  name: string;
  developer: string;
  location: string;
  city: string;
  category: string;
  progressPercent: number;
  currentPhase: string;
  handoverDate: string;
  startingPrice: string;
  paymentPlanYears: string;
  downPaymentPercent: string;
  image: string;
  stats: {
    totalFloors: number;
    unitsRemaining: number;
    expectedAppreciation: string;
  };
  highlights: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  location: string;
  propertyPurchased: string;
  quote: string;
  rating: number;
  verifiedTransaction: boolean;
  avatarText: string;
}

export type Currency = 'PKR' | 'USD' | 'AED';
