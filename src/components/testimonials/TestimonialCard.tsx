import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick: () => void;
}

export function TestimonialCard({ testimonial, onClick }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg w-[350px] h-[450px] 
          cursor-pointer border border-white/20 hover:border-white/30
          hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300
          relative mx-4 my-4" // Added mx-2 my-2 for spacing
      onClick={onClick}
    >
      <div className="h-64 relative overflow-hidden">
        <img 
          src={testimonial.media} 
          alt={testimonial.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      
      <div className="p-8 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-md 
                    flex flex-col h-[calc(480px-288px)]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {testimonial.name}
            </h3>
            <p className="text-sky-400 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {testimonial.location}
            </p>
          </div>
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 
                                   drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
            ))}
          </div>
        </div>
        
        <p className="text-white/90 text-base leading-relaxed line-clamp-4 flex-grow
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {testimonial.testimonial}
        </p>
        
        <p className="text-white/60 text-sm mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {testimonial.date}
        </p>
      </div>
    </motion.div>
  );
}