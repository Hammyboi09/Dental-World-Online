import React from 'react';
import { motion } from 'framer-motion';
import type { Testimonial } from './types';

interface TestimonialCircleProps {
  testimonial: Testimonial;
  onClick: () => void;
}

export function TestimonialCircle({ testimonial, onClick }: TestimonialCircleProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-48 h-48 rounded-full overflow-hidden group cursor-pointer shadow-lg"
      >
        {testimonial.type === 'video' ? (
          <video
            src={testimonial.media}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={testimonial.media}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>

      {/* Name */}
      <button 
        onClick={onClick}
        className="text-center group"
      >
        <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
          {testimonial.name}
        </h3>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </button>
    </div>
  );
}