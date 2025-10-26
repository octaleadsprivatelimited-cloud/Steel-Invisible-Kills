import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HardHat, 
  Target, 
  TreePine, 
  Settings, 
  Wrench, 
  Shield, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Services: React.FC = () => {
  // Function to convert service title to slug
  const getServiceSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  const services = [
    {
      icon: <Shield className="h-16 w-16 text-blue-500" />,
      title: "Invisible Nets",
      description: "Ultra-thin, nearly invisible safety nets that provide maximum protection while maintaining clear visibility",
      features: [
        "Ultra-thin design",
        "Nearly invisible",
        "High tensile strength",
        "Weather resistant",
        "Maintains visibility"
      ],
    },
    {
      icon: <Target className="h-16 w-16 text-blue-500" />,
      title: "Pigeon Nets",
      description: "Anti-pigeon nets to protect your property from bird droppings and damage",
      features: [
        "UV resistant material",
        "Transparent design",
        "Easy maintenance",
        "Weather proof",
        "Custom installation"
      ],
    },
    {
      icon: <HardHat className="h-16 w-16 text-blue-500" />,
      title: "Balcony Safety Nets",
      description: "Complete safety solutions for balconies and high-rise buildings",
      features: [
        "Child safety protection",
        "Pet safety barriers",
        "Weather resistant material",
        "Professional installation",
        "Custom sizing available"
      ],
    },
    {
      icon: <TreePine className="h-16 w-16 text-blue-500" />,
      title: "Cricket Practice Nets",
      description: "Professional cricket nets for practice and training facilities",
      features: [
        "Practice nets",
        "Training facilities",
        "Weather resistant",
        "Ball containment",
        "Professional installation"
      ],
    },
    {
      icon: <Shield className="h-16 w-16 text-blue-500" />,
      title: "Kids Safety Nets",
      description: "Specialized safety nets designed specifically for children's safety",
      features: [
        "Child-safe materials",
        "Small mesh size",
        "Durable construction",
        "Easy installation",
        "Peace of mind for parents"
      ],
    },
    {
      icon: <Settings className="h-16 w-16 text-blue-500" />,
      title: "Anti Bird Nets",
      description: "Comprehensive bird protection solutions for all types of properties",
      features: [
        "Multi-species protection",
        "Transparent material",
        "Long-lasting durability",
        "Easy maintenance",
        "Professional installation"
      ],
    },
    {
      icon: <Wrench className="h-16 w-16 text-blue-500" />,
      title: "Pets Safety Nets",
      description: "Safety nets designed to protect your pets from falling or escaping",
      features: [
        "Pet-friendly materials",
        "Secure installation",
        "Weather resistant",
        "Easy maintenance",
        "Custom sizing"
      ],
    },
    {
      icon: <HardHat className="h-16 w-16 text-green-500" />,
      title: "Construction Safety Nets",
      description: "Professional safety nets for construction sites and building projects",
      features: [
        "Fall protection systems",
        "Perimeter safety nets",
        "Scaffolding nets",
        "Debris containment",
        "Worker safety"
      ],
    },
    {
      icon: <TreePine className="h-16 w-16 text-green-500" />,
      title: "Gardening Nets",
      description: "Protection nets for gardens and agricultural applications",
      features: [
        "Bird protection nets",
        "Shade nets",
        "Insect protection",
        "Weather protection",
        "Plant support"
      ],
    },
    {
      icon: <Shield className="h-16 w-16 text-purple-500" />,
      title: "Industrial Safety Nets",
      description: "Heavy-duty safety nets for industrial and commercial applications",
      features: [
        "High-strength materials",
        "Industrial grade",
        "Weather resistant",
        "Long-lasting durability",
        "Professional installation"
      ],
    },
    {
      icon: <Settings className="h-16 w-16 text-purple-500" />,
      title: "Sports Nets",
      description: "Professional sports nets for various sporting activities",
      features: [
        "Cricket nets",
        "Tennis nets",
        "Badminton nets",
        "Volleyball nets",
        "Multi-sport solutions"
      ],
    },
    {
      icon: <Wrench className="h-16 w-16 text-orange-500" />,
      title: "Swimming Pool Nets",
      description: "Safety nets for swimming pools and water features",
      features: [
        "Child safety protection",
        "Pool cover nets",
        "Weather resistant",
        "Easy maintenance",
        "Custom sizing"
      ],
    },
    {
      icon: <Target className="h-16 w-16 text-orange-500" />,
      title: "Window Safety Nets",
      description: "Safety nets for windows and openings",
      features: [
        "Child safety protection",
        "Pet safety barriers",
        "Transparent design",
        "Easy installation",
        "Custom sizing"
      ],
    }
  ];

  const additionalServices = [
    {
      icon: <Settings className="h-12 w-12 text-blue-500" />,
      title: "Custom Design & Engineering",
      description: "Professional safety net design with site-specific solutions"
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-500" />,
      title: "Installation & Setup",
      description: "Expert installation with quality assurance and testing"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-500" />,
      title: "Maintenance & Support",
      description: "Regular maintenance, inspection, and 24/7 support"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
              backgroundImage: `url('/images/safety-nets/slider-7-3.jpg')`
            }}></div>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Our Safety Nets Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Comprehensive safety solutions for construction, sports, and gardening needs across India. 
            Expert safety nets installation with premium quality materials in Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Safety Nets Installation Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect safety solution for your needs - from construction safety nets to cricket nets, gardening protection, and industrial safety solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Header with Background */}
                <div className="h-32 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600">
                  {/* Background Images for all services */}
                      {index === 0 && (
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                          backgroundImage: `url('/images/safety-nets/invisible-nets.webp')`
                        }}></div>
                      )}
                  {index === 1 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/pigeon-nets.webp')`
                    }}></div>
                  )}
                  {index === 2 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/balcony-safety-nets-1.webp')`
                    }}></div>
                  )}
                  {index === 3 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/cricket-practice-nets.webp')`
                    }}></div>
                  )}
                  {index === 4 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/terrace-top-nets.webp')`
                    }}></div>
                  )}
                  {index === 5 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/bird-spikes.webp')`
                    }}></div>
                  )}
                  {index === 6 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/duct-area-safety-nets.webp')`
                    }}></div>
                  )}
                  {index === 7 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/industrial-safety-nets.webp')`
                    }}></div>
                  )}
                  {index === 8 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/open-area-safety-nets.webp')`
                    }}></div>
                  )}
                  {index === 9 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/industrial-safety-nets.webp')`
                    }}></div>
                  )}
                  {index === 10 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/cricket-practice-nets.webp')`
                    }}></div>
                  )}
                  {index === 11 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/staircase-safety-nets.webp')`
                    }}></div>
                  )}
                  {index === 12 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('/images/safety-nets/terrace-top-nets.webp')`
                    }}></div>
                  )}
                  
                  {/* Dark Overlay for all services */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  <div className="relative z-10 text-center text-white">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <Link
                      to={`/services/${getServiceSlug(service.title)}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button 
                      onClick={openWhatsAppQuote}
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center group cursor-pointer"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete support throughout your safety nets journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Safety Standards & Quality
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our safety nets meet international standards and provide maximum protection. 
              Quality assured materials with 5+ year warranty on all installations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">ISO</div>
                <div>Certified Materials</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div>Year Warranty</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div>Safety Guaranteed</div>
              </div>
            </div>
            <Link
              to="/about"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Learn More About Our Standards
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Ensure Safety?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and customized safety nets solution quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917893987771"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now: +91 7893987771
            </a>
            <a
              href="https://wa.me/917893987771"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
