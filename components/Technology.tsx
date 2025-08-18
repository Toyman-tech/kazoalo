import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award, Users, Phone, Wrench, Star, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
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

const WhyChooseKazoalo = () => {
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

  const reasons = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Locked out? We're here for you anytime, day or night. Fast response within 15-30 minutes guaranteed.",
      stats: "15-30 min",
      statsLabel: "Response Time",
      color: "from-blue-500 to-blue-600",
      bgPattern: "bg-blue-500/10"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind. Professional service you can trust.",
      stats: "100%",
      statsLabel: "Insured Work",
      color: "from-green-500 to-green-600",
      bgPattern: "bg-green-500/10"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Our skilled locksmiths have years of experience handling all types of locks and security systems.",
      stats: "28+ Years",
      statsLabel: "Since 1996",
      color: "from-purple-500 to-purple-600",
      bgPattern: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join thousands of satisfied customers who trust Kazoalo for their security needs across Lagos.",
      stats: "5000+",
      statsLabel: "Happy Clients",
      color: "from-orange-500 to-orange-600",
      bgPattern: "bg-orange-500/10"
    },
    {
      icon: Phone,
      title: "Upfront Pricing",
      description: "No hidden fees or surprise charges. We provide clear, honest pricing before any work begins.",
      stats: "No",
      statsLabel: "Hidden Fees",
      color: "from-cyan-500 to-cyan-600",
      bgPattern: "bg-cyan-500/10"
    },
    {
      icon: Wrench,
      title: "Latest Equipment",
      description: "We use modern tools and techniques to ensure efficient, damage-free solutions for all lock types.",
      stats: "Modern",
      statsLabel: "Equipment",
      color: "from-red-500 to-red-600",
      bgPattern: "bg-red-500/10"
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Johnson",
      location: "Victoria Island",
      rating: 5,
      comment: "Fast, professional, and affordable. Kazoalo saved the day when I was locked out of my office!"
    },
    {
      name: "Sarah Okafor",
      location: "Lekki",
      rating: 5,
      comment: "Excellent service! They programmed my car key quickly and the price was very reasonable."
    },
    {
      name: "Michael Chen",
      location: "Ikeja",
      rating: 5,
      comment: "Professional team, arrived on time, and fixed my door lock perfectly. Highly recommended!"
    },
    {
      name: "Funmi Adebayo",
      location: "Ikoyi",
      rating: 5,
      comment: "Been using Kazoalo for 5 years. Always reliable, honest pricing, and quick response time."
    },
    {
      name: "James Okoro",
      location: "Surulere",
      rating: 5,
      comment: "They've been serving our family since 2010. Trustworthy and skilled locksmith services."
    },
    {
      name: "Blessing Udo",
      location: "Yaba",
      rating: 5,
      comment: "Emergency lockout at 2AM and they came immediately. Professional service, fair pricing."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge className="bg-orange-500 text-white mb-4 text-sm sm:text-base">Why Choose Us</Badge>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Kazoalo Technologies
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your trusted locksmith partner in Lagos since 1996. With over 28 years of experience, we combine proven expertise with modern techniques to deliver reliable, fast, and affordable security solutions.
          </motion.p>
        </motion.div>

        {/* Reasons Grid - Desktop */}
        <div className="hidden lg:block mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500/50 transition-all duration-500 group h-full relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`${reason.bgPattern} px-3 py-1 rounded-full border border-slate-600`}>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">{reason.stats}</div>
                        <div className="text-slate-400 text-xs">{reason.statsLabel}</div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <div className={`w-16 h-16 ${reason.bgPattern} rounded-full flex items-center justify-center mb-4`}>
                        <reason.icon className="h-8 w-8 text-orange-500" />
                      </div>
                    </motion.div>
                    <h3 className="text-white text-xl font-semibold mb-2">{reason.title}</h3>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-slate-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Reasons Slider - Mobile & Tablet */}
        <div className="lg:hidden mb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
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
            }}
            className="reasons-swiper"
          >
            {reasons.map((reason, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500/50 transition-all duration-500 group h-full relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`${reason.bgPattern} px-3 py-1 rounded-full border border-slate-600`}>
                        <div className="text-center">
                          <div className="text-white font-bold text-sm">{reason.stats}</div>
                          <div className="text-slate-400 text-xs">{reason.statsLabel}</div>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 ${reason.bgPattern} rounded-full flex items-center justify-center mb-4`}>
                        <reason.icon className="h-8 w-8 text-orange-500" />
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">{reason.title}</h3>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-slate-400 leading-relaxed">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Testimonials Section */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Our Customers Say
            </h3>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-slate-400 ml-2">4.9/5 from 1,500+ reviews</span>
            </div>
          </div>

          {/* Testimonials Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-testimonial',
              bulletActiveClass: 'swiper-pagination-bullet-testimonial-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.name}</div>
                      <div className="text-slate-400 text-xs">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-5 w-5" />
              Call Us Now: 08146120795
            </motion.button>
            
            {/* <motion.button
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle className="h-5 w-5" />
              Get Free Quote
            </motion.button> */}
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .reasons-swiper {
          padding-bottom: 50px !important;
        }
        
        .reasons-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .testimonials-swiper {
          padding-bottom: 50px !important;
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet-custom,
        .swiper-pagination-bullet-testimonial {
          width: 12px;
          height: 12px;
          background: #64748b;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active-custom,
        .swiper-pagination-bullet-testimonial-active {
          background: #f97316;
          width: 32px;
          border-radius: 6px;
        }
        
        .swiper-pagination-bullet-custom:hover,
        .swiper-pagination-bullet-testimonial:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseKazoalo;