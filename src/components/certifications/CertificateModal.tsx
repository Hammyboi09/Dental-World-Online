import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificateModalProps {
  certificate: any;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl bg-black/40 backdrop-blur-md rounded-2xl 
                     shadow-2xl overflow-hidden mx-auto z-50 border border-white/20"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 p-3 rounded-full 
                       bg-black/20 hover:bg-black/30
                       backdrop-blur-md border border-white/10
                       transition-all duration-300 z-10
                       group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white transition-transform duration-300
                          group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
            </motion.button>

            <div className="flex flex-col md:flex-row">
              {/* Image Container - Now using aspect-auto */}
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="relative">
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-contain max-h-[80vh]"
                    style={{ maxWidth: '100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow bg-black/40 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {certificate.name}
                </h3>
                <div className="prose">
                  <p className="text-white/90 whitespace-pre-line drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {certificate.about}
                  </p>
                </div>

                {/* Close Button for Mobile */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-3 rounded-lg md:hidden
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
