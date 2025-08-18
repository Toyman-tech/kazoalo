import React from 'react';
import { motion } from 'framer-motion';
import { Building, Hotel, Key, Users, ShoppingBag, Car, Home, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Partners = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const Partners = [
    {
      name: "Grand Palace Hotel",
      type: "Luxury Hotel Chain",
      location: "Victoria Island, Lagos",
      services: "Bulk Key Manufacturing & Master Key Systems",
      description: "We supply over 500 room keys monthly and maintain their complete master key system across 3 locations.",
      orderVolume: "500+ Keys/Month",
      partnership: "Since 2018",
      icon: Hotel,
      flierBg: "from-blue-600 to-blue-800",
      accentColor: "text-blue-400",
      image: "/api/placeholder/400/200", // Hotel business flier
      specialties: ["Room Keys", "Master Keys", "Electronic Cards", "Security Systems"]
    },
    {
      name: "Adeyemi Locksmith Services",
      type: "Fellow Locksmith Business",
      location: "Ikeja, Lagos",
      services: "Wholesale Blank Keys & Locksmith Tools",
      description: "We're their trusted supplier for blank keys, cutting tools, and professional locksmith equipment.",
      orderVolume: "1000+ Blanks/Month",
      partnership: "Since 2015",
      icon: Key,
      flierBg: "from-orange-600 to-red-600",
      accentColor: "text-orange-400",
      image: "/api/placeholder/400/200", // Locksmith shop flier
      specialties: ["Blank Keys", "Cutting Tools", "Lock Hardware", "Professional Equipment"]
    },
    {
      name: "Mercy's Fashion Empire",
      type: "Retail Chain Owner",
      location: "Surulere & Lekki, Lagos",
      services: "Bulk Padlocks & Security Solutions",
      description: "Secures 12 fashion outlets with our high-quality padlocks and provides keys for her entire staff team.",
      orderVolume: "200+ Locks/Quarter",
      partnership: "Since 2020",
      icon: ShoppingBag,
      flierBg: "from-pink-600 to-purple-600",
      accentColor: "text-pink-400",
      image: "/api/placeholder/400/200", // Fashion business flier
      specialties: ["Padlocks", "Store Security", "Staff Keys", "Display Locks"]
    },
    {
      name: "Lagos Car Mart",
      type: "Used Car Dealership",
      location: "Berger, Lagos",
      services: "Automotive Key Programming & Duplication",
      description: "We handle all their car key programming, replacement, and security system installations for their vehicle inventory.",
      orderVolume: "150+ Car Keys/Month",
      partnership: "Since 2019",
      icon: Car,
      flierBg: "from-green-600 to-teal-600",
      accentColor: "text-green-400",
      image: "/api/placeholder/400/200", // Car dealership flier
      specialties: ["Car Key Programming", "Remote Keys", "Transponder Keys", "Ignition Systems"]
    },
    {
      name: "Golden Gate Estate",
      type: "Real Estate Development",
      location: "Ajah, Lagos",
      services: "Residential Lock Systems & House Keys",
      description: "We've equipped over 200 housing units with complete lock systems and provide ongoing key services to residents.",
      orderVolume: "300+ House Keys/Month",
      partnership: "Since 2017",
      icon: Home,
      flierBg: "from-indigo-600 to-blue-600",
      accentColor: "text-indigo-400",
      image: "/api/placeholder/400/200", // Real estate flier
      specialties: ["House Keys", "Door Locks", "Security Systems", "Master Planning"]
    },
    {
      name: "SecureGuard Nigeria",
      type: "Security Company",
      location: "Multiple Locations, Lagos",
      services: "Commercial Security Hardware & Systems",
      description: "We supply specialized security locks, access control systems, and emergency locksmith services for their client sites.",
      orderVolume: "500+ Security Items/Month",
      partnership: "Since 2016",
      icon: Shield,
      flierBg: "from-gray-700 to-slate-800",
      accentColor: "text-gray-400",
      image: "/api/placeholder/400/200", // Security company flier
      specialties: ["Commercial Locks", "Access Control", "Security Hardware", "Emergency Services"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="mb-4"
          >
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium">
              Our VIP Clients
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Trusted by Leading{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            From hotels to retail chains, car dealerships to real estate developments - see how we serve Lagos's top businesses with bulk orders and specialized security solutions.
          </p>
        </motion.div>

        {/* VIP Clients Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              nextEl: '.vip-swiper-button-next',
              prevEl: '.vip-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'vip-swiper-pagination-bullet',
              bulletActiveClass: 'vip-swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="vip-clients-swiper"
          >
            {Partners.map((client, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-500 group h-full">
                    {/* Business Flier/Header */}
                    <div className={`relative h-48 bg-gradient-to-br ${client.flierBg} p-6 flex items-center justify-center`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${client.image})` }}
                      />
                      <div className="relative z-10 text-center text-white">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="mb-4"
                        >
                          <client.icon className="h-12 w-12 mx-auto" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-1">{client.name}</h3>
                        <p className="text-sm opacity-90">{client.type}</p>
                        <p className="text-xs opacity-75 mt-1">{client.location}</p>
                      </div>
                      
                      {/* Partnership Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-white text-xs font-medium">{client.partnership}</span>
                        </div>
                      </div>
                    </div>

                    {/* Client Details */}
                    <div className="p-6">
                      {/* Service Type */}
                      <div className="mb-4">
                        <h4 className={`font-semibold ${client.accentColor} mb-2`}>
                          {client.services}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {client.description}
                        </p>
                      </div>

                      {/* Key Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                          <div className="text-orange-400 font-bold text-sm">{client.orderVolume}</div>
                          <div className="text-slate-400 text-xs">Order Volume</div>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                          <div className="text-green-400 font-bold text-sm">{client.partnership}</div>
                          <div className="text-slate-400 text-xs">Partnership</div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h5 className="text-white text-sm font-medium mb-2">Our Services for Them:</h5>
                        <div className="flex flex-wrap gap-1">
                          {client.specialties.map((specialty, idx) => (
                            <span 
                              key={idx}
                              className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="vip-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="vip-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            { number: "50+", label: "VIP Clients", icon: Users },
            { number: "10K+", label: "Keys Monthly", icon: Key },
            { number: "28+", label: "Years Experience", icon: Shield },
            { number: "99%", label: "Client Retention", icon: Building }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center group hover:border-orange-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our VIP Client Family?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Whether you need bulk orders, ongoing partnerships, or specialized security solutions for your business, we're here to serve you with the same excellence our VIP clients have experienced for years.
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Become a VIP Client
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .vip-clients-swiper {
          padding-bottom: 60px !important;
        }
        
        .vip-clients-swiper .swiper-pagination {
          bottom: 10px !important;
        }
        
        .vip-swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #64748b;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .vip-swiper-pagination-bullet-active {
          background: #f97316;
          width: 32px;
          border-radius: 6px;
        }
        
        .vip-swiper-pagination-bullet:hover {
          background: #94a3b8;
        }
        
        @media (max-width: 768px) {
          .vip-swiper-button-prev,
          .vip-swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;