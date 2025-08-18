import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Key, Home, Car, Settings, Shield, Wrench, Building } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// UI Components
const Badge = ({ children, className = "" }:any) => (
  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);

const Card = ({ children, className = "" }:any) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }:any) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }:any) => (
  <div className={`px-6 pb-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }:any) => (
  <h3 className={`font-semibold ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }:any) => (
  <p className={`${className}`}>
    {children}
  </p>
);

const Products = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const products = [
    {
      icon: Key,
      title: "House Keys",
      description: "Traditional and modern house keys for residential properties. We cut and duplicate all standard house key types.",
      features: ["Key cutting", "Key duplication", "Master key systems", "Emergency replacement"],
      color: "from-blue-500 to-blue-600",
      category: "Residential"
    },
    {
      icon: Car,
      title: "Car Keys",
      description: "Automotive key solutions including traditional keys, transponder keys, and remote key fobs for all vehicle makes.",
      features: ["Transponder keys", "Remote key fobs", "Key programming", "Ignition repair"],
      color: "from-green-500 to-green-600", 
      category: "Automotive"
    },
    {
      icon: Lock,
      title: "Padlocks",
      description: "High-security padlocks for various applications. From basic security to heavy-duty industrial use.",
      features: ["Combination locks", "Keyed padlocks", "Weather-resistant", "High-security models"],
      color: "from-purple-500 to-purple-600",
      category: "Security"
    },
    {
      icon: Wrench,
      title: "Locksmith Tools",
      description: "Professional locksmith tools and blank keys for cutting and emergency access services.",
      features: ["Key blanks", "Lock picks", "Cutting machines", "Professional tools"],
      color: "from-orange-500 to-orange-600",
      category: "Tools"
    },
    {
      icon: Building,
      title: "Commercial Locks",
      description: "Heavy-duty commercial grade locks and access control systems for businesses and offices.",
      features: ["Deadbolts", "Grade 1 locks", "Access control", "Master key systems"],
      color: "from-red-500 to-red-600",
      category: "Commercial"
    },
    {
      icon: Settings,
      title: "Programmable Keys",
      description: "Modern programmable key systems and electronic access solutions for enhanced security.",
      features: ["Electronic keys", "Remote programming", "Access codes", "Smart lock integration"],
      color: "from-cyan-500 to-cyan-600",
      category: "Electronic"
    },
    {
      icon: Shield,
      title: "Security Hardware",
      description: "Complete range of security hardware including hinges, strikes, and reinforcement products.",
      features: ["Door reinforcement", "Security hinges", "Strike plates", "Window locks"],
      color: "from-indigo-500 to-indigo-600",
      category: "Hardware"
    },
    {
      icon: Home,
      title: "Door Locks",
      description: "Full range of residential and commercial door locks from basic to high-security models.",
      features: ["Deadbolts", "Knob locks", "Lever handles", "Smart locks"],
      color: "from-teal-500 to-teal-600",
      category: "Doors"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge className="bg-orange-500 text-white mb-4 text-sm sm:text-base">Our Products & Services</Badge>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Complete Locksmith Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            From traditional keys to modern security systems, we provide comprehensive locksmith products and services
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="products-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="bg-slate-800 border border-slate-700 hover:border-orange-500 transition-all duration-500 group h-full relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-slate-700 text-slate-300 text-xs">
                        {product.category}
                      </Badge>
                    </div>

                    <CardHeader className="text-center relative z-10 pb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                      >
                        <product.icon className="h-12 w-12 sm:h-14 sm:w-14 text-orange-500 mx-auto group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <CardTitle className="text-white text-lg sm:text-xl mb-2">{product.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <CardDescription className="text-slate-400 text-center text-sm sm:text-base leading-relaxed mb-4">
                        {product.description}
                      </CardDescription>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-slate-500">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-slate-400 mb-6">
            Need a custom solution or have questions about our products?
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .products-swiper {
          padding-bottom: 50px !important;
        }
        
        .products-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #64748b;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #f97316;
          width: 32px;
          border-radius: 6px;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: #94a3b8;
        }
        
        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;