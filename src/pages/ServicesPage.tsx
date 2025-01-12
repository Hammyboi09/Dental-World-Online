import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceModal } from '../components/services/ServiceModal';
import { services } from '../components/services/servicesData';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, MessageSquare } from 'lucide-react';
import '../styles/services-gradient.css';

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interBubble = document.querySelector('.interactive') as HTMLElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    function handleMouseMove(event: MouseEvent) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const navigationButtons = [
    {
      icon: Home,
      label: 'Home',
      path: '/',
      description: 'Return to homepage'
    },
    {
      icon: Phone,
      label: 'Contact Us',
      path: '/contact',
      description: 'Get in touch with us'
    },
    {
      icon: MessageSquare,
      label: 'Testimonials',
      path: '/testimonials',
      description: 'Read what our patients say'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow">
        {/* Background */}
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>

        <NavBar />
        
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading Section */}
            <div className="text-center mb-16 relative z-10">
              <h1 className="text-6xl font-bold mb-6 leading-tight
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Our Services
              </h1>
              <p className="text-2xl font-medium
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Comprehensive Dental Care Solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onLearnMore={() => handleLearnMore(service)}
                />
              ))}
            </div>

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

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}