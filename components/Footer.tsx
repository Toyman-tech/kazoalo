import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  // Animation variants (moved here since they're no longer exported from page)
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 sm:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Lock className="h-8 w-8 text-orange-500" />
            </motion.div>
            <span className="text-lg sm:text-xl font-bold">Kazoalo Technologies</span>
          </div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Your trusted partner for all security solutions. Professional key and lock services since 1996.
          </p>
        </motion.div>
        
        {[
          {
            title: "Products",
            links: ["Electronic Keys", "Padlocks", "Locksmith Tools", "Key Accessories"]
          },
          {
            title: "Services", 
            links: ["Installation", "Consultancy", "Programming", "Maintenance", "Emergency Service"]
          },
          {
            title: "Company",
            links: ["About Us", "Contact", "Privacy Policy", "Terms of Service"]
          }
        ].map((section, index) => (
          <motion.div key={section.title} variants={fadeInUp}>
            <h4 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">{section.title}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {section.links.map((link, linkIndex) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: linkIndex * 0.1 }}
                >
                  <Link 
                    href="#" 
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base block"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="border-t border-slate-800 mt-12 pt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-slate-400 text-sm sm:text-base">
          &copy; 2025 Kazoalo Technologies. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
  )
}

export default Footer
