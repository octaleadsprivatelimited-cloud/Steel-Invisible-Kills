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

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Premium Safety Nets",
      description: "High-quality safety nets with 5+ year warranty"
    },
    {
      icon: <HardHat className="h-12 w-12 text-blue-500" />,
      title: "Expert Installation",
      description: "Certified technicians with 10+ years of experience"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "Quality Assurance",
      description: "ISO certified processes and materials"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
      title: "Best Service",
      description: "Award-winning customer service and support"
    }
  ];

  const stats = [
    { number: "500+", label: "Safety Installations", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "30+", label: "Team Members", icon: <Users className="h-6 w-6" /> },
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "60+", label: "Areas in Hyderabad", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Video Background */}
      <motion.section 
        className="relative bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-900/60 text-white min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          y, 
          opacity, 
          scale,
            backgroundImage: 'url(/images/safety-nets/sports-nets-installation.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          backgroundColor: '#1e3a8a'
        }}
      >
            {/* Background Image - Optimized */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
              style={{
                backgroundImage: `url('/images/safety-nets/sports-nets-installation.avif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                minHeight: '100vh',
                width: '100%',
                height: '100%'
              }}
            />
        
        {/* Light Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-900/20"></div>
        
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
                Protect Lives with
                  <span className="text-blue-400 font-semibold"> Safety Nets</span>
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
                  Leading Safety Solutions
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
                  Professional Safety Nets Installation & Protection Solutions
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

          {/* Safety Nets Applications Showcase */}
          <motion.section 
            className="py-20 bg-gradient-to-br from-red-50 to-pink-50"
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
              Safety Nets Applications
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See our professional safety nets installations across Hyderabad - from construction safety nets to cricket nets, gardening protection nets, and industrial safety solutions
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Construction Safety Nets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Construction Safety Nets Image */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url('/images/safety-nets/balcony-safety-nets (1).webp')`
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Balcony Safety Nets</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Home safety</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Balconies</h4>
                <p className="text-gray-600 text-sm">Complete safety solutions for balconies and high-rise buildings. Child and pet safety protection with weather-resistant materials across all areas of Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Secunderabad, and surrounding areas</p>
              </div>
            </motion.div>

            {/* Cricket Nets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Cricket Nets Image */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url('/images/safety-nets/pigeon-nets.webp')`,
                backgroundPosition: 'center 30%'
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Pigeon Nets</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Bird protection</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Bird Protection</h4>
                <p className="text-gray-600 text-sm">Anti-pigeon nets to protect your property from bird droppings and damage. UV resistant, transparent design with easy maintenance across all areas of Hyderabad including Kondapur, Madhapur, Begumpet, Ameerpet, Kukatpally, and surrounding areas</p>
              </div>
            </motion.div>

            {/* Gardening Nets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Gardening Nets Image */}
              <div className="absolute inset-0" style={{
                backgroundImage: `url('/images/safety-nets/cricket-practice-nets.webp')`
              }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Cricket Practice Nets</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Sports solutions</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Sports</h4>
                <p className="text-gray-600 text-sm">Professional cricket nets for practice grounds, sports academies, and recreational facilities. High-quality nets that withstand weather and provide excellent ball containment across all areas of Hyderabad including Financial District, Nanakramguda, Manikonda, Chandanagar, Serilingampally, and surrounding areas</p>
              </div>
            </motion.div>

            {/* Kids Safety Nets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Kids Safety Nets Image */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url('/images/safety-nets/terrace-top-nets.webp')`
                }}></div>
                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Kids Safety Nets</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Child protection</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Children</h4>
                <p className="text-gray-600 text-sm">Specialized safety nets designed specifically for children's safety. Child-safe materials with small mesh size for maximum protection across all areas of Hyderabad including Old City, Charminar, Dilsukhnagar, L.B. Nagar, Uppal, Nagole, and surrounding areas</p>
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
                  Why Choose Steel Invisible Kills?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive safety solutions with unmatched quality and service - from construction safety nets to cricket nets, gardening protection, and industrial safety solutions across Hyderabad
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
                  href="tel:+918074616049"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
              Call Now: +91 8074616049
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
