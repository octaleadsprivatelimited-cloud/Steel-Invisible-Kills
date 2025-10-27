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
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
    image: "/images/safety-nets/balcony-safety-nets-1.webp",
    heroImage: "/images/safety-nets/balcony-safety-nets-1.webp",
    gallery: [
      "/images/safety-nets/balcony-safety-nets-1.webp",
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
      "/images/safety-nets/sports-nets-installation.avif",
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
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/industrial-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/open-area-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/industrial-safety-nets.webp",
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/sports-nets-installation.avif",
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
      "/images/safety-nets/balcony-safety-nets-1.webp"
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
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Window Safety",
    popular: false
  },
  {
    id: "invisible-grill-balconies",
    name: "Invisible Grill for Balconies",
    slug: "invisible-grill-balconies",
    description: "Ultra-thin invisible grills designed specifically for balconies. Provides maximum safety while maintaining clear visibility and aesthetic appeal.",
    shortDescription: "Ultra-thin invisible grills for balcony safety and aesthetics",
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
      "Ultra-fine steel mesh",
      "High-strength materials",
      "Stainless steel hardware",
      "Weather-resistant coating",
      "Anti-corrosion materials"
    ],
    installation: [
      "Precise measurement",
      "Custom grill preparation",
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
    image: "/images/safety-nets/invisible-grill-balconies.jpg",
    heroImage: "/images/safety-nets/invisible-grill-balconies.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-windows",
    name: "Invisible Grill for Windows",
    slug: "invisible-grill-windows",
    description: "Professional invisible grills for windows that provide security without compromising on visibility or aesthetics.",
    shortDescription: "Professional invisible grills for window security and visibility",
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
      "Ultra-fine steel mesh",
      "High-strength materials",
      "Stainless steel hardware",
      "Weather-resistant coating",
      "Anti-corrosion materials"
    ],
    installation: [
      "Precise measurement",
      "Custom grill preparation",
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
    image: "/images/safety-nets/invisible-grill-windows.jpg",
    heroImage: "/images/safety-nets/invisible-grill-windows.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-windows.jpg",
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/window-safety-nets.jpg"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-apartments",
    name: "Invisible Grill for Apartments",
    slug: "invisible-grill-apartments",
    description: "Comprehensive invisible grill solutions for apartment buildings. Perfect for high-rise residential complexes with modern safety requirements.",
    shortDescription: "Comprehensive invisible grill solutions for apartment buildings",
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
      "High-rise apartments",
      "Residential complexes",
      "Condominiums",
      "Gated communities",
      "Multi-story buildings",
      "Apartment balconies",
      "Apartment windows",
      "Common areas"
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
      "Ultra-fine steel mesh",
      "High-strength materials",
      "Stainless steel hardware",
      "Weather-resistant coating",
      "Anti-corrosion materials"
    ],
    installation: [
      "Precise measurement",
      "Custom grill preparation",
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
    image: "/images/safety-nets/invisible-grill-apartments.jpg",
    heroImage: "/images/safety-nets/invisible-grill-apartments.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-apartments.jpg",
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "pull-dry-cloth-hangers",
    name: "Pull & Dry Cloth Hangers",
    slug: "pull-dry-cloth-hangers",
    description: "Convenient pull and dry cloth hangers for efficient laundry management. Space-saving solution for drying clothes indoors and outdoors.",
    shortDescription: "Convenient pull and dry cloth hangers for efficient laundry management",
    features: [
      "Space-saving design",
      "Easy pull mechanism",
      "Durable construction",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Long-lasting",
      "Multi-purpose use"
    ],
    applications: [
      "Residential balconies",
      "Apartment terraces",
      "Indoor spaces",
      "Outdoor areas",
      "Laundry rooms",
      "Kitchen areas",
      "Bathroom spaces",
      "Utility areas"
    ],
    benefits: [
      "Efficient drying",
      "Space optimization",
      "Easy operation",
      "Weather protection",
      "Cost-effective",
      "Easy maintenance",
      "Durable construction",
      "Versatile usage"
    ],
    materials: [
      "High-grade steel",
      "Weather-resistant coating",
      "Stainless steel hardware",
      "Durable ropes",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Site assessment",
      "Custom measurement",
      "Professional installation",
      "Mechanism testing",
      "Final inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Mechanism inspection",
      "Hardware maintenance",
      "Rope replacement",
      "Annual service"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/terrace-top-nets.webp",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹15-25 per sq ft",
    category: "Cloth Hangers",
    popular: false
  },
  {
    id: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    slug: "ceiling-cloth-hangers",
    description: "Ceiling-mounted cloth hangers for maximum space utilization. Perfect for apartments and homes with limited space.",
    shortDescription: "Ceiling-mounted cloth hangers for maximum space utilization",
    features: [
      "Ceiling-mounted design",
      "Space optimization",
      "Easy operation",
      "Durable construction",
      "Easy installation",
      "Custom sizing",
      "Long-lasting",
      "Multi-level hanging"
    ],
    applications: [
      "Residential apartments",
      "Small homes",
      "Indoor spaces",
      "Laundry rooms",
      "Kitchen areas",
      "Bathroom spaces",
      "Utility areas",
      "Compact living spaces"
    ],
    benefits: [
      "Maximum space utilization",
      "Easy operation",
      "Compact design",
      "Indoor protection",
      "Cost-effective",
      "Easy maintenance",
      "Durable construction",
      "Space-saving"
    ],
    materials: [
      "High-grade steel",
      "Ceiling mounting hardware",
      "Stainless steel components",
      "Durable ropes",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Ceiling assessment",
      "Custom measurement",
      "Professional installation",
      "Mounting verification",
      "Final inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Ceiling inspection",
      "Hardware maintenance",
      "Rope replacement",
      "Annual service"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/ceiling-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/ceiling-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/ceiling-cloth-hangers.jpg",
      "/images/safety-nets/terrace-top-nets.webp",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹12-20 per sq ft",
    category: "Cloth Hangers",
    popular: false
  },
  {
    id: "pull-dry-cloth-hangers-balconies",
    name: "Pull & Dry Cloth Hangers for Balconies",
    slug: "pull-dry-cloth-hangers-balconies",
    description: "Specialized pull and dry cloth hangers designed specifically for balconies. Weather-resistant and space-efficient solution for outdoor drying.",
    shortDescription: "Specialized pull and dry cloth hangers for balcony drying",
    features: [
      "Balcony-specific design",
      "Weather-resistant",
      "Easy pull mechanism",
      "Durable construction",
      "Easy installation",
      "Custom sizing",
      "Long-lasting",
      "Outdoor optimized"
    ],
    applications: [
      "Residential balconies",
      "Apartment terraces",
      "Outdoor spaces",
      "Balcony areas",
      "Terrace spaces",
      "Outdoor drying",
      "Balcony laundry",
      "Outdoor utility"
    ],
    benefits: [
      "Outdoor drying capability",
      "Weather resistance",
      "Space optimization",
      "Easy operation",
      "Balcony-specific design",
      "Easy maintenance",
      "Durable construction",
      "Outdoor protection"
    ],
    materials: [
      "Weather-resistant steel",
      "UV-resistant coating",
      "Stainless steel hardware",
      "Weather-resistant ropes",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Balcony assessment",
      "Custom measurement",
      "Professional installation",
      "Weather testing",
      "Final inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Weather inspection",
      "Hardware maintenance",
      "Rope replacement",
      "Annual service"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
      "/images/safety-nets/balcony-safety-nets-1.webp",
      "/images/safety-nets/terrace-top-nets.webp"
    ],
    priceRange: "₹18-30 per sq ft",
    category: "Cloth Hangers",
    popular: false
  },
  // Additional Invisible Grill Services
  {
    id: "invisible-grill-dealers",
    name: "Invisible Grill Dealers",
    slug: "invisible-grill-dealers",
    description: "Professional invisible grill dealers providing high-quality stainless steel invisible grills across Hyderabad. We offer expert consultation, custom design, and professional installation services.",
    shortDescription: "Professional invisible grill dealers with expert consultation",
    features: [
      "Expert consultation",
      "Custom design",
      "Professional installation",
      "Quality materials",
      "Warranty support",
      "After-sales service",
      "Competitive pricing",
      "Local expertise"
    ],
    applications: [
      "Residential balconies",
      "Commercial buildings",
      "High-rise apartments",
      "Office spaces",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Professional consultation",
      "Custom solutions",
      "Quality assurance",
      "Expert installation",
      "Warranty coverage",
      "Local support",
      "Competitive pricing",
      "Reliable service"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Site assessment",
      "Custom design",
      "Material preparation",
      "Professional installation",
      "Quality inspection"
    ],
    maintenance: [
      "Regular inspection",
      "Cleaning guidance",
      "Hardware maintenance",
      "Tension adjustment",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/invisible-grill.jpg",
    heroImage: "/images/safety-nets/invisible-grill.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-fixing-charges",
    name: "Invisible Grill Fixing Charges",
    slug: "invisible-grill-fixing-charges",
    description: "Transparent pricing for invisible grill fixing and installation services. We provide detailed quotes with no hidden charges, ensuring you get the best value for your investment.",
    shortDescription: "Transparent pricing for invisible grill installation",
    features: [
      "Transparent pricing",
      "No hidden charges",
      "Detailed quotes",
      "Competitive rates",
      "Quality materials",
      "Professional installation",
      "Warranty included",
      "Free consultation"
    ],
    applications: [
      "New installations",
      "Repair services",
      "Replacement work",
      "Maintenance contracts",
      "Upgrade services",
      "Emergency repairs",
      "Custom modifications",
      "Bulk installations"
    ],
    benefits: [
      "Cost transparency",
      "Value for money",
      "Quality assurance",
      "Professional service",
      "Warranty coverage",
      "No hidden fees",
      "Competitive pricing",
      "Free estimates"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Free site visit",
      "Detailed quotation",
      "Material procurement",
      "Professional installation",
      "Quality testing"
    ],
    maintenance: [
      "Regular maintenance",
      "Repair services",
      "Replacement parts",
      "Emergency support",
      "Annual contracts"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill.jpg",
    heroImage: "/images/safety-nets/invisible-grill.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-balcony-near-me",
    name: "Invisible Grill for Balcony Near Me",
    slug: "invisible-grill-balcony-near-me",
    description: "Find invisible grill installation services for balconies near you in Hyderabad. We provide local expertise and quick service across all areas of Hyderabad and surrounding regions.",
    shortDescription: "Local invisible grill services for balconies in Hyderabad",
    features: [
      "Local expertise",
      "Quick service",
      "Area coverage",
      "Same-day consultation",
      "Local support",
      "Familiar with regulations",
      "Quick installation",
      "Local maintenance"
    ],
    applications: [
      "Residential balconies",
      "High-rise apartments",
      "Commercial balconies",
      "Office terraces",
      "Hotel balconies",
      "Restaurant terraces",
      "Educational institutions",
      "Healthcare facilities"
    ],
    benefits: [
      "Local knowledge",
      "Quick response",
      "Area expertise",
      "Familiar regulations",
      "Local support",
      "Quick installation",
      "Easy maintenance",
      "Local warranty"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Local site visit",
      "Area assessment",
      "Custom design",
      "Quick installation",
      "Local inspection"
    ],
    maintenance: [
      "Local maintenance",
      "Quick repairs",
      "Area support",
      "Emergency service",
      "Local warranty"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/invisible-grill-balconies.jpg",
    heroImage: "/images/safety-nets/invisible-grill-balconies.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-balcony-price",
    name: "Invisible Grill for Balcony Price",
    slug: "invisible-grill-balcony-price",
    description: "Get competitive pricing for invisible grill installation on balconies. We offer transparent pricing with detailed breakdowns, ensuring you get the best value for your balcony safety needs.",
    shortDescription: "Competitive pricing for invisible grill balcony installation",
    features: [
      "Competitive pricing",
      "Transparent quotes",
      "No hidden charges",
      "Detailed breakdown",
      "Value for money",
      "Quality materials",
      "Professional installation",
      "Warranty included"
    ],
    applications: [
      "Residential balconies",
      "High-rise apartments",
      "Commercial balconies",
      "Office terraces",
      "Hotel balconies",
      "Restaurant terraces",
      "Educational institutions",
      "Healthcare facilities"
    ],
    benefits: [
      "Cost-effective solutions",
      "Transparent pricing",
      "Quality assurance",
      "Professional service",
      "Warranty coverage",
      "No hidden fees",
      "Competitive rates",
      "Value for money"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Free consultation",
      "Detailed quotation",
      "Material procurement",
      "Professional installation",
      "Quality testing"
    ],
    maintenance: [
      "Regular maintenance",
      "Repair services",
      "Replacement parts",
      "Emergency support",
      "Annual contracts"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-balconies.jpg",
    heroImage: "/images/safety-nets/invisible-grill-balconies.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-child-safety",
    name: "Invisible Grill for Child Safety",
    slug: "invisible-grill-child-safety",
    description: "Specialized invisible grills designed for child safety on balconies and windows. Our child-safe grills provide maximum protection while maintaining aesthetic appeal and clear visibility.",
    shortDescription: "Child-safe invisible grills for maximum protection",
    features: [
      "Child-safe design",
      "Maximum protection",
      "Clear visibility",
      "Aesthetic appeal",
      "Strong materials",
      "Secure installation",
      "Easy maintenance",
      "Long-lasting"
    ],
    applications: [
      "Residential balconies",
      "High-rise apartments",
      "Commercial buildings",
      "Office spaces",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Child protection",
      "Peace of mind",
      "Clear visibility",
      "Aesthetic appeal",
      "Strong security",
      "Easy maintenance",
      "Long-lasting",
      "Weather resistant"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Child-safe assessment",
      "Custom design",
      "Secure installation",
      "Safety testing",
      "Final inspection"
    ],
    maintenance: [
      "Regular inspection",
      "Safety checks",
      "Cleaning guidance",
      "Hardware maintenance",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/invisible-grill-balconies.jpg",
    heroImage: "/images/safety-nets/invisible-grill-balconies.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/balcony-safety-nets-1.webp"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-manufacturer",
    name: "Invisible Grill Manufacturer",
    slug: "invisible-grill-manufacturer",
    description: "Leading manufacturer of high-quality invisible grills in Hyderabad. We design, manufacture, and install premium stainless steel invisible grills with 25+ years of expertise and superior craftsmanship.",
    shortDescription: "Leading manufacturer of premium invisible grills",
    features: [
      "25+ years expertise",
      "Premium materials",
      "Superior craftsmanship",
      "Custom design",
      "Quality control",
      "Professional installation",
      "Warranty support",
      "Innovation"
    ],
    applications: [
      "Residential buildings",
      "Commercial complexes",
      "High-rise apartments",
      "Office buildings",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Manufacturing expertise",
      "Quality assurance",
      "Custom solutions",
      "Professional service",
      "Warranty coverage",
      "Innovation",
      "Reliable supply",
      "Competitive pricing"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Manufacturing process",
      "Quality control",
      "Custom design",
      "Professional installation",
      "Quality testing"
    ],
    maintenance: [
      "Manufacturing support",
      "Quality maintenance",
      "Replacement parts",
      "Technical support",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill.jpg",
    heroImage: "/images/safety-nets/invisible-grill.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "stainless-steel-invisible-grill",
    name: "Stainless Steel Invisible Grill",
    slug: "stainless-steel-invisible-grill",
    description: "Premium stainless steel invisible grills offering superior strength, durability, and aesthetic appeal. Our 316 marine-grade stainless steel grills provide maximum protection while maintaining clear visibility.",
    shortDescription: "Premium stainless steel invisible grills with superior strength",
    features: [
      "316 Marine-Grade Stainless Steel",
      "Superior strength",
      "Maximum durability",
      "Clear visibility",
      "Aesthetic appeal",
      "Corrosion resistant",
      "Weather proof",
      "Long-lasting"
    ],
    applications: [
      "Residential balconies",
      "High-rise apartments",
      "Commercial buildings",
      "Office spaces",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Superior strength",
      "Maximum durability",
      "Clear visibility",
      "Aesthetic appeal",
      "Corrosion resistant",
      "Weather proof",
      "Long-lasting",
      "Low maintenance"
    ],
    materials: [
      "316 Marine-Grade Stainless Steel",
      "SS316 Nylon Coated Cable",
      "6063 Grade Aluminium Channel",
      "SS304 Grade Fixing Anchors",
      "SS316 Cross Clip"
    ],
    installation: [
      "Material preparation",
      "Custom design",
      "Professional installation",
      "Quality testing",
      "Final inspection"
    ],
    maintenance: [
      "Minimal maintenance",
      "Regular inspection",
      "Cleaning guidance",
      "Hardware maintenance",
      "Annual service"
    ],
    warranty: "3 years warranty on materials and installation",
    image: "/images/safety-nets/invisible-grill.jpg",
    heroImage: "/images/safety-nets/invisible-grill.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg"
    ],
    priceRange: "₹25-40 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  // Additional Cloth Hanger Services
  {
    id: "pull-dry-cloth-hangers-fixing",
    name: "Pull & Dry Cloth Hangers Fixing",
    slug: "pull-dry-cloth-hangers-fixing",
    description: "Professional fixing and repair services for pull & dry cloth hangers. We provide expert repair, maintenance, and replacement services to keep your cloth hangers in perfect working condition.",
    shortDescription: "Professional fixing and repair services for cloth hangers",
    features: [
      "Expert repair",
      "Professional fixing",
      "Quality materials",
      "Quick service",
      "Warranty support",
      "Maintenance service",
      "Replacement parts",
      "Emergency repair"
    ],
    applications: [
      "Residential balconies",
      "Indoor spaces",
      "Commercial buildings",
      "Office spaces",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Expert repair",
      "Quick service",
      "Quality materials",
      "Warranty support",
      "Maintenance service",
      "Replacement parts",
      "Emergency support",
      "Cost-effective"
    ],
    materials: [
      "Weather-resistant steel",
      "UV-resistant coating",
      "Stainless steel hardware",
      "Weather-resistant ropes",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Damage assessment",
      "Repair planning",
      "Material replacement",
      "Professional fixing",
      "Quality testing"
    ],
    maintenance: [
      "Regular maintenance",
      "Repair services",
      "Replacement parts",
      "Emergency support",
      "Annual contracts"
    ],
    warranty: "2 years warranty on repair work",
    image: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/ceiling-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg"
    ],
    priceRange: "₹15-25 per sq ft",
    category: "Cloth Hangers",
    popular: false
  },
  {
    id: "pull-dry-cloth-hangers-installation",
    name: "Pull & Dry Cloth Hangers Installation",
    slug: "pull-dry-cloth-hangers-installation",
    description: "Professional installation services for pull & dry cloth hangers. We provide expert installation with proper measurement, quality materials, and professional workmanship for optimal performance.",
    shortDescription: "Professional installation services for cloth hangers",
    features: [
      "Professional installation",
      "Expert measurement",
      "Quality materials",
      "Proper fitting",
      "Warranty support",
      "After-sales service",
      "Custom design",
      "Quick installation"
    ],
    applications: [
      "Residential balconies",
      "Indoor spaces",
      "Commercial buildings",
      "Office spaces",
      "Hotels and resorts",
      "Educational institutions",
      "Healthcare facilities",
      "Shopping malls"
    ],
    benefits: [
      "Professional installation",
      "Expert measurement",
      "Quality materials",
      "Proper fitting",
      "Warranty support",
      "After-sales service",
      "Custom design",
      "Quick installation"
    ],
    materials: [
      "Weather-resistant steel",
      "UV-resistant coating",
      "Stainless steel hardware",
      "Weather-resistant ropes",
      "Corrosion-resistant fittings"
    ],
    installation: [
      "Site assessment",
      "Custom measurement",
      "Material preparation",
      "Professional installation",
      "Quality testing"
    ],
    maintenance: [
      "Regular maintenance",
      "Repair services",
      "Replacement parts",
      "Emergency support",
      "Annual contracts"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/ceiling-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg"
    ],
    priceRange: "₹18-30 per sq ft",
    category: "Cloth Hangers",
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
