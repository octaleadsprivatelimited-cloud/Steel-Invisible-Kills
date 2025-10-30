import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Download, 
  Eye,
  Shield,
  HardHat,
  Settings,
  X
} from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryCategories = [
    {
      title: "Invisible Grills",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      images: [
        { src: "/images/safety-nets/invisible-grill-balconies.jpg", alt: "Invisible Grill for Balconies", title: "Invisible Grill for Balconies" },
        { src: "/images/safety-nets/invisible-grill-windows.jpg", alt: "Invisible Grill for Windows", title: "Invisible Grill for Windows" },
        { src: "/images/safety-nets/invisible-grill-apartments.jpg", alt: "Invisible Grill for Apartments", title: "Invisible Grill for Apartments" },
        { src: "/images/safety-nets/invisible-grill.jpg", alt: "Stainless Steel Invisible Grill", title: "Stainless Steel Invisible Grill" }
      ]
    },
    {
      title: "Cloth Hangers",
      icon: <Settings className="h-8 w-8 text-green-500" />,
      images: [
        { src: "/images/safety-nets/pull-dry-cloth-hangers.jpg", alt: "Pull & Dry Cloth Hangers", title: "Pull & Dry Cloth Hangers" },
        { src: "/images/safety-nets/ceiling-cloth-hangers.jpg", alt: "Ceiling Cloth Hangers", title: "Ceiling Cloth Hangers" },
        { src: "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg", alt: "Pull & Dry Cloth Hangers for Balconies", title: "Pull & Dry Cloth Hangers for Balconies" }
      ]
    }
  ];

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/images/safety-nets/invisible-grill-balconies.jpg')`
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
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Explore our professional installations and quality work across Hyderabad. 
            See the difference our expertise makes in invisible grills and cloth hangers.
          </motion.p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our extensive collection of completed projects showcasing our expertise in invisible grills and cloth hangers
            </p>
          </div>

          {galleryCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => openModal(image.src)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Eye className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <h4 className="text-white font-semibold text-sm">{image.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and see how our invisible grills and cloth hangers can enhance your home or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+917893987771"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Call Now: +91 7893987771
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
