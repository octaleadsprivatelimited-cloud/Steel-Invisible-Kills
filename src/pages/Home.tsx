import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield,
  HardHat,
  Target,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
  Award
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';
import HeroSlider from '../components/HeroSlider';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Hero slider images
  const heroImages = [
    '/images/hero/slider-1.jpg',
    '/images/hero/slider-2.jpg',
    '/images/hero/slider-3.jpg',
    '/images/hero/slider-4.jpg',
    '/images/hero/hero-background.jpg'
  ];

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Sleek and Aesthetic Design",
      description: "These grills provide a modern, invisible look, blending seamlessly with your balcony or window"
    },
    {
      icon: <HardHat className="h-12 w-12 text-blue-500" />,
      title: "Durable and Strong",
      description: "Made from high-quality, rust-resistant materials like stainless steel, offering long-lasting strength"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "Enhanced Safety",
      description: "Effectively prevent falls, providing a safe environment for children, pets, and residents"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
      title: "Quality Guarantee",
      description: "ISO certified processes and materials with superior craftsmanship"
    }
  ];

  const stats = [
    { number: "5200+", label: "Projects Done", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "5100+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "40+", label: "Expert Staffs", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "25+", label: "Years Experience", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Slider Background */}
      <motion.section 
        className="relative bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 text-white min-h-screen flex items-center overflow-hidden"
        style={{ 
          y, 
          opacity, 
          scale,
          backgroundColor: '#1e3a8a'
        }}
      >
            {/* Hero Slider Background */}
            <HeroSlider images={heroImages} interval={3000} />
        
        {/* Strong Black Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70"></div>
        
        {/* Static Safety Elements - Optimized */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <Shield className="h-16 w-16 text-blue-300" />
          </div>
          
          <div className="absolute top-40 right-20 opacity-15">
            <HardHat className="h-12 w-12 text-blue-400" />
          </div>
          
          <div className="absolute bottom-40 left-20 opacity-10">
            <Target className="h-14 w-14 text-blue-200" />
          </div>
          
          <div className="absolute bottom-20 right-10 opacity-20">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>
        </div>
        
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ 
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 }
              }}
            >
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-8 text-white"
                    style={{ 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8 }
                    }}
                  >
                Premium Invisible Grills
                  <span className="text-blue-400 font-semibold"> for Your Home</span>
              </motion.h1>
              
              {/* Company Tagline with Moving Background Effect */}
              <div className="relative mb-6">
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-yellow-300 mb-4"
                      style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      whileInView={{ 
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 }
                      }}
                    >
                  THE LEADING INVISIBLE GRILL MANUFACTURERS AND INSTALLERS
                </motion.div>
                <motion.div
                  className="text-lg lg:text-xl text-gray-200 mt-2"
                  style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 }
                  }}
                >
                  Professional Invisible Grill Installation & Cloth Hanger Solutions
                </motion.div>
              </div>
              
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 }
                }}
              >
                    <button
                      onClick={openWhatsAppQuote}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      Get Free Quote
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </button>
                
                    <Link
                      to="/services"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-green-500 hover:border-green-600"
                    >
                      <Shield className="mr-2 h-6 w-6" />
                      View Our Services
                    </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
            </motion.div>
          </div>
        </div>
      </motion.section>

          {/* Invisible Grills Applications Showcase */}
          <motion.section 
            className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Premium Invisible Grill Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your home with our premium invisible grills and cloth hangers - perfect for balconies, windows, apartments, and modern living spaces
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Invisible Grill for Balconies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Invisible Grill for Balconies Image */}
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('/images/safety-nets/invisible-grill-balconies.jpg')`
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Balcony Grills</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Premium invisible</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Modern Balconies</h4>
                <p className="text-gray-600 text-sm mb-3">Nearly invisible grills that provide maximum safety while maintaining clear views. Available in 5 wire sizes: <strong>2mm, 2.5mm, 3mm, 3.5mm, and 4mm</strong> to match your safety needs and budget.</p>
                <p className="text-gray-500 text-xs">Serving all areas of Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Secunderabad</p>
              </div>
            </motion.div>

            {/* Invisible Grill for Windows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Invisible Grill for Windows Image */}
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('/images/safety-nets/invisible-grill-windows.jpg')`,
                backgroundPosition: 'center 30%'
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Window Grills</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Elegant security</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Window Security</h4>
                <p className="text-gray-600 text-sm mb-3">Elegant invisible grills that secure your windows without blocking sunlight or views. Choose from <strong>2mm, 2.5mm, 3mm, 3.5mm, or 4mm</strong> wire thickness based on your window size and security needs.</p>
                <p className="text-gray-500 text-xs">Serving Kondapur, Madhapur, Begumpet, Ameerpet, Kukatpally and all Hyderabad areas</p>
              </div>
            </motion.div>

            {/* Invisible Grill for Apartments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Invisible Grill for Apartments Image */}
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('/images/safety-nets/invisible-grill-apartments.jpg')`
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Apartment Grills</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Complete solutions</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Apartments</h4>
                <p className="text-gray-600 text-sm mb-3">Complete safety solution for high-rise apartments. Protect your children and pets with our invisible grills in <strong>2mm to 4mm</strong> wire sizes. Strong, rust-proof, and nearly invisible!</p>
                <p className="text-gray-500 text-xs">Serving Financial District, Nanakramguda, Manikonda, Chandanagar, Serilingampally and all Hyderabad</p>
              </div>
            </motion.div>

            {/* Cloth Hangers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Cloth Hangers Image */}
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('/images/safety-nets/pull-dry-cloth-hangers.jpg')`
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Cloth Hangers</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Modern utility</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Modern Homes</h4>
                <p className="text-gray-600 text-sm mb-3">Space-saving cloth hangers for your balcony or utility area. Available in <strong>4ft, 5ft, 6ft, 7ft, 8ft</strong> sizes with <strong>3 or 6 rods</strong> options. Pull out when needed, fold back to save space!</p>
                <p className="text-gray-500 text-xs">Serving all Hyderabad areas - rust-proof, weather-resistant, easy to use</p>
              </div>
            </motion.div>

          </div>
          
          {/* View More Services Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View More Services
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Steel Invisible Grills?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive invisible grill and cloth hanger solutions with unmatched quality and service - from balconies to windows, apartments, and modern living spaces across Hyderabad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Stats Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Ensure Safety?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We are proud to serve customers across Hyderabad who have embraced the benefits of safety nets. Join the growing community that has already secured their premises with our protection solutions. Contact us today for a complimentary safety consultation on construction safety nets, cricket nets, gardening protection, and customized safety solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917893987771"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
              Call Now: +91 7893987771
            </a>
            <button
              onClick={openWhatsAppQuote}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer shadow-lg"
            >
              Request Quote
            </button>
            <Link
              to="/services"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-green-600"
            >
              <Shield className="inline mr-2 h-6 w-6" />
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
