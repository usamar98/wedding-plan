import type {
  BlogArticle,
  BusinessInfo,
  CalculatorSettings,
  CaseStudyDay,
  Destination,
  DestinationCouple,
  HeroCard,
  JourneyStep,
  PackageItem,
  PortfolioEvent,
  PortalCard,
  ServiceExperience,
  Testimonial
} from "@/types";

// Change business name, tagline, contact details, currency, and social links here.
export const business: BusinessInfo = {
  name: "Maison Vow Studio",
  tagline: "Destination Weddings, Designed Like Cinema",
  positioning:
    "A premium wedding planning and event design studio for luxury couples, destination weddings, private estates, hotels, and high-end celebrations.",
  whatsappNumber: "+447000000000",
  whatsappMessage:
    "Hi, I'm interested in planning a luxury wedding or destination event.",
  email: "atelier@maisonvowstudio.com",
  instagram: "@maisonvowstudio",
  pinterest: "Maison Vow Studio",
  currency: "$"
};

export const navigationLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Estimator", href: "#budget" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Inquiry", href: "#inquiry" }
];

export const heroCards: HeroCard[] = [
  {
    title: "Lake Vows",
    eyebrow: "Private ceremony",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=82",
    alt: "Bride and groom sharing a cinematic outdoor wedding moment"
  },
  {
    title: "Dock Portrait",
    eyebrow: "Destination couple",
    image:
      "https://images.unsplash.com/photo-1726508684402-ee6029833696?auto=format&fit=crop&w=900&q=82",
    alt: "Bride and groom standing together on a destination wedding dock"
  },
  {
    title: "Cliffside Kiss",
    eyebrow: "Golden hour",
    image:
      "https://images.unsplash.com/photo-1512060847456-85a2a1bf8b25?auto=format&fit=crop&w=900&q=82",
    alt: "Wedding couple kissing during a destination portrait session"
  }
];

// Change destination couple images and copy here.
export const destinationCouples: DestinationCouple[] = [
  {
    id: "lake-como-couple",
    destination: "Lake Como",
    coupleStyle: "Villa ceremony",
    season: "Late summer",
    setting: "Lakefront vows, boat arrival, garden portraits",
    image:
      "https://images.unsplash.com/photo-1726508684402-ee6029833696?auto=format&fit=crop&w=1400&q=82",
    alt: "Bride and groom on a dock during a destination wedding",
    story:
      "For couples who want a weekend that moves from water arrival to candlelit villa dinner."
  },
  {
    id: "santorini-couple",
    destination: "Santorini",
    coupleStyle: "White terrace vows",
    season: "Blue hour",
    setting: "Cliffside ceremony, private terrace dinner",
    image:
      "https://images.unsplash.com/photo-1512060847456-85a2a1bf8b25?auto=format&fit=crop&w=1400&q=82",
    alt: "Destination wedding couple kissing outdoors",
    story:
      "For couples who want the landscape to feel quiet, bright, and cinematic without adding noise."
  },
  {
    id: "marrakech-couple",
    destination: "Marrakech",
    coupleStyle: "Garden dinner",
    season: "Warm evening",
    setting: "Riad welcome, lantern dinner, palm-grove portraits",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1400&q=82",
    alt: "Bride and groom walking outdoors in a destination setting",
    story:
      "For families who want texture, hospitality, and a multi-day celebration with atmosphere."
  },
  {
    id: "bali-couple",
    destination: "Bali",
    coupleStyle: "Private villa event",
    season: "Dry season",
    setting: "Ocean ceremony, villa dinner, farewell brunch",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=82",
    alt: "Couple embracing in an outdoor destination wedding landscape",
    story:
      "For couples who want an intimate private estate rhythm with tropical architecture and late-night music."
  }
];

// Change destinations and modal copy here.
export const destinations: Destination[] = [
  {
    id: "dubai",
    name: "Dubai",
    bestEventType: "Palace receptions",
    capacity: "120 to 600 guests",
    investment: "from $5,800",
    overview:
      "A high-drama destination for skyline suites, private desert dinners, and choreographed ballroom arrivals.",
    idealWeddingStyle: "Modern royal, architectural, after-dark glamour",
    bestSeason: "November to March",
    venueTypes: ["Palace hotels", "Desert camps", "Beach resorts", "Private villas"],
    budgetRange: "$120,000 to $850,000"
  },
  {
    id: "doha",
    name: "Doha",
    bestEventType: "Ballroom affairs",
    capacity: "150 to 900 guests",
    investment: "from $6,200",
    overview:
      "A refined Middle Eastern setting for large-scale productions, couture styling, and generous guest hospitality.",
    idealWeddingStyle: "Cultural luxury, grand florals, ceremonial dining",
    bestSeason: "October to April",
    venueTypes: ["Grand ballrooms", "Museum courtyards", "Waterfront hotels"],
    budgetRange: "$150,000 to $1,200,000"
  },
  {
    id: "london",
    name: "London",
    bestEventType: "Black tie weddings",
    capacity: "60 to 280 guests",
    investment: "from $4,400",
    overview:
      "Historic houses, private clubs, and discreet hotels make London ideal for fashion-led celebrations.",
    idealWeddingStyle: "Black tie, heritage, editorial city wedding",
    bestSeason: "May to October",
    venueTypes: ["Townhouses", "Private clubs", "Five-star hotels"],
    budgetRange: "$95,000 to $620,000"
  },
  {
    id: "lake-como",
    name: "Lake Como",
    bestEventType: "Villa weekends",
    capacity: "40 to 180 guests",
    investment: "from $6,800",
    overview:
      "A cinematic lakefront classic for multi-day weekends, boat arrivals, and villa garden ceremonies.",
    idealWeddingStyle: "European villa, water arrival, garden dinner",
    bestSeason: "May to September",
    venueTypes: ["Historic villas", "Lakefront hotels", "Private gardens"],
    budgetRange: "$180,000 to $950,000"
  },
  {
    id: "santorini",
    name: "Santorini",
    bestEventType: "Cliffside ceremonies",
    capacity: "30 to 140 guests",
    investment: "from $4,900",
    overview:
      "A whitewashed island stage for sunset vows, terrace dining, and intimate destination weekends.",
    idealWeddingStyle: "Minimal coastal, white architecture, blue hour portraits",
    bestSeason: "May to October",
    venueTypes: ["Cliff terraces", "Boutique hotels", "Private estates"],
    budgetRange: "$75,000 to $380,000"
  },
  {
    id: "marrakech",
    name: "Marrakech",
    bestEventType: "Garden dinners",
    capacity: "70 to 350 guests",
    investment: "from $5,200",
    overview:
      "A layered destination for riad takeovers, lantern-lit gardens, and richly textured hospitality.",
    idealWeddingStyle: "Desert romance, craft detail, warm evening dining",
    bestSeason: "March to May, September to November",
    venueTypes: ["Riads", "Palais venues", "Desert camps", "Palm groves"],
    budgetRange: "$85,000 to $520,000"
  },
  {
    id: "malta",
    name: "Malta",
    bestEventType: "Coastal celebrations",
    capacity: "50 to 260 guests",
    investment: "from $4,700",
    overview:
      "A Mediterranean choice for stone courtyards, sea-facing dinners, and yacht-adjacent guest experiences.",
    idealWeddingStyle: "Old-world coastal, limestone, candlelit courtyards",
    bestSeason: "April to October",
    venueTypes: ["Palazzos", "Coastal hotels", "Historic forts"],
    budgetRange: "$90,000 to $460,000"
  },
  {
    id: "cyprus",
    name: "Cyprus",
    bestEventType: "Resort weekends",
    capacity: "40 to 220 guests",
    investment: "from $4,200",
    overview:
      "A warm island base for family-forward destination weddings and elegant resort buyouts.",
    idealWeddingStyle: "Beachside luxury, family hospitality, resort ease",
    bestSeason: "April to June, September to October",
    venueTypes: ["Resorts", "Private villas", "Beach clubs"],
    budgetRange: "$70,000 to $360,000"
  },
  {
    id: "new-york",
    name: "New York",
    bestEventType: "City productions",
    capacity: "80 to 400 guests",
    investment: "from $5,400",
    overview:
      "A sharp city destination for skyline dinners, fashion-forward couples, and high-energy afterparties.",
    idealWeddingStyle: "Metropolitan, black tie, gallery reception",
    bestSeason: "April to June, September to December",
    venueTypes: ["Lofts", "Hotels", "Private clubs", "Rooftops"],
    budgetRange: "$130,000 to $900,000"
  },
  {
    id: "singapore",
    name: "Singapore",
    bestEventType: "Hotel weddings",
    capacity: "120 to 700 guests",
    investment: "from $5,600",
    overview:
      "A polished hub for luxury hotel weddings, seamless travel, and refined multicultural celebrations.",
    idealWeddingStyle: "Hotel luxury, tropical polish, modern formal",
    bestSeason: "Year round",
    venueTypes: ["Luxury hotels", "Garden venues", "Private dining rooms"],
    budgetRange: "$110,000 to $780,000"
  },
  {
    id: "bali",
    name: "Bali",
    bestEventType: "Private villa events",
    capacity: "30 to 180 guests",
    investment: "from $4,800",
    overview:
      "An atmospheric destination for villa takeovers, ocean ceremonies, and full weekend guest journeys.",
    idealWeddingStyle: "Tropical private estate, barefoot luxury, wellness weekend",
    bestSeason: "May to September",
    venueTypes: ["Private villas", "Cliff resorts", "Beach clubs"],
    budgetRange: "$80,000 to $430,000"
  },
  {
    id: "cape-town",
    name: "Cape Town",
    bestEventType: "Vineyard weddings",
    capacity: "50 to 260 guests",
    investment: "from $4,600",
    overview:
      "A textured destination for vineyard estates, mountain views, and design-led guest itineraries.",
    idealWeddingStyle: "Vineyard editorial, mountain ceremony, long-table dining",
    bestSeason: "November to March",
    venueTypes: ["Wine estates", "Private lodges", "Coastal venues"],
    budgetRange: "$75,000 to $420,000"
  }
];

export const services: ServiceExperience[] = [
  {
    id: "full-planning",
    number: "01",
    title: "Full Wedding Planning",
    description:
      "A complete planning partnership from first creative direction to final guest farewell.",
    detail:
      "Includes calendar management, venue strategy, vendor leadership, family communication, design planning, production documents, and wedding-week direction.",
    image: "https://picsum.photos/seed/full-wedding-planning/900/1100"
  },
  {
    id: "destination-production",
    number: "02",
    title: "Destination Wedding Production",
    description:
      "Multi-day destination planning built for travel, logistics, and immersive celebration flow.",
    detail:
      "We map guest movement, local permits, supplier teams, run-of-show, hospitality notes, and contingency plans across the full weekend.",
    image: "https://picsum.photos/seed/destination-wedding-production/900/1100"
  },
  {
    id: "private-estate",
    number: "03",
    title: "Private Estate Events",
    description:
      "Private home and estate productions with temporary infrastructure and discreet service design.",
    detail:
      "Ideal for families who need tenting, power, catering flow, security, valet, household coordination, and a production plan that protects the property.",
    image: "https://picsum.photos/seed/private-estate-events/900/1100"
  },
  {
    id: "styling",
    number: "04",
    title: "Luxury Wedding Styling",
    description:
      "A precise visual direction for florals, tabletop, lighting, paper, fashion, and guest touchpoints.",
    detail:
      "We create a style system that reaches from invitation texture to candle temperature, then manage creative suppliers against that vision.",
    image: "https://picsum.photos/seed/luxury-wedding-styling/900/1100"
  },
  {
    id: "hospitality",
    number: "05",
    title: "Guest Hospitality & Travel Coordination",
    description:
      "Thoughtful guest journeys for international families, VIPs, and destination wedding weekends.",
    detail:
      "Includes travel notes, welcome gifts, airport arrivals, hotel rooming support, family itineraries, and concierge-style guest communications.",
    image: "https://picsum.photos/seed/guest-hospitality-travel/900/1100"
  }
];

// Change calculator logic multipliers and fees here.
export const calculatorSettings: CalculatorSettings = {
  basePlanningFee: 1800,
  guestRate: 18,
  dayRate: 850,
  travelSupportFee: 950,
  vendorSourcingFee: 700,
  eventTypeMultipliers: {
    "Wedding Weekend": 1.35,
    "Single Day Wedding": 1,
    "Private Estate Event": 1.22,
    "Cultural Celebration": 1.48,
    "Corporate Private Event": 1.16
  },
  stylingMultipliers: {
    Essential: 1,
    Premium: 1.42,
    "Ultra Luxury": 2.08
  },
  locationPremiums: {
    Dubai: 1500,
    Doha: 1700,
    London: 1200,
    "Lake Como": 2100,
    Santorini: 1500,
    Marrakech: 1300,
    Malta: 1100,
    Cyprus: 900,
    "New York": 1800,
    Singapore: 1700,
    Bali: 1200,
    "Cape Town": 1000
  }
};

export const moodChips = [
  "Minimal Luxury",
  "Royal Ballroom",
  "Beach Ceremony",
  "Garden Romance",
  "Desert Celebration",
  "Modern Black Tie",
  "Cultural Fusion",
  "Destination Weekend",
  "Floral Maximalist",
  "Intimate Private Estate"
];

// Change event portfolio content here.
export const portfolioEvents: PortfolioEvent[] = [
  {
    id: "lake-como-weekend",
    title: "The Lake Como Weekend",
    location: "Lake Como",
    guestCount: "118 guests",
    duration: "3 days",
    tags: ["Villa", "Boat arrival", "Garden dinner"],
    image: "https://picsum.photos/seed/lake-como-weekend/1200/1500",
    concept:
      "A slow, cinematic weekend shaped around lake arrivals, garden dining, and quiet family rituals.",
    planningScope:
      "Full planning, venue logistics, boat transfers, vendor direction, hospitality desk, and three-day production.",
    designDirection:
      "Pearl linens, silvered greens, candlelight, restrained florals, and a black-tie reception under a temporary structure.",
    guestExperience:
      "Arrival notes, boat routing, welcome aperitivo, ceremony shuttle, afterparty return, and next-day farewell brunch.",
    gallery: [
      "https://picsum.photos/seed/lake-gallery-1/700/900",
      "https://picsum.photos/seed/lake-gallery-2/700/900",
      "https://picsum.photos/seed/lake-gallery-3/700/900"
    ]
  },
  {
    id: "doha-ballroom",
    title: "The Doha Ballroom Affair",
    location: "Doha",
    guestCount: "420 guests",
    duration: "2 days",
    tags: ["Ballroom", "Couture", "Family hosting"],
    image: "https://picsum.photos/seed/doha-ballroom-affair/1200/1500",
    concept:
      "A grand hotel celebration designed with couture pacing, layered rituals, and a formal dinner transition.",
    planningScope:
      "Production scheduling, ballroom transformation, family communications, guest arrival protocol, and supplier management.",
    designDirection:
      "Deep espresso draping, low amber light, sculptural florals, and mirrored dining details.",
    guestExperience:
      "Private arrival lounge, family seating protocol, gifting moments, and a late-night dessert salon.",
    gallery: [
      "https://picsum.photos/seed/doha-gallery-1/700/900",
      "https://picsum.photos/seed/doha-gallery-2/700/900",
      "https://picsum.photos/seed/doha-gallery-3/700/900"
    ]
  },
  {
    id: "santorini-white",
    title: "The Santorini White Ceremony",
    location: "Santorini",
    guestCount: "64 guests",
    duration: "2 days",
    tags: ["Cliffside", "Sunset", "Minimal"],
    image: "https://picsum.photos/seed/santorini-white-ceremony/1200/1500",
    concept:
      "A pared-back island ceremony with a white palette, sea-facing dinner, and private terrace music.",
    planningScope:
      "Venue sourcing, ceremony production, dinner layout, travel notes, and guest movement across the cliffside.",
    designDirection:
      "White-on-white textures, ceramic tableware, sculptural branches, and quiet blue-hour lighting.",
    guestExperience:
      "Welcome drinks, guided transfer windows, sunset portraits, and a candlelit dinner facing the caldera.",
    gallery: [
      "https://picsum.photos/seed/santorini-gallery-1/700/900",
      "https://picsum.photos/seed/santorini-gallery-2/700/900",
      "https://picsum.photos/seed/santorini-gallery-3/700/900"
    ]
  },
  {
    id: "dubai-palace",
    title: "The Dubai Palace Reception",
    location: "Dubai",
    guestCount: "510 guests",
    duration: "1 night",
    tags: ["Palace", "Formal", "Production"],
    image: "https://picsum.photos/seed/dubai-palace-reception/1200/1500",
    concept:
      "A palace reception with a formal dinner reveal, choreographed entertainment, and a high-polish arrival sequence.",
    planningScope:
      "Creative production, venue technical planning, supplier calls, show cues, and guest flow.",
    designDirection:
      "Black lacquer, muted gold, dense white florals, and warm theatrical lighting.",
    guestExperience:
      "Valet arrival, private family rooms, staged dinner reveal, and afterparty lounge.",
    gallery: [
      "https://picsum.photos/seed/dubai-gallery-1/700/900",
      "https://picsum.photos/seed/dubai-gallery-2/700/900",
      "https://picsum.photos/seed/dubai-gallery-3/700/900"
    ]
  },
  {
    id: "marrakech-garden",
    title: "The Marrakech Garden Dinner",
    location: "Marrakech",
    guestCount: "136 guests",
    duration: "3 days",
    tags: ["Riad", "Lanterns", "Garden"],
    image: "https://picsum.photos/seed/marrakech-garden-dinner/1200/1500",
    concept:
      "A lantern-lit garden weekend where craft, music, and family dining carried the story.",
    planningScope:
      "Riad takeover, local supplier coordination, guest hospitality, lighting plans, and weekend itinerary.",
    designDirection:
      "Burnished metals, sand textiles, olive branches, ceramic vessels, and long tables under palms.",
    guestExperience:
      "Tea welcome, guided market morning, family dinner, ceremony garden, and final poolside lunch.",
    gallery: [
      "https://picsum.photos/seed/marrakech-gallery-1/700/900",
      "https://picsum.photos/seed/marrakech-gallery-2/700/900",
      "https://picsum.photos/seed/marrakech-gallery-3/700/900"
    ]
  },
  {
    id: "london-black-tie",
    title: "The London Black Tie Wedding",
    location: "London",
    guestCount: "172 guests",
    duration: "1 day",
    tags: ["Townhouse", "Black tie", "Editorial"],
    image: "https://picsum.photos/seed/london-black-tie-wedding/1200/1500",
    concept:
      "A city wedding built around an intimate ceremony, private club dinner, and late-night jazz room.",
    planningScope:
      "Venue routing, supplier management, family timeline, transportation, and creative direction.",
    designDirection:
      "Ink stationery, ivory florals, antique silver, velvet banquettes, and sharp table styling.",
    guestExperience:
      "Ceremony arrival, champagne transfer, seated dinner, speeches, jazz lounge, and car service.",
    gallery: [
      "https://picsum.photos/seed/london-gallery-1/700/900",
      "https://picsum.photos/seed/london-gallery-2/700/900",
      "https://picsum.photos/seed/london-gallery-3/700/900"
    ]
  },
  {
    id: "malta-coastal",
    title: "The Malta Coastal Celebration",
    location: "Malta",
    guestCount: "98 guests",
    duration: "2 days",
    tags: ["Coastal", "Palazzo", "Limestone"],
    image: "https://picsum.photos/seed/malta-coastal-celebration/1200/1500",
    concept:
      "A limestone courtyard dinner paired with a coastal ceremony and yacht-adjacent guest itinerary.",
    planningScope:
      "Venue design, dinner production, sea transfer planning, vendor sourcing, and timeline direction.",
    designDirection:
      "Stone neutrals, soft sand linen, smoked glass, olive branches, and low evening light.",
    guestExperience:
      "Harbor welcome, ceremony shuttle, courtyard dinner, afterparty route, and farewell swim.",
    gallery: [
      "https://picsum.photos/seed/malta-gallery-1/700/900",
      "https://picsum.photos/seed/malta-gallery-2/700/900",
      "https://picsum.photos/seed/malta-gallery-3/700/900"
    ]
  },
  {
    id: "bali-villa",
    title: "The Bali Private Villa Event",
    location: "Bali",
    guestCount: "76 guests",
    duration: "4 days",
    tags: ["Villa", "Ocean", "Wellness"],
    image: "https://picsum.photos/seed/bali-private-villa-event/1200/1500",
    concept:
      "A private villa wedding weekend balancing family hosting, ocean ceremony, and wellness-led mornings.",
    planningScope:
      "Villa operations, guest notes, supplier scheduling, menu planning, and full weekend production.",
    designDirection:
      "Dark timber, cream textiles, tropical greens, woven details, and lantern-lit dining.",
    guestExperience:
      "Welcome bags, yoga morning, ceremony lawn, poolside dinner, late-night music, and farewell brunch.",
    gallery: [
      "https://picsum.photos/seed/bali-gallery-1/700/900",
      "https://picsum.photos/seed/bali-gallery-2/700/900",
      "https://picsum.photos/seed/bali-gallery-3/700/900"
    ]
  }
];

export const caseStudyDays: CaseStudyDay[] = [
  {
    day: "Day 01",
    title: "Welcome Dinner",
    text: "Guests arrive to handwritten room notes, late sun, and a relaxed dinner designed to make separate families feel like one house party.",
    image: "https://picsum.photos/seed/day-one-welcome-dinner/1100/1400"
  },
  {
    day: "Day 02",
    title: "Ceremony",
    text: "The ceremony day is paced like a film: quiet morning, private portraits, a disciplined guest flow, then vows as the light turns gold.",
    image: "https://picsum.photos/seed/day-two-ceremony/1100/1400"
  },
  {
    day: "Day 03",
    title: "Reception & Afterparty",
    text: "A formal dinner opens into a late-night room with a different temperature, different scent, and a completely different rhythm.",
    image: "https://picsum.photos/seed/day-three-reception/1100/1400"
  }
];

export const journeySteps: JourneyStep[] = [
  {
    title: "Initial Consultation",
    text: "We clarify family priorities, scale, location preferences, guest profile, and the emotional center of the celebration."
  },
  {
    title: "Vision & Creative Direction",
    text: "A creative route is built across visual language, guest rhythm, hospitality, fashion, and event atmosphere."
  },
  {
    title: "Venue & Vendor Strategy",
    text: "We shape the shortlist, review supplier fit, and build a planning route that respects timeline, market, and budget."
  },
  {
    title: "Design Development",
    text: "Florals, tabletop, lighting, paper, spatial planning, and production documents are refined into one coherent system."
  },
  {
    title: "Guest Experience Planning",
    text: "Travel notes, arrivals, rooming, gifting, itineraries, and family communications are mapped for comfort and clarity."
  },
  {
    title: "Production & Execution",
    text: "The final run-of-show, supplier calls, site checks, install leadership, and event-day direction keep the experience controlled."
  },
  {
    title: "Post-Event Wrap-Up",
    text: "We close supplier notes, organize final assets, and give clients a polished archive of the celebration."
  }
];

export const portalCards: PortalCard[] = [
  { title: "Event Timeline", value: "47 tasks", helper: "Next cue: floral plan review", progress: 72 },
  { title: "Budget Overview", value: "$184.6k", helper: "Projected against approved range", progress: 58 },
  { title: "Vendor Shortlist", value: "16 names", helper: "4 pending final review", progress: 64 },
  { title: "Guest Travel Notes", value: "92 rooms", helper: "Airport arrival windows mapped", progress: 81 },
  { title: "Moodboard", value: "3 routes", helper: "Black tie garden selected", progress: 66 },
  { title: "Payment Milestones", value: "5 dates", helper: "Next milestone in 18 days", progress: 42 },
  { title: "Checklist Progress", value: "68%", helper: "Production file in progress", progress: 68 }
];

// Change packages and wedding planner prices here. These are planner package prices, not web development prices.
export const packages: PackageItem[] = [
  {
    name: "Consultation Only",
    price: "from $500",
    description: "For couples who need expert clarity before committing to a full planning route.",
    features: [
      "90-minute planning session",
      "Budget direction",
      "Venue and vendor guidance",
      "Priority checklist",
      "Follow-up notes"
    ]
  },
  {
    name: "Signature Planning",
    price: "from $2,500",
    description: "A refined planning partnership for a high-touch wedding with a controlled creative direction.",
    features: [
      "Planning calendar",
      "Vendor sourcing",
      "Design direction",
      "Production timeline",
      "Wedding-day coordination"
    ]
  },
  {
    name: "Destination Weekend",
    price: "from $5,000",
    description: "For multi-day destination celebrations with travel, hospitality, and layered guest movement.",
    features: [
      "Weekend itinerary",
      "Destination vendor team",
      "Guest travel notes",
      "Hospitality planning",
      "On-site production"
    ]
  },
  {
    name: "Ultra Luxury Production",
    price: "from $10,000+",
    description: "For private estates, complex builds, large guest counts, and high-production celebrations.",
    features: [
      "Creative production",
      "Technical planning",
      "Supplier leadership",
      "VIP guest flow",
      "Full event command"
    ]
  }
];

// Change testimonials here.
export const testimonials: Testimonial[] = [
  {
    initials: "A & R",
    location: "Lake Como",
    eventType: "Villa wedding weekend",
    quote:
      "The weekend felt completely personal, but every minute was held with precision. Our families still talk about the welcome dinner."
  },
  {
    initials: "M & Z",
    location: "Doha",
    eventType: "Ballroom reception",
    quote:
      "Maison Vow understood scale without losing softness. The room had impact, but the planning felt calm."
  },
  {
    initials: "L & P",
    location: "London",
    eventType: "Black tie wedding",
    quote:
      "They shaped a city wedding that felt private, cinematic, and deeply considered from the first note to the final car."
  },
  {
    initials: "N & I",
    location: "Marrakech",
    eventType: "Destination dinner",
    quote:
      "The guest experience was exceptional. Every arrival, transfer, and dinner moment had a sense of ease."
  }
];

export const pressLogos = [
  "Vogue Weddings",
  "Brides",
  "Tatler",
  "WedLuxe",
  "Style Me Pretty",
  "Harper's Bazaar"
];

export const blogArticles: BlogArticle[] = [
  {
    title: "How to Plan a Destination Wedding Weekend",
    category: "Planning",
    excerpt:
      "A destination weekend works when travel, hosting, and emotion are planned as one continuous guest journey.",
    body:
      "Begin with the guest route, then build the event architecture around arrival windows, hotel comfort, transport, welcome notes, and the final farewell. The most luxurious weekends rarely feel busy. They feel deeply paced."
  },
  {
    title: "What Makes a Wedding Feel Luxury",
    category: "Design",
    excerpt:
      "Luxury is not a price tag. It is restraint, touch, timing, service, and the absence of visible friction.",
    body:
      "A wedding feels luxury when every choice supports the atmosphere. Lighting temperature, service rhythm, table scale, sound transitions, and guest comfort all matter more than adding more decor."
  },
  {
    title: "Choosing the Right Destination for Your Celebration",
    category: "Destinations",
    excerpt:
      "The right destination is the place where logistics, guest appetite, season, and family story meet.",
    body:
      "Before falling in love with a place, examine travel effort, local supplier quality, weather risk, venue curfews, family needs, and what the location naturally gives you without forcing a theme."
  }
];
