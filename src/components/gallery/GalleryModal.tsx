import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { GalleryImage } from './types';

interface GalleryModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryModal({ image, isOpen, onClose }: GalleryModalProps) {
  if (!image) return null;

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
            className="relative w-full max-w-5xl bg-black/40 backdrop-blur-md rounded-2xl 
                     overflow-hidden mx-auto z-50 border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 
                       transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative h-[80vh]">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {image.title}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}