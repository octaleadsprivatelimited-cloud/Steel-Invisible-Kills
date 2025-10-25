import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Clock,
  Star,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { openWhatsAppQuote } from '../utils/whatsapp';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The requested service could not be found.</p>
          <Link 
            to="/services" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium mb-8">
              {service.description}
            </p>
            
            {service.popular && (
              <div className="inline-flex items-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 mr-2" />
                Popular Service
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Image */}
            <div className="relative">
              <LazyImage
                src={service.image}
                alt={service.name}
                className="h-96 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-sm opacity-90">{service.category}</p>
              </div>
            </div>

            {/* Service Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Warranty</h3>
                  <p className="text-lg text-green-600 font-semibold">{service.warranty}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsAppQuote}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a
                  href="tel:+917893987771"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why our {service.name.toLowerCase()} solutions are the best choice for your safety needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <MapPin className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
              <ul className="space-y-2">
                {service.applications.map((application, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Award className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials & Installation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Used</h2>
              <ul className="space-y-3">
                {service.materials.map((material, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Installation Process */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Process</h2>
              <ul className="space-y-3">
                {service.installation.map((step, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance & Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive maintenance services to ensure your {service.name.toLowerCase()} continues to perform optimally
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.maintenance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <Users className="h-12 w-12 text-blue-400 mb-4" />
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-lg">Installations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Award className="h-12 w-12 text-blue-400 mb-4" />
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
              <p className="text-4xl font-bold mb-2">99%</p>
              <p className="text-lg">Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Property with {service.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized {service.name.toLowerCase()} solution quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsAppQuote}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+917893987771"
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now: +91 7893987771
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
