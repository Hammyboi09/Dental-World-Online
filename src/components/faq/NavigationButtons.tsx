import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Wrench } from 'lucide-react';

export function NavigationButtons() {
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
    <div className="mt-24">
      <h2 className="text-2xl font-bold text-white text-center mb-12">
        Need More Information?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {navigationButtons.map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={button.path}
              onClick={() => navigate(button.path)}
              className="group relative flex flex-col items-center p-8 rounded-2xl
                       bg-gray-800/50 backdrop-blur-sm
                       border border-gray-700/50
                       transition-all duration-300
                       hover:bg-gray-800/70 hover:border-sky-500/50
                       hover:shadow-lg hover:shadow-sky-500/10"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-sky-500/20 to-orange-500/20 
                            group-hover:from-sky-500/30 group-hover:to-orange-500/30
                            transition-colors duration-300">
                <Icon className="w-8 h-8 text-sky-400 group-hover:text-sky-300 
                               transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-sky-400
                           transition-colors duration-300">
                {button.label}
              </h3>
              <p className="mt-2 text-sm text-gray-400 text-center group-hover:text-gray-300
                          transition-colors duration-300">
                {button.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-orange-500/0
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}