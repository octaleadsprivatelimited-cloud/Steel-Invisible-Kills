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
    id: "invisible-grill-for-balconies",
    name: "Invisible Grill for Balconies",
    slug: "invisible-grill-for-balconies",
    description: "Premium invisible grills designed specifically for balconies, providing maximum security while maintaining unobstructed views. Our stainless steel grills blend seamlessly with modern architecture.",
    shortDescription: "Premium invisible grills for modern balconies with unobstructed views",
    features: [
      "Stainless steel construction",
      "Ultra-thin design",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Long-lasting durability",
      "Maintains aesthetics",
      "Child-safe design"
    ],
    applications: [
      "Residential balconies",
      "Apartment balconies",
      "High-rise buildings",
      "Modern homes",
      "Commercial balconies",
      "Penthouse terraces",
      "Duplex balconies",
      "Villa balconies"
    ],
    benefits: [
      "Maximum security protection",
      "Unobstructed views",
      "Modern aesthetic appeal",
      "Child and pet safety",
      "Weather protection",
      "Low maintenance",
      "Long-lasting durability",
      "Value addition to property"
    ],
    materials: [
      "Grade 316 stainless steel",
      "High-tensile wire mesh",
      "Corrosion-resistant hardware",
      "Weather-resistant coating",
      "Premium mounting brackets"
    ],
    installation: [
      "Site assessment and measurement",
      "Custom grill sizing",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular cleaning with water",
      "Inspection for wear and tear",
      "Lubrication of moving parts",
      "Annual maintenance check",
      "Emergency repair services"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-balconies.jpg",
    heroImage: "/images/safety-nets/invisible-grill-balconies.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg",
      "/images/safety-nets/invisible-grill-apartments.jpg"
    ],
    priceRange: "₹80-120 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-for-windows",
    name: "Invisible Grill for Windows",
    slug: "invisible-grill-for-windows",
    description: "Elegant invisible grills for windows that provide security without blocking natural light or views. Perfect for modern homes where aesthetics and safety go hand in hand.",
    shortDescription: "Elegant invisible grills for windows maintaining natural light and views",
    features: [
      "Transparent design",
      "Natural light passage",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Durable construction",
      "Aesthetic appeal",
      "Security focused"
    ],
    applications: [
      "Bedroom windows",
      "Living room windows",
      "Kitchen windows",
      "Bathroom windows",
      "Office windows",
      "Commercial windows",
      "High-rise windows",
      "Ground floor windows"
    ],
    benefits: [
      "Unobstructed views",
      "Natural light passage",
      "Enhanced security",
      "Modern appearance",
      "Easy maintenance",
      "Weather protection",
      "Child safety",
      "Property value increase"
    ],
    materials: [
      "Grade 316 stainless steel",
      "Fine wire mesh",
      "Corrosion-resistant hardware",
      "Weather-resistant coating",
      "Premium mounting system"
    ],
    installation: [
      "Window measurement",
      "Custom grill fabrication",
      "Professional installation",
      "Quality inspection",
      "Safety verification"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Hardware maintenance",
      "Annual service check",
      "Emergency repairs"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-windows.jpg",
    heroImage: "/images/safety-nets/invisible-grill-windows.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-windows.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-apartments.jpg"
    ],
    priceRange: "₹70-100 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-for-apartments",
    name: "Invisible Grill for Apartments",
    slug: "invisible-grill-for-apartments",
    description: "Complete invisible grill solutions for apartment buildings and high-rise complexes. Our grills provide comprehensive security while maintaining the modern aesthetic of apartment living.",
    shortDescription: "Complete invisible grill solutions for apartment buildings",
    features: [
      "Bulk installation capability",
      "Consistent design",
      "Weather resistant",
      "Professional installation",
      "Custom sizing",
      "Durable materials",
      "Modern aesthetics",
      "Security focused"
    ],
    applications: [
      "Apartment balconies",
      "Apartment windows",
      "High-rise buildings",
      "Residential complexes",
      "Penthouse terraces",
      "Duplex apartments",
      "Studio apartments",
      "Commercial apartments"
    ],
    benefits: [
      "Comprehensive security",
      "Modern appearance",
      "Bulk installation discounts",
      "Consistent quality",
      "Easy maintenance",
      "Weather protection",
      "Child safety",
      "Property enhancement"
    ],
    materials: [
      "Grade 316 stainless steel",
      "High-quality wire mesh",
      "Corrosion-resistant hardware",
      "Weather-resistant coating",
      "Professional mounting system"
    ],
    installation: [
      "Bulk site assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular maintenance",
      "Bulk service contracts",
      "Emergency repairs",
      "Annual inspections",
      "Hardware maintenance"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-apartments.jpg",
    heroImage: "/images/safety-nets/invisible-grill-apartments.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-apartments.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg"
    ],
    priceRange: "₹75-110 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "pull-dry-cloth-hangers",
    name: "Pull & Dry Cloth Hangers",
    slug: "pull-dry-cloth-hangers",
    description: "Modern pull & dry cloth hangers for efficient laundry management. Our stainless steel hangers provide excellent drying solutions for modern homes and apartments.",
    shortDescription: "Modern pull & dry cloth hangers for efficient laundry management",
    features: [
      "Stainless steel construction",
      "Pull mechanism",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Durable materials",
      "Space efficient",
      "Modern design"
    ],
    applications: [
      "Balconies",
      "Terraces",
      "Utility areas",
      "Laundry rooms",
      "Apartment balconies",
      "Residential complexes",
      "Commercial spaces",
      "High-rise buildings"
    ],
    benefits: [
      "Efficient drying",
      "Space saving",
      "Easy operation",
      "Weather protection",
      "Durable construction",
      "Modern appearance",
      "Easy maintenance",
      "Value addition"
    ],
    materials: [
      "Grade 316 stainless steel",
      "High-quality cables",
      "Corrosion-resistant hardware",
      "Weather-resistant coating",
      "Premium mounting system"
    ],
    installation: [
      "Site assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Functionality testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/ceilling-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers-for-balconies.jpg"
    ],
    priceRange: "₹40-60 per sq ft",
    category: "Cloth Hangers",
    popular: true
  },
  {
    id: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    slug: "ceiling-cloth-hangers",
    description: "Ceiling-mounted cloth hangers for maximum space utilization. Perfect for areas with limited wall space, providing efficient drying solutions.",
    shortDescription: "Ceiling-mounted cloth hangers for maximum space utilization",
    features: [
      "Ceiling mounting",
      "Space efficient",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Durable construction",
      "Modern design",
      "High capacity"
    ],
    applications: [
      "Utility areas",
      "Laundry rooms",
      "Balconies",
      "Terraces",
      "Commercial spaces",
      "Residential complexes",
      "High-rise buildings",
      "Apartment complexes"
    ],
    benefits: [
      "Maximum space utilization",
      "High capacity",
      "Easy operation",
      "Weather protection",
      "Durable construction",
      "Modern appearance",
      "Easy maintenance",
      "Cost effective"
    ],
    materials: [
      "Grade 316 stainless steel",
      "High-quality cables",
      "Ceiling mounting hardware",
      "Weather-resistant coating",
      "Premium mounting system"
    ],
    installation: [
      "Ceiling assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Load testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/ceilling-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/ceilling-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/ceilling-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers-for-balconies.jpg"
    ],
    priceRange: "₹35-55 per sq ft",
    category: "Cloth Hangers",
    popular: false
  },
  {
    id: "pull-dry-cloth-hangers-for-balconies",
    name: "Pull & Dry Cloth Hangers for Balconies",
    slug: "pull-dry-cloth-hangers-for-balconies",
    description: "Specialized pull & dry cloth hangers designed specifically for balconies. Perfect for apartment living where efficient laundry management is essential.",
    shortDescription: "Specialized pull & dry cloth hangers for balcony laundry management",
    features: [
      "Balcony-specific design",
      "Pull mechanism",
      "Weather resistant",
      "Easy installation",
      "Custom sizing",
      "Durable materials",
      "Space efficient",
      "Modern aesthetics"
    ],
    applications: [
      "Apartment balconies",
      "Residential balconies",
      "High-rise balconies",
      "Penthouse balconies",
      "Duplex balconies",
      "Studio balconies",
      "Commercial balconies",
      "Villa balconies"
    ],
    benefits: [
      "Balcony-optimized design",
      "Efficient drying",
      "Space saving",
      "Easy operation",
      "Weather protection",
      "Durable construction",
      "Modern appearance",
      "Easy maintenance"
    ],
    materials: [
      "Grade 316 stainless steel",
      "High-quality cables",
      "Balcony-specific hardware",
      "Weather-resistant coating",
      "Premium mounting system"
    ],
    installation: [
      "Balcony assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Functionality testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers-for-balconies.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers-for-balconies.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers-for-balconies.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/ceilling-cloth-hangers.jpg"
    ],
    priceRange: "₹45-65 per sq ft",
    category: "Cloth Hangers",
    popular: true
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};