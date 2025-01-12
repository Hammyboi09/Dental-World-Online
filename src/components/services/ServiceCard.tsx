import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from './types';

interface ServiceCardProps {
  service: Service;
  onLearnMore: () => void;
}

export function ServiceCard({ service, onLearnMore }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg h-[420px] flex flex-col
                border border-white/20 hover:border-white/30 transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="p-2 bg-black/20 backdrop-blur-sm rounded-lg">
            <Icon className="w-6 h-6 text-[#FF6F3C]" />
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
        <p className="text-white/90 flex-grow">{service.description}</p>
        
        <motion.button
          onClick={onLearnMore}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full py-3 rounded-lg
                   bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                   text-white font-medium
                   transform transition-all duration-300
                   hover:shadow-lg hover:shadow-[#FF6F3C]/20
                   relative overflow-hidden
                   group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                       opacity-0 group-hover:opacity-100 
                       -translate-x-full group-hover:translate-x-full 
                       transition-all duration-700 ease-out" />
          <span className="relative z-10">Learn More</span>
        </motion.button>
      </div>
    </motion.div>
  );
}