import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  MapPin,
  Phone
} from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { number: "500+", label: "Safety Installations", icon: <CheckCircle className="h-8 w-8" /> },
    { number: "30+", label: "Expert Team Members", icon: <Users className="h-8 w-8" /> },
    { number: "15+", label: "Years of Experience", icon: <Award className="h-8 w-8" /> },
    { number: "60+", label: "Areas in Hyderabad", icon: <Globe className="h-8 w-8" /> }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We uphold the highest standards, using only premium materials and components to ensure maximum safety and durability."
    },
    {
      title: "Customer Satisfaction",
      description: "Your safety is our priority — we provide dedicated support, reliable service, and comprehensive safety solutions."
    },
    {
      title: "Innovation",
      description: "We continuously embrace the latest safety technologies and industry best practices to deliver superior protection solutions."
    },
    {
      title: "Safety Commitment",
      description: "We are committed to protecting lives and ensuring safety across all our installations and services."
    }
  ];


  const certifications = [
    "ISO 9001:2015 Quality Management",
    "BIS Certified Safety Net Materials",
    "Construction Safety Standards",
    "Industrial Safety Compliance",
    "Safety Nets Quality Certification",
    "Workplace Safety Standards",
    "Material Testing & Certification",
    "Installation Safety Protocols"
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
            About Steel Invisible Grills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Leading safety nets and protection solutions company in Hyderabad. Committed to providing comprehensive 
            safety solutions, professional safety nets installation, and exceptional customer service in Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, Steel Invisible Grills began with a clear mission: to make safety 
                accessible and reliable for construction sites, sports facilities, and gardens across India.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small team of passionate safety experts has grown into one of the nation's 
                most trusted safety nets installation companies, proudly serving over 500 satisfied customers.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our services while upholding our core 
                commitment to quality, customer satisfaction, and safety protection.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-4">
                To accelerate the adoption of safety solutions across India by delivering reliable, durable, and comprehensive safety nets and protection systems.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To become a leading safety nets company in India, driving the nation's commitment to safety and protection in all sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our success and growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-yellow-500 mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Temporarily Hidden */}
      {/* 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your safety success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p className="text-gray-600">
                  <strong>Expertise:</strong> {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Certifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 px-4">
              We maintain the highest safety standards and certifications for all our safety nets installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-blue-800 p-4 sm:p-6 rounded-lg text-center"
              >
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mx-auto mb-3" />
                <p className="text-sm sm:text-lg">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              We proudly serve all areas within Hyderabad and surrounding regions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {['Hyderabad & Secunderabad', 'Banjara Hills & Jubilee Hills', 'Gachibowli & HITEC City', 
              'Kondapur & Madhapur', 'Begumpet & Somajiguda', 'Ameerpet & Kukatpally',
              'Miyapur & Bachupally', 'Nizampet & Chandanagar', 'Serilingampally & Manikonda', 
              'Financial District & Nanakramguda', 'Kokapet & Tellapur', 'Narsingi & Old City', 
              'Charminar & Mehdipatnam', 'Tolichowki & Malakpet', 'Dilsukhnagar & L.B. Nagar', 
              'Uppal & Nagole', 'Boduppal & Alwal', 'Malkajgiri & Kapra', 
              'ECIL & Tarnaka', 'Osmania University & Nallakunta', 
              'Musheerabad & Kachiguda', 'Abids & Koti', 'Sultan Bazar & Nampally', 
              'Basheerbagh & Khairatabad', 'Panjagutta & SR Nagar', 
              'Erragadda & Sanathnagar', 'Balanagar & Patancheru', 'BHEL & IDA', 
              'Jeedimetla & Qutubullapur', 'Medchal & Shamirpet', 
              'Gandipet & Shamshabad', 'Rajiv Gandhi International Airport & Cyberabad', 
              'Raidurg & Gachibowli Stadium'].map((city, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center hover:bg-yellow-50 transition-colors cursor-pointer"
              >
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm sm:text-base">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Ready to Work with Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join our growing family of satisfied customers and experience the Steel Invisible Grills difference
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="tel:+917893987771"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Call Now: +91 7893987771
            </a>
            <a
              href="https://wa.me/917893987771"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
