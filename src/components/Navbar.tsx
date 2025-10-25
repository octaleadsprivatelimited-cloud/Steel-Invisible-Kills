import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  HelpCircle,
  BookOpen,
  Award
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const services = [
    { name: "Pigeon Nets", slug: "pigeon-nets" },
    { name: "Invisible Nets", slug: "invisible-nets" },
    { name: "Balcony Safety Nets", slug: "balcony-safety-nets" },
    { name: "Cricket Practice Nets", slug: "cricket-practice-nets" },
    { name: "Kids Safety Nets", slug: "kids-safety-nets" },
    { name: "Anti Bird Nets", slug: "anti-bird-nets" },
    { name: "Pets Safety Nets", slug: "pets-safety-nets" },
    { name: "Construction Safety Nets", slug: "construction-safety-nets" },
    { name: "Gardening Nets", slug: "gardening-nets" },
    { name: "Industrial Safety Nets", slug: "industrial-safety-nets" },
    { name: "Sports Nets", slug: "sports-nets" },
    { name: "Swimming Pool Nets", slug: "swimming-pool-nets" },
    { name: "Window Safety Nets", slug: "window-safety-nets" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Hide navbar on landing page for mobile
  if (location.pathname === '/landing') {
    return null;
  }

  return (
    <nav className="shadow-md fixed w-full z-50" style={{ backgroundColor: '#f97316' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-white">Steel Invisible Grills</span>
              </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto"
                >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-blue-600 hover:bg-blue-50 font-semibold transition-colors"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    View All Services
                  </Link>
                </motion.div>
              )}
            </div>
            
            <Link to="/about" className="text-white hover:text-gray-200 transition-colors">About</Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
              >
                <span>More</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >

                  <Link
                    to="/faq"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>FAQ</span>
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Blog</span>
                  </Link>

                </motion.div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Quality Button */}
            <Link
              to="/about"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 shadow-lg"
            >
              <Award className="h-4 w-4" />
              <span>Quality Assured</span>
            </Link>
            
            {/* Get Quote Button */}
            <button
              onClick={openWhatsAppQuote}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-2 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            
            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <span className="font-semibold">Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="ml-4 space-y-1 max-h-60 overflow-y-auto">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors text-sm font-semibold"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>About</Link>

            <Link to="/faq" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>

            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* Mobile Quality Button */}
              <Link
                to="/about"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Award className="h-5 w-5" />
                <span>Quality Assured</span>
              </Link>

              {/* Mobile Get Quote Button */}
              <button
                onClick={() => {
                  openWhatsAppQuote();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
