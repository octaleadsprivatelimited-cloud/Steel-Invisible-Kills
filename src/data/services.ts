export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  applications: string[];
  benefits: string[];
  materials: string[];
  installation: string[];
  maintenance: string[];
  warranty: string;
  image: string;
  heroImage: string;
  gallery: string[];
  priceRange: string;
  category: string;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: "pigeon-nets",
    name: "Pigeon Nets",
    slug: "pigeon-nets",
    description: "Professional pigeon nets installation to protect your property from bird droppings, nesting, and damage. Our UV-resistant, transparent nets provide effective bird control while maintaining aesthetic appeal.",
    shortDescription: "Effective pigeon control with transparent, UV-resistant nets",
    features: [
      "UV resistant material",
      "Transparent design",
      "Easy maintenance",
      "Weather proof",
      "Custom installation",
      "Humane bird control",
      "Low visibility",
      "Durable construction"
    ],
    applications: [
      "Balconies and terraces",
      "Windows and doors",
      "Air conditioning units",
      "Solar panels",
      "Garden areas",
      "Commercial buildings",
      "Residential complexes",
      "Industrial facilities"
    ],
    benefits: [
      "Prevents bird droppings",
      "Protects property from damage",
      "Maintains property aesthetics",
      "Reduces health risks",
      "Easy to clean and maintain",
      "Long-lasting protection",
      "Cost-effective solution",
      "No harm to birds"
    ],
    materials: [
      "High-grade nylon mesh",
      "UV-stabilized polyethylene",
      "Stainless steel hooks",
      "Weather-resistant ropes",
      "Corrosion-resistant hardware"
    ],
    installation: [
      "Site assessment and measurement",
      "Custom net sizing",
      "Professional installation",
      "Quality inspection",
      "Maintenance guidelines"
    ],
    maintenance: [
      "Regular cleaning with water",
      "Inspection for wear and tear",
      "Replacement of damaged parts",
      "Annual maintenance check",
      "Emergency repair services"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/pigeon-nets.webp",
    heroImage: "/images/safety-nets/pigeon-nets.webp",
    gallery: [
      "/images/safety-nets/pigeon-nets.webp",
      "/images/safety-nets/bird-spikes.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹15-25 per sq ft",
    category: "Bird Control",
    popular: true
  },
  {
    id: "invisible-nets",
    name: "Invisible Nets",
    slug: "invisible-nets",
    description: "Ultra-thin, nearly invisible safety nets that provide maximum protection while maintaining clear visibility. Perfect for areas where aesthetics are important without compromising on safety.",
    shortDescription: "Ultra-thin, nearly invisible safety nets for maximum protection",
    features: [
      "Ultra-thin design",
      "Nearly invisible",
      "High tensile strength",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Long-lasting",
      "Maintains visibility"
    ],
    applications: [
      "Balconies",
      "Windows",
      "Terraces",
      "Staircases",
      "Playgrounds",
      "Swimming pools",
      "High-rise buildings",
      "Commercial spaces"
    ],
    benefits: [
      "Maximum safety protection",
      "Unobstructed views",
      "Weather protection",
      "Child and pet safety",
      "Aesthetic appeal",
      "Easy maintenance",
      "Durable construction",
      "Peace of mind"
    ],
    materials: [
      "Ultra-fine nylon mesh",
      "High-strength polyester",
      "Stainless steel hardware",
      "Weather-resistant coating",
      "Anti-corrosion materials"
    ],
    installation: [
      "Precise measurement",
      "Custom net preparation",
      "Professional installation",
      "Tension adjustment",
      "Final inspection"
    ],
    maintenance: [
      "Gentle cleaning",
      "Regular inspection",
      "Tension adjustment",
      "Hardware maintenance",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/invisible-nets.webp",
    heroImage: "/images/safety-nets/invisible-nets.webp",
    gallery: [
      "/images/safety-nets/invisible-nets.webp",
      "/images/safety-nets/terrace-top-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Safety Protection",
    popular: true
  },
  {
    id: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    slug: "balcony-safety-nets",
    description: "Complete safety solutions for balconies and high-rise buildings. Our premium safety nets provide child and pet protection with weather-resistant materials and professional installation.",
    shortDescription: "Complete safety solutions for balconies and high-rise buildings",
    features: [
      "Child safety protection",
      "Pet safety barriers",
      "Weather resistant material",
      "Professional installation",
      "Custom sizing available",
      "High tensile strength",
      "UV protection",
      "Easy maintenance"
    ],
    applications: [
      "Residential balconies",
      "High-rise apartments",
      "Commercial buildings",
      "Hotels and resorts",
      "Office buildings",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Prevents accidental falls",
      "Protects children and pets",
      "Weather protection",
      "Maintains property value",
      "Legal compliance",
      "Peace of mind",
      "Cost-effective safety",
      "Professional appearance"
    ],
    materials: [
      "High-grade nylon mesh",
      "Stainless steel hooks",
      "Weather-resistant ropes",
      "UV-stabilized materials",
      "Corrosion-resistant hardware"
    ],
    installation: [
      "Site survey",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Quality assurance"
    ],
    maintenance: [
      "Regular inspection",
      "Cleaning and maintenance",
      "Tension adjustment",
      "Hardware replacement",
      "Annual service"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/balcony-safety-nets (1).webp",
    heroImage: "/images/safety-nets/balcony-safety-nets (1).webp",
    gallery: [
      "/images/safety-nets/balcony-safety-nets (1).webp",
      "/images/safety-nets/terrace-top-nets.webp",
      "/images/safety-nets/window-safety-nets.webp"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Safety Protection",
    popular: true
  },
  {
    id: "cricket-practice-nets",
    name: "Cricket Practice Nets",
    slug: "cricket-practice-nets",
    description: "Professional cricket nets for practice grounds, sports academies, and recreational facilities. High-quality nets that withstand weather and provide excellent ball containment.",
    shortDescription: "Professional cricket nets for practice and training facilities",
    features: [
      "Practice nets",
      "Training facilities",
      "Weather resistant",
      "Ball containment",
      "Professional installation",
      "Custom dimensions",
      "Durable materials",
      "Easy maintenance"
    ],
    applications: [
      "Cricket practice grounds",
      "Sports academies",
      "Schools and colleges",
      "Recreational facilities",
      "Professional training centers",
      "Community sports clubs",
      "Residential complexes",
      "Commercial sports facilities"
    ],
    benefits: [
      "Safe practice environment",
      "Ball containment",
      "Weather protection",
      "Professional training",
      "Cost-effective solution",
      "Easy maintenance",
      "Durable construction",
      "Versatile usage"
    ],
    materials: [
      "Heavy-duty nylon mesh",
      "Stainless steel framework",
      "Weather-resistant ropes",
      "UV-stabilized materials",
      "Corrosion-resistant hardware"
    ],
    installation: [
      "Site preparation",
      "Framework installation",
      "Net installation",
      "Tension adjustment",
      "Safety testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Net inspection",
      "Framework maintenance",
      "Tension adjustment",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/cricket-practice-nets.webp",
    heroImage: "/images/safety-nets/cricket-practice-nets.webp",
    gallery: [
      "/images/safety-nets/cricket-practice-nets.webp",
      "/images/safety-nets/sports-nets.webp",
      "/images/safety-nets/industrial-safety-nets.webp"
    ],
    priceRange: "₹30-50 per sq ft",
    category: "Sports",
    popular: false
  },
  {
    id: "kids-safety-nets",
    name: "Kids Safety Nets",
    slug: "kids-safety-nets",
    description: "Specialized safety nets designed specifically for children's safety. Child-safe materials with small mesh size for maximum protection and peace of mind for parents.",
    shortDescription: "Specialized safety nets designed specifically for children's safety",
    features: [
      "Child-safe materials",
      "Small mesh size",
      "Durable construction",
      "Easy installation",
      "Peace of mind for parents",
      "Weather resistant",
      "Non-toxic materials",
      "Easy maintenance"
    ],
    applications: [
      "Children's play areas",
      "Balconies and terraces",
      "Windows and doors",
      "Staircases",
      "Swimming pools",
      "Playgrounds",
      "Schools and daycare centers",
      "Residential areas"
    ],
    benefits: [
      "Child safety protection",
      "Prevents accidents",
      "Peace of mind",
      "Easy to maintain",
      "Weather protection",
      "Non-toxic materials",
      "Durable construction",
      "Cost-effective safety"
    ],
    materials: [
      "Child-safe nylon mesh",
      "Non-toxic materials",
      "Stainless steel hardware",
      "Weather-resistant coating",
      "Safe edge protection"
    ],
    installation: [
      "Child safety assessment",
      "Custom sizing",
      "Safe installation",
      "Child-proof hardware",
      "Safety inspection"
    ],
    maintenance: [
      "Regular safety inspection",
      "Gentle cleaning",
      "Hardware maintenance",
      "Safety testing",
      "Annual service"
    ],
    warranty: "5 years warranty on materials and installation",
    image: "/images/safety-nets/kids-safety-nets.jpg",
    heroImage: "/images/safety-nets/kids-safety-nets.jpg",
    gallery: [
      "/images/safety-nets/kids-safety-nets.jpg",
      "/images/safety-nets/terrace-top-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Child Safety",
    popular: true
  },
  {
    id: "anti-bird-nets",
    name: "Anti Bird Nets",
    slug: "anti-bird-nets",
    description: "Effective solutions to keep birds away from your premises. Durable materials with weather resistance and custom fit for humane bird control.",
    shortDescription: "Effective solutions to keep birds away from your premises",
    features: [
      "Durable materials",
      "Weather resistant",
      "Custom fit",
      "Humane bird control",
      "Low visibility",
      "Easy installation",
      "Long-lasting",
      "Cost-effective"
    ],
    applications: [
      "Agricultural areas",
      "Commercial buildings",
      "Residential properties",
      "Industrial facilities",
      "Warehouses",
      "Food processing units",
      "Shopping centers",
      "Office buildings"
    ],
    benefits: [
      "Prevents bird damage",
      "Reduces health risks",
      "Protects property",
      "Humane solution",
      "Easy maintenance",
      "Weather protection",
      "Long-lasting",
      "Cost-effective"
    ],
    materials: [
      "Heavy-duty nylon mesh",
      "UV-resistant materials",
      "Stainless steel hardware",
      "Weather-resistant ropes",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Site assessment",
      "Custom measurement",
      "Professional installation",
      "Quality inspection",
      "Maintenance guidelines"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Hardware maintenance",
      "Net replacement",
      "Annual service"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/anti-bird-nets.jpg",
    heroImage: "/images/safety-nets/anti-bird-nets.jpg",
    gallery: [
      "/images/safety-nets/anti-bird-nets.jpg",
      "/images/safety-nets/bird-spikes.webp",
      "/images/safety-nets/pigeon-nets.webp"
    ],
    priceRange: "₹15-25 per sq ft",
    category: "Bird Control",
    popular: false
  },
  {
    id: "pets-safety-nets",
    name: "Pets Safety Nets",
    slug: "pets-safety-nets",
    description: "Ensure the safety of your pets with our specialized safety nets. Pet-friendly materials with strong and durable construction for secure installation.",
    shortDescription: "Specialized safety nets for pet protection and safety",
    features: [
      "Pet-friendly materials",
      "Strong & durable",
      "Customizable",
      "Easy to clean",
      "Secure installation",
      "Weather resistant",
      "Non-toxic",
      "Easy maintenance"
    ],
    applications: [
      "Pet balconies",
      "Pet play areas",
      "Windows and doors",
      "Terraces",
      "Staircases",
      "Swimming pools",
      "Pet enclosures",
      "Residential areas"
    ],
    benefits: [
      "Pet safety protection",
      "Prevents accidents",
      "Easy to maintain",
      "Weather protection",
      "Pet-friendly materials",
      "Secure installation",
      "Peace of mind",
      "Cost-effective"
    ],
    materials: [
      "Pet-safe nylon mesh",
      "Non-toxic materials",
      "Stainless steel hardware",
      "Weather-resistant coating",
      "Safe edge protection"
    ],
    installation: [
      "Pet safety assessment",
      "Custom sizing",
      "Safe installation",
      "Pet-proof hardware",
      "Safety inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Pet-safe maintenance",
      "Hardware inspection",
      "Safety testing",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/pets-safety-nets.jpg",
    heroImage: "/images/safety-nets/pets-safety-nets.jpg",
    gallery: [
      "/images/safety-nets/pets-safety-nets.jpg",
      "/images/safety-nets/duct-area-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Pet Safety",
    popular: false
  },
  {
    id: "construction-safety-nets",
    name: "Construction Safety Nets",
    slug: "construction-safety-nets",
    description: "High-quality safety nets for construction sites to prevent accidents. Heavy-duty materials with compliance to safety standards and custom sizes.",
    shortDescription: "Heavy-duty safety nets for construction sites and worker protection",
    features: [
      "Worker safety",
      "Debris protection",
      "Heavy-duty materials",
      "Compliance with standards",
      "Custom sizes",
      "Professional installation",
      "Weather resistant",
      "Easy maintenance"
    ],
    applications: [
      "Construction sites",
      "High-rise buildings",
      "Industrial projects",
      "Infrastructure development",
      "Renovation projects",
      "Demolition sites",
      "Maintenance work",
      "Emergency repairs"
    ],
    benefits: [
      "Worker safety protection",
      "Prevents accidents",
      "Debris containment",
      "Legal compliance",
      "Cost-effective safety",
      "Professional installation",
      "Weather protection",
      "Easy maintenance"
    ],
    materials: [
      "Heavy-duty nylon mesh",
      "High-tensile ropes",
      "Stainless steel hardware",
      "Weather-resistant materials",
      "Safety-compliant fittings"
    ],
    installation: [
      "Safety assessment",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Compliance verification"
    ],
    maintenance: [
      "Regular safety inspection",
      "Cleaning and maintenance",
      "Hardware replacement",
      "Safety testing",
      "Annual service"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/industrial-safety-nets.webp",
    heroImage: "/images/safety-nets/industrial-safety-nets.webp",
    gallery: [
      "/images/safety-nets/industrial-safety-nets.webp",
      "/images/safety-nets/construction-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹35-55 per sq ft",
    category: "Construction Safety",
    popular: false
  },
  {
    id: "gardening-nets",
    name: "Gardening Nets",
    slug: "gardening-nets",
    description: "Protect your garden from pests and birds with our durable nets. UV stabilized, eco-friendly materials with easy installation for garden protection.",
    shortDescription: "Durable nets for garden protection from pests and birds",
    features: [
      "Pest control",
      "Bird protection",
      "UV stabilized",
      "Eco-friendly",
      "Easy to install",
      "Weather resistant",
      "Custom sizing",
      "Long-lasting"
    ],
    applications: [
      "Vegetable gardens",
      "Fruit orchards",
      "Flower gardens",
      "Greenhouses",
      "Nurseries",
      "Agricultural fields",
      "Commercial farming",
      "Residential gardens"
    ],
    benefits: [
      "Crop protection",
      "Pest prevention",
      "Bird control",
      "Weather protection",
      "Easy maintenance",
      "Cost-effective",
      "Eco-friendly",
      "Long-lasting"
    ],
    materials: [
      "UV-stabilized mesh",
      "Eco-friendly materials",
      "Weather-resistant coating",
      "Stainless steel hardware",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Garden assessment",
      "Custom measurement",
      "Professional installation",
      "Quality inspection",
      "Maintenance guidelines"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Hardware maintenance",
      "Net replacement",
      "Annual service"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/open-area-safety-nets.webp",
    heroImage: "/images/safety-nets/open-area-safety-nets.webp",
    gallery: [
      "/images/safety-nets/open-area-safety-nets.webp",
      "/images/safety-nets/gardening-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹12-20 per sq ft",
    category: "Garden Protection",
    popular: false
  },
  {
    id: "industrial-safety-nets",
    name: "Industrial Safety Nets",
    slug: "industrial-safety-nets",
    description: "Robust safety nets for industrial environments and warehouses. Heavy-duty construction with custom solutions and compliance with regulations.",
    shortDescription: "Heavy-duty safety nets for industrial environments and warehouses",
    features: [
      "Fall protection",
      "Equipment safety",
      "Heavy-duty construction",
      "Custom solutions",
      "Compliance with regulations",
      "Professional installation",
      "Weather resistant",
      "Easy maintenance"
    ],
    applications: [
      "Industrial facilities",
      "Warehouses",
      "Manufacturing plants",
      "Distribution centers",
      "Loading docks",
      "Maintenance areas",
      "Equipment zones",
      "Safety barriers"
    ],
    benefits: [
      "Worker safety",
      "Equipment protection",
      "Legal compliance",
      "Cost-effective safety",
      "Professional installation",
      "Weather protection",
      "Easy maintenance",
      "Long-lasting"
    ],
    materials: [
      "Heavy-duty nylon mesh",
      "High-tensile ropes",
      "Stainless steel hardware",
      "Weather-resistant materials",
      "Safety-compliant fittings"
    ],
    installation: [
      "Industrial assessment",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Compliance verification"
    ],
    maintenance: [
      "Regular safety inspection",
      "Cleaning and maintenance",
      "Hardware replacement",
      "Safety testing",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/industrial-safety-nets.jpg",
    heroImage: "/images/safety-nets/industrial-safety-nets.jpg",
    gallery: [
      "/images/safety-nets/industrial-safety-nets.jpg",
      "/images/safety-nets/construction-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹40-60 per sq ft",
    category: "Industrial Safety",
    popular: false
  },
  {
    id: "sports-nets",
    name: "Sports Nets",
    slug: "sports-nets",
    description: "High-quality nets for various sports facilities and stadiums. Durable materials with custom sizes for cricket, football, volleyball, and other sports.",
    shortDescription: "Professional nets for sports facilities and stadiums",
    features: [
      "Cricket nets",
      "Football nets",
      "Volleyball nets",
      "Custom sizes",
      "Durable materials",
      "Weather resistant",
      "Professional installation",
      "Easy maintenance"
    ],
    applications: [
      "Sports stadiums",
      "Training facilities",
      "Schools and colleges",
      "Sports academies",
      "Recreational centers",
      "Community clubs",
      "Professional training",
      "Tournament venues"
    ],
    benefits: [
      "Sports safety",
      "Ball containment",
      "Weather protection",
      "Professional quality",
      "Easy maintenance",
      "Cost-effective",
      "Durable construction",
      "Versatile usage"
    ],
    materials: [
      "Heavy-duty nylon mesh",
      "High-tensile ropes",
      "Stainless steel hardware",
      "Weather-resistant materials",
      "Sports-grade fittings"
    ],
    installation: [
      "Sports facility assessment",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Quality inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Net inspection",
      "Hardware maintenance",
      "Tension adjustment",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/cricket-practice-nets.webp",
    heroImage: "/images/safety-nets/cricket-practice-nets.webp",
    gallery: [
      "/images/safety-nets/cricket-practice-nets.webp",
      "/images/safety-nets/sports-nets.webp",
      "/images/safety-nets/industrial-safety-nets.webp"
    ],
    priceRange: "₹25-45 per sq ft",
    category: "Sports",
    popular: false
  },
  {
    id: "swimming-pool-nets",
    name: "Swimming Pool Nets",
    slug: "swimming-pool-nets",
    description: "Safety nets to prevent accidental falls into swimming pools. Child and pet safety with UV resistant materials and custom fit for pool protection.",
    shortDescription: "Safety nets for swimming pool protection and accident prevention",
    features: [
      "Child safety",
      "Pet safety",
      "UV resistant",
      "Easy to remove",
      "Custom fit",
      "Weather resistant",
      "Easy installation",
      "Maintenance free"
    ],
    applications: [
      "Residential pools",
      "Commercial pools",
      "Hotel pools",
      "Community pools",
      "School pools",
      "Recreational facilities",
      "Water parks",
      "Private pools"
    ],
    benefits: [
      "Accident prevention",
      "Child and pet safety",
      "Peace of mind",
      "Easy maintenance",
      "Weather protection",
      "Cost-effective safety",
      "Professional installation",
      "Long-lasting"
    ],
    materials: [
      "UV-resistant mesh",
      "Weather-resistant materials",
      "Stainless steel hardware",
      "Corrosion-resistant fittings",
      "Pool-safe materials"
    ],
    installation: [
      "Pool safety assessment",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Maintenance guidelines"
    ],
    maintenance: [
      "Regular cleaning",
      "Safety inspection",
      "Hardware maintenance",
      "Net replacement",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/swimming-pool-nets.jpg",
    heroImage: "/images/safety-nets/swimming-pool-nets.jpg",
    gallery: [
      "/images/safety-nets/swimming-pool-nets.jpg",
      "/images/safety-nets/staircase-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹30-50 per sq ft",
    category: "Pool Safety",
    popular: false
  },
  {
    id: "window-safety-nets",
    name: "Window Safety Nets",
    slug: "window-safety-nets",
    description: "Secure your windows with transparent and durable safety nets. High visibility with weather resistant materials for child and bird protection.",
    shortDescription: "Transparent safety nets for window protection and security",
    features: [
      "Child protection",
      "Bird entry prevention",
      "High visibility",
      "Weather resistant",
      "Custom installation",
      "Easy maintenance",
      "Durable construction",
      "Aesthetic appeal"
    ],
    applications: [
      "Residential windows",
      "Commercial buildings",
      "High-rise apartments",
      "Office buildings",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping centers"
    ],
    benefits: [
      "Child safety protection",
      "Bird prevention",
      "Maintains visibility",
      "Weather protection",
      "Easy maintenance",
      "Cost-effective safety",
      "Professional installation",
      "Long-lasting"
    ],
    materials: [
      "Transparent nylon mesh",
      "High-visibility materials",
      "Weather-resistant coating",
      "Stainless steel hardware",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Window assessment",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Quality inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Hardware maintenance",
      "Net replacement",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/window-safety-nets.jpg",
    heroImage: "/images/safety-nets/window-safety-nets.jpg",
    gallery: [
      "/images/safety-nets/window-safety-nets.jpg",
      "/images/safety-nets/terrace-top-nets.webp",
      "/images/safety-nets/balcony-safety-nets (1).webp"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Window Safety",
    popular: false
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};
