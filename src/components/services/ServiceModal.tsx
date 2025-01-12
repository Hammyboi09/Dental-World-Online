import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Service } from './types';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null;

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
            className="relative w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl 
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
              {/* Image Section */}
              <div className="h-64 md:h-full relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 bg-white/5 backdrop-blur-md">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-lg mb-4">{service.description}</p>
                </div>

                <div className="space-y-6">
                  <p className="text-white/90 leading-relaxed text-lg">
                    {service.about}
                  </p>
                </div>

                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-3 rounded-lg
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
                  <span className="relative z-10">Close</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}