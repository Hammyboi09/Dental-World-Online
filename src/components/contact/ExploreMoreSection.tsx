import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, MessageCircle, Stethoscope } from 'lucide-react';

const navigationButtons = [
  {
    icon: MessageCircle,
    label: 'Testimonials',
    path: '/testimonials',
    description: 'Read what our patients say'
  },
  {
    icon: Home,
    label: 'Home',
    path: '/',
    description: 'Return to homepage'
  },
  {
    icon: Stethoscope,
    label: 'Services',
    path: '/services',
    description: 'Explore our services'
  }
];

export function ExploreMoreSection() {
  const navigate = useNavigate();

  return (
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
  );
}