import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import { Lock, ChevronRight, Shield, Key, Car } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline';
  onClick?: () => void;
  [key: string]: any;
}

const Button = ({ children, className = "", size = "default", variant = "default", ...props }: ButtonProps) => {
  const sizeClasses: Record<string, string> = {
    default: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  const variantClasses: Record<string, string> = {
    default: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent backdrop-blur-sm"
  };

  return (
    <button
      className={`rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${sizeClasses[size] || sizeClasses.default} ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const ySpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(ySpring, [0, 1], ['0%', '30%']);

  // Carousel state
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const floatingAnimation = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Set hero images for locksmith business
  useEffect(() => {
    setHeroImages([
      "/hero1.jpg", // Main hero background
      "/hero2.jpg", // Key cutting workspace
      "/hero3.jpg", // Car key programming
      "/hero1.jpg", // Door lock installation
      "/hero2.jpg"  // Security consultation
    ]);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (heroImages.length > 0) {
      startAutoSlide();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [heroImages]);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Slower transition for better viewing
  }, [heroImages]);

  const goToSlide = useCallback((index: number) => {
    setCurrentImageIndex(index);
    startAutoSlide();
  }, [startAutoSlide]);

  const goToNextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide();
  }, [heroImages.length, startAutoSlide]);

  const goToPrevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  }, [heroImages.length, startAutoSlide]);

  return (
    <section>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-1500 ease-in-out ${currentImageIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1]">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Parallax Effect */}
      {/* <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/images/herobg.png')] bg-cover bg-center opacity-10 z-[1]"
      /> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Logo/Icon Section */}
          <motion.div
            className="mb-3 sm:mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <motion.div
              className="relative inline-block"
              variants={floatingAnimation}
              animate="animate"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="relative">
                  <Lock className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 text-orange-500 mx-auto mb-2" />

                  {/* Surrounding icons */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    variants={pulseAnimation}
                    animate="animate"
                  >
                    <Key className="h-6 w-6 text-emerald-400" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-2 -left-2"
                    variants={pulseAnimation}
                    animate="animate"
                    transition={{ delay: 1 }}
                  >
                    <Shield className="h-6 w-6 text-blue-400" />
                  </motion.div>

                  <motion.div
                    className="absolute -top-2 -left-2"
                    variants={pulseAnimation}
                    animate="animate"
                    transition={{ delay: 2 }}
                  >
                    <Car className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                </div>

                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-500/30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0, 0.7],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="absolute inset-0 rounded-full border border-emerald-500/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-1 sm:mb-3 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Secure Your World with{' '}
            </span>
            <br className="hidden sm:block" />
            <motion.span
              className="inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #fb8512, #ff8c42, #ff6b35, #fb8512)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kazoalo Technologies
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-0 sm:mb-3 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Expert key and lock solutions for cars, doors, and more. Experience professional service with{' '}
            <span className="text-orange-400 font-medium">cutting-edge programmable solutions</span>{' '}
            for all your security needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mt-2 items-center mb-16 max-sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {/* <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="min-w-[200px] shadow-2xl">
                Get Free Quote <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div> */}

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] shadow-lg"
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 max-sm:gap-3 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-orange-500"></div>
              <span>We Deliver World wide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    ⭐
                  </motion.div>
                ))}
              </div>
              <span>5-Star Rated</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Navigation Controls */}
      {heroImages.length > 1 && (
        <>
          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20 max-sm:hidden">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={` h-3 rounded-full transition-all duration-300 hover:scale-110 ${currentImageIndex === index
                    ? "bg-orange-500 w-8 shadow-lg shadow-orange-500/50"
                    : "bg-white/40 w-3 hover:bg-white/60"
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 hover:bg-orange-500/80 backdrop-blur-sm border border-white/10 text-white cursor-pointer transition-all duration-300 items-center justify-center group z-20"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform duration-200"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 hover:bg-orange-500/80 backdrop-blur-sm border border-white/10 text-white cursor-pointer transition-all duration-300 items-center justify-center group z-20"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform duration-200"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-orange-500/80 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;