export type BusinessInfo = {
  name: string;
  tagline: string;
  positioning: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  instagram: string;
  pinterest: string;
  currency: string;
};

export type HeroCard = {
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
};

export type DestinationCouple = {
  id: string;
  destination: string;
  coupleStyle: string;
  season: string;
  setting: string;
  image: string;
  alt: string;
  story: string;
};

export type Destination = {
  id: string;
  name: string;
  bestEventType: string;
  capacity: string;
  investment: string;
  overview: string;
  idealWeddingStyle: string;
  bestSeason: string;
  venueTypes: string[];
  budgetRange: string;
};

export type ServiceExperience = {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
};

export type PortfolioEvent = {
  id: string;
  title: string;
  location: string;
  guestCount: string;
  duration: string;
  tags: string[];
  image: string;
  concept: string;
  planningScope: string;
  designDirection: string;
  guestExperience: string;
  gallery: string[];
};

export type CaseStudyDay = {
  day: string;
  title: string;
  text: string;
  image: string;
};

export type JourneyStep = {
  title: string;
  text: string;
};

export type PortalCard = {
  title: string;
  value: string;
  helper: string;
  progress?: number;
};

export type PackageItem = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

export type Testimonial = {
  initials: string;
  location: string;
  eventType: string;
  quote: string;
};

export type BlogArticle = {
  title: string;
  excerpt: string;
  category: string;
  body: string;
};

export type CalculatorSettings = {
  basePlanningFee: number;
  guestRate: number;
  dayRate: number;
  eventTypeMultipliers: Record<string, number>;
  stylingMultipliers: Record<string, number>;
  locationPremiums: Record<string, number>;
  travelSupportFee: number;
  vendorSourcingFee: number;
};
