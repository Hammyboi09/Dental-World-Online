import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonial | null;
}

export function TestimonialModal({ isOpen, onClose, testimonial }: TestimonialModalProps) {
  if (!testimonial) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-[32px] shadow-2xl 
                     overflow-hidden mx-auto z-50 border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 
                       transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
              {/* Media Section */}
              <div className="h-64 md:h-full relative">
                {testimonial.type === 'video' ? (
                  <video
                    src={testimonial.media}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                  />
                ) : (
                  <img
                    src={testimonial.media}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 bg-black/40 backdrop-blur-md">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
                  <p className="text-sky-400 text-lg mb-4">{testimonial.location}</p>
                  <div className="flex space-x-1.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 
                                           drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-white/90 leading-relaxed text-lg 
                             drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {testimonial.testimonial}
                  </p>
                  <p className="text-white/60 text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}