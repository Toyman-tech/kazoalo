import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Car, Clock, CheckCircle, MapPin, Users } from 'lucide-react';
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
  <div className={`rounded-xl ${className}`}>
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

const CaseStudies = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const caseStudies = [
    {
      title: "Emergency Office Lockout Response",
      client: "Tech Startup - Victoria Island",
      description: "Rapid response to office lockout crisis for 50-employee tech company. Gained access without damage and installed new high-security locks.",
      challenge: "Emergency lockout at 6 AM before important client meeting",
      solution: "Arrived within 20 minutes, gained entry without damage, upgraded to Grade 1 commercial locks",
      results: ["15-minute resolution", "Zero damage to property", "Enhanced security upgrade", "Same-day service completion"],
      icon: Building,
      duration: "20 minutes",
      category: "Emergency",
      image: "/api/placeholder/400/250",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Complete Home Security Overhaul",
      client: "Family Residence - Lekki",
      description: "Full security upgrade for family home including new locks, key systems, and security hardware after break-in attempt.",
      challenge: "Security vulnerabilities after attempted burglary",
      solution: "Installed deadbolts, reinforced door frames, created master key system, added window locks",
      results: ["5 new high-security locks", "Master key system", "Reinforced entry points", "Family peace of mind"],
      icon: Home,
      duration: "1 day",
      category: "Residential",
      image: "/api/placeholder/400/250",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Car Dealership Key Programming",
      client: "Auto Dealership - Ikeja",
      description: "Comprehensive key programming and duplication service for car dealership with 80+ vehicles in inventory.",
      challenge: "Lost master keys for multiple vehicle models",
      solution: "Programmed new keys for 15 different car models, created spare key sets, established key management system",
      results: ["80+ vehicles secured", "Multiple car brands", "Inventory protection", "Ongoing maintenance plan"],
      icon: Car,
      duration: "3 days",
      category: "Automotive",
      image: "/api/placeholder/400/250",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Bank Branch Security Upgrade",
      client: "Commercial Bank - Ikoyi",
      description: "High-security lock installation and access control system for bank branch following security audit recommendations.",
      challenge: "Meet new banking security compliance requirements",
      solution: "Installed Grade 1 commercial locks, secure key cabinets, employee access cards, and emergency lockdown systems",
      results: ["Compliance achieved", "Enhanced staff security", "Audit requirements met", "Emergency protocols"],
      icon: Building,
      duration: "2 days",
      category: "Commercial",
      image: "/api/placeholder/400/250",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Hotel Master Key System",
      client: "Boutique Hotel - Surulere",
      description: "Created comprehensive master key system for 40-room boutique hotel enabling staff access while maintaining guest security.",
      challenge: "Complex access needs for staff and guests",
      solution: "Designed 4-level master key system: grand master, master, sub-master, and guest keys with restricted key control",
      results: ["40 guest rooms secured", "Staff efficiency improved", "Key control system", "Guest privacy maintained"],
      icon: Users,
      duration: "2 days",
      category: "Hospitality",
      image: "/api/placeholder/400/250",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Emergency Car Lockout - Airport",
      client: "Business Executive - Lagos Airport",
      description: "Critical car lockout resolution for executive heading to international flight. Keys locked inside running vehicle.",
      challenge: "Time-sensitive lockout with running engine",
      solution: "Emergency mobile response, gained access without damage using specialized tools, made spare key on-site",
      results: ["Flight caught on time", "No vehicle damage", "Spare key provided", "24/7 service delivery"],
      icon: Clock,
      duration: "25 minutes",
      category: "Emergency",
      image: "/api/placeholder/400/250",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-800">
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
            <Badge className="bg-orange-500 text-white mb-4 text-sm sm:text-base">Success Stories</Badge>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Real Cases, Real Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            See how Kazoalo Technologies has helped thousands of customers across Lagos with professional locksmith solutions since 1996
          </p>
        </motion.div>

        {/* Case Studies Grid - Desktop */}
        <div className="hidden lg:block">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-slate-900 border border-slate-700 overflow-hidden hover:border-orange-500 transition-all duration-500 group h-full">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-slate-700">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <study.icon className="h-16 w-16 text-white/80" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${study.color} text-white text-xs`}>
                        {study.category}
                      </Badge>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-slate-800/80 text-slate-300 text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {study.duration}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white text-lg mb-2">{study.title}</CardTitle>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{study.client}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    
                    {/* Results */}
                    <div className="space-y-2">
                      <h4 className="text-orange-400 font-medium text-sm">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.slice(0, 4).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Case Studies Swiper - Mobile & Tablet */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.case-studies-next',
              prevEl: '.case-studies-prev',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-case',
              bulletActiveClass: 'swiper-pagination-bullet-case-active',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="case-studies-swiper"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-slate-900 border border-slate-700 overflow-hidden hover:border-orange-500 transition-all duration-500 group h-full">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-slate-700">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <study.icon className="h-16 w-16 text-white/80" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${study.color} text-white text-xs`}>
                        {study.category}
                      </Badge>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-slate-800/80 text-slate-300 text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {study.duration}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white text-lg mb-2">{study.title}</CardTitle>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{study.client}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    
                    {/* Results */}
                    <div className="space-y-2">
                      <h4 className="text-orange-400 font-medium text-sm">Key Results:</h4>
                      <div className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="case-studies-prev w-12 h-12 bg-slate-700 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="case-studies-next w-12 h-12 bg-slate-700 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
            Ready to become our next success story?
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Share Your Challenge
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .case-studies-swiper {
          padding-bottom: 50px !important;
        }
        
        .case-studies-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet-case {
          width: 12px;
          height: 12px;
          background: #64748b;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-case-active {
          background: #f97316;
          width: 32px;
          border-radius: 6px;
        }
        
        .swiper-pagination-bullet-case:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;