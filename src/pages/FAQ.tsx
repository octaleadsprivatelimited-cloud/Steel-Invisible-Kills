import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Lightbulb,
  Zap,
  Shield
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Safety Net Installation",
      icon: <Shield className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600",
      questions: [
        {
          question: "How long does safety net installation take?",
          answer: "Installation time varies by project size. Simple balcony nets take 2-4 hours, while large construction sites may take 1-3 days. We provide accurate timelines during our free consultation."
        },
        {
          question: "What types of safety nets do you offer?",
          answer: "We offer comprehensive safety net solutions including balcony safety nets, pigeon nets, cricket practice nets, kids safety nets, anti-bird nets, pets safety nets, construction safety nets, gardening nets, industrial safety nets, sports nets, swimming pool nets, and window safety nets."
        },
        {
          question: "Do you provide custom sizing?",
          answer: "Yes, we provide custom sizing for all our safety net services. Our team takes precise measurements and creates nets tailored to your specific requirements and space constraints."
        }
      ]
    },
    {
      title: "Safety & Quality",
      icon: <Shield className="h-6 w-6" />,
      color: "from-green-400 to-green-600",
      questions: [
        {
          question: "Are your safety nets certified and tested?",
          answer: "Yes, all our safety nets meet international safety standards and are tested for strength, durability, and weather resistance. We use certified materials and follow strict quality control processes."
        },
        {
          question: "What materials are used in your safety nets?",
          answer: "We use high-quality materials including UV-resistant nylon, polyethylene, and specialized safety net materials. All materials are weather-resistant, durable, and designed for long-term outdoor use."
        },
        {
          question: "Can safety nets withstand harsh weather?",
          answer: "Our safety nets are designed to withstand various weather conditions including rain, wind, and UV exposure. They're made from weather-resistant materials and are tested for durability in different climates."
        }
      ]
    },
    {
      title: "General Questions",
      icon: <HelpCircle className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600",
      questions: [
        {
          question: "What are safety nets and why do I need them?",
          answer: "Safety nets are protective barriers made from high-strength materials designed to prevent falls, contain debris, and protect people and property. They're essential for construction sites, balconies, sports facilities, and areas where safety is a concern."
        },
        {
          question: "How long do safety nets last?",
          answer: "Our high-quality safety nets typically last 5-10 years depending on usage and environmental conditions. We provide warranties ranging from 3-5 years and offer maintenance services to extend their lifespan."
        },
        {
          question: "Do safety nets require maintenance?",
          answer: "Safety nets require minimal maintenance. We recommend annual inspections to check for wear, damage, or loose fittings. Our team provides professional maintenance services to ensure optimal performance."
        }
      ]
    },
    {
      title: "Support & Warranty",
      icon: <Shield className="h-6 w-6" />,
      color: "from-purple-400 to-purple-600",
      questions: [
        {
          question: "What warranty do you provide?",
          answer: "We provide comprehensive warranties ranging from 3-5 years depending on the service type. Our warranty covers material defects, workmanship, and includes free repairs or replacement for covered issues."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we provide 24/7 emergency support for urgent safety net repairs or installations. Our emergency team can respond quickly to ensure your safety needs are met immediately."
        },
        {
          question: "What if I need modifications after installation?",
          answer: "We offer modification services for existing installations. Whether you need size adjustments, additional coverage, or upgrades, our team can modify your safety nets to meet your changing needs."
        }
      ]
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <HelpCircle className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              Get answers to common questions about safety nets, installation, and maintenance. 
              Everything you need to know about Steel Invisible Grills services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                
                {/* Questions */}
                <div className="p-6">
                  {category.questions.map((item, questionIndex) => {
                    const itemIndex = categoryIndex * 3 + questionIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={questionIndex} className="mb-4 last:mb-0">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 p-4 bg-blue-50 rounded-lg"
                          >
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our safety nets experts are here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917893987771"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <Zap className="mr-2 h-5 w-5" />
                Call Our Experts
              </a>
              <a
                href="https://wa.me/917893987771"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
