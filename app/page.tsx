'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lock, Key, Settings, Shield, Star, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Menu, X, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import CaseStudies from '@/components/CaseStudy'
import WhyChooseKazoalo from '@/components/Technology'
import Products from '@/components/Products'
import Footer from '@/components/Footer'

export default function KazoaloLanding() {
  // Enhanced animation variants (moved inside component to fix Next.js build error)
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  // Enhanced scroll reveal hook
  const useScrollReveal = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    return [ref, isInView]
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  
  // Parallax effects
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50])
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -25])
  const scaleParallax = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(yParallax, springConfig)

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Image
                  src="/images/kazlogo.png"
                  alt="Kazoalo Technologies"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold">Kazoalo Technologies</span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['Products', 'Technology', 'Testimonials', 'Services'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-orange-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                Get Quote
              </Button>
            </motion.div>
          </nav>

          <motion.button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0, 
            height: mobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700 overflow-hidden"
        >
          <motion.div 
            className="container mx-auto px-4 py-6 space-y-4"
            variants={staggerContainer}
            initial="initial"
            animate={mobileMenuOpen ? "animate" : "initial"}
          >
            {['Products', 'Technology', 'Testimonials', 'Services'].map((item, index) => (
              <motion.div key={item} variants={fadeInUp}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-sm font-medium hover:text-orange-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={fadeInUp}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Get Quote
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 pt-16 overflow-hidden"
      >
        <Hero />  
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-20 lg:py-24 bg-slate-800/50">
      <Products />
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent"
          style={{ x: yParallaxSlow }}
        />
        <WhyChooseKazoalo />
      </section>

      {/* Clients & Partners */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-800/30">
       <Partners />
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Customer Testimonials</h2>
            <p className="text-slate-400 text-base sm:text-lg">What our clients say about us</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                name: "John Smith",
                role: "Property Manager",
                content: "Kazoalo Technologies provided excellent solutions for my key replacement. The programmable keys were exactly what I needed. Professional service and quick delivery.",
                rating: 5,
                avatar: "JS"
              },
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                content: "Outstanding key cutting service with Kazoalo's commercial lock keys and I feel much safer. The installation was quick and the staff was very professional.",
                rating: 5,
                avatar: "SJ"
              },
              {
                name: "Mike Davis",
                role: "Facility Manager",
                content: "The programmable solutions from Kazoalo are incredibly convenient. I can easily manage access for my property and the customer service was excellent throughout.",
                rating: 5,
                avatar: "MD"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800 border-slate-700 h-full relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white font-bold text-sm sm:text-base">{testimonial.avatar}</span>
                      </motion.div>
                      <div>
                        <CardTitle className="text-white text-base sm:text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm sm:text-base">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <motion.div 
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, staggerChildren: 0.1 }}
                    >
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Case Studies */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-800/30">
        <CaseStudies />
      </section>

      {/* Customer Feedback Survey */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-slate-800 border-slate-700 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(16,185,129,0.05) 0%, transparent 50%)',
                    'linear-gradient(225deg, rgba(16,185,129,0.05) 0%, transparent 50%)',
                    'linear-gradient(45deg, rgba(16,185,129,0.05) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <CardHeader className="text-center relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <CardTitle className="text-xl sm:text-2xl text-white mb-2">Customer Feedback Survey</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Help us improve our services</CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-sm font-medium text-white mb-2 block">Name</label>
                  <Input className="bg-slate-700 border-slate-600 text-white focus:border-orange-500 transition-colors" placeholder="Your name" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-sm font-medium text-white mb-2 block">Email</label>
                  <Input type="email" className="bg-slate-700 border-slate-600 text-white focus:border-orange-500 transition-colors" placeholder="your@email.com" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-sm font-medium text-white mb-2 block">Product Category</label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-orange-500">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronic-keys">Electronic Keys</SelectItem>
                      <SelectItem value="padlocks">Padlocks</SelectItem>
                      <SelectItem value="programmable">Programmable Solutions</SelectItem>
                      <SelectItem value="accessories">Key Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-sm font-medium text-white mb-2 block">Feedback</label>
                  <Textarea className="bg-slate-700 border-slate-600 text-white focus:border-orange-500 transition-colors" placeholder="Your feedback..." rows={4} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                    Send Feedback
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media Updates */}
      {/* <section className="py-16 sm:py-20 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Social Media Updates</h2>
            <p className="text-slate-400 text-base sm:text-lg">Stay connected with our latest news</p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                platform: "New Product Launch",
                content: "Introducing our latest programmable lock series with enhanced security features.",
                time: "2 hours ago",
                icon: "🚀"
              },
              {
                platform: "Client Success",
                content: "Successfully completed a major security upgrade for downtown corporate center.",
                time: "1 day ago",
                icon: "🎉"
              },
              {
                platform: "Customer Spotlight",
                content: "Thank you to all our customers for their continued trust in Kazoalo Technologies.",
                time: "3 days ago",
                icon: "⭐"
              }
            ].map((update, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-emerald-500 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-xl sm:text-2xl">{update.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-base sm:text-lg mb-2">{update.platform}</h4>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">{update.content}</p>
                        <p className="text-slate-500 text-xs sm:text-sm">{update.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-base sm:text-lg">Common questions about our services</p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What types of keys and locks does Kazoalo Technologies offer?",
                  answer: "We offer a comprehensive range including electronic keys, traditional padlocks, programmable lock systems, car keys, door locks, and various key accessories. Our solutions cover both residential and commercial applications."
                },
                {
                  question: "How do I program my Kazoalo lock system?",
                  answer: "Our programmable systems come with detailed instructions and can be programmed using our mobile app or web interface. We also provide professional installation and programming services for complex systems."
                },
                {
                  question: "What is the warranty on Kazoalo products?",
                  answer: "All Kazoalo products come with a comprehensive warranty ranging from 1-5 years depending on the product type. We also offer extended warranty options and maintenance services."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-slate-800 border-slate-700 rounded-lg px-6 hover:border-orange-500 transition-colors duration-300">
                    <AccordionTrigger className="text-white hover:text-orange-400 text-left text-sm sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                background: [
                  'linear-gradient(45deg, #fb8512, #ff8c42)',
                  'linear-gradient(45deg, #ff8c42, #ff6b35)',
                  'linear-gradient(45deg, #ff6b35, #fb8512)',
                  'linear-gradient(45deg, #fb8512, #ff8c42)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block p-1 rounded-full mb-6"
            >
              <div className="bg-slate-900 rounded-full px-6 py-2">
                <span className="text-orange-400 font-semibold text-sm sm:text-base">Stay Updated</span>
              </div>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Never Miss an Update</h2>
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 leading-relaxed">
              Subscribe to our newsletter for the latest security tips, product updates, and exclusive offers
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="flex-1"
                whileFocus={{ scale: 1.02 }}
              >
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-slate-700 border-slate-600 text-white focus:border-orange-500 transition-all duration-300 h-12"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-orange-500 hover:bg-orange-600 h-12 px-8 transition-all duration-300">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Contact Us</h2>
            <p className="text-slate-400 text-base sm:text-lg">Get in touch for your security needs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800 border-slate-700 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"
                  animate={{ 
                    background: [
                      'linear-gradient(45deg, rgba(16,185,129,0.05) 0%, transparent 50%)',
                      'linear-gradient(225deg, rgba(16,185,129,0.05) 0%, transparent 50%)',
                      'linear-gradient(45deg, rgba(16,185,129,0.05) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white text-xl sm:text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {[
                    { label: "Name", type: "text", placeholder: "Your name" },
                    { label: "Email", type: "email", placeholder: "your@email.com" },
                    { label: "Message", type: "textarea", placeholder: "Your message..." }
                  ].map((field, index) => (
                    <motion.div
                      key={field.label}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <label className="text-sm font-medium text-white mb-2 block">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <Textarea 
                          className="bg-slate-700 border-slate-600 text-white focus:border-orange-500 transition-colors" 
                          placeholder={field.placeholder} 
                          rows={4} 
                        />
                      ) : (
                        <Input 
                          type={field.type} 
                          className="bg-slate-700 border-slate-600 text-white focus:border-orange-500 transition-colors" 
                          placeholder={field.placeholder} 
                        />
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 h-12">
                      Send Message
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                { icon: Phone, title: "Phone", info: "08146120795" },
                { icon: Mail, title: "Email", info: "info@kazoalotech.com" },
                { icon: MapPin, title: "Address", info: "123 Security Street, Tech City, TC 12345" }
              ].map((contact, index) => (
                <motion.div 
                  key={contact.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <contact.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg">{contact.title}</h4>
                    <p className="text-slate-400 text-sm sm:text-base">{contact.info}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-8">
                <motion.h4 
                  className="font-semibold text-white mb-6 text-base sm:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Follow Us
                </motion.h4>
                <motion.div 
                  className="flex space-x-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[Facebook, Instagram].map((Icon, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link 
                        href="#" 
                        className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                      >
                        <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <div>
      <Footer/>
     </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center z-40 shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </motion.button>
    </div>
  )
}
