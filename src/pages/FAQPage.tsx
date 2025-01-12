import React from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { FAQSection } from '../components/faq/FAQSection';
import { FAQBackground } from '../components/faq/FAQBackground';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Wrench } from 'lucide-react';

export function FAQPage() {
  const navigate = useNavigate();

  const navigationButtons = [
    {
      icon: Phone,
      label: 'Contact Us',
      path: '/contact',
      description: 'Get in touch with our team'
    },
    {
      icon: MessageSquare,
      label: 'Testimonials',
      path: '/testimonials',
      description: 'Read what our patients say'
    },
    {
      icon: Wrench,
      label: 'Services',
      path: '/services',
      description: 'Explore our dental services'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow">
        <FAQBackground />
        <NavBar />
        
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading Section */}
            <div className="text-center mb-16 relative z-10">
              <h1 className="text-6xl font-bold mb-6 leading-tight
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Frequently Asked Questions
              </h1>
              <p className="text-2xl font-medium
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Find Answers to Common Questions About Our Dental Services
              </p>
            </div>

            <FAQSection />

            {/* Navigation Section */}
            <div className="mt-24">
              <h2 className="text-5xl font-bold text-center mb-16
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Explore More About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {navigationButtons.map((button, index) => {
                  const Icon = button.icon;
                  return (
                    <motion.button
                      key={button.path}
                      onClick={() => navigate(button.path)}
                      className="group relative flex flex-col items-center p-8 rounded-2xl
                               bg-white/10 backdrop-blur-md
                               border border-[#FFA833]/20
                               transition-all duration-300
                               hover:bg-gradient-to-br hover:from-[#FF6F3C]/10 hover:to-[#FFC76D]/10
                               hover:border-[#FFA833]/30"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                                    opacity-80 group-hover:opacity-100 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#FF6F3C]
                                   transition-colors duration-300">
                        {button.label}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700 text-center group-hover:text-gray-900
                                  transition-colors duration-300">
                        {button.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}