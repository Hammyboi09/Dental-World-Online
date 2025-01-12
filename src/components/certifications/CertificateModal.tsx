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
            className="relative w-full max-w-3xl bg-black/40 backdrop-blur-md rounded-2xl 
                     shadow-2xl overflow-hidden mx-auto z-50 border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              <div className="h-64 md:h-full">
                <img 
                  src={certificate.image} 
                  alt={certificate.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{certificate.name}</h3>
                <div className="prose">
                  <p className="text-white/90 whitespace-pre-line">{certificate.about}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}