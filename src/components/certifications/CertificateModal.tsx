import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificateModalProps {
  certificate: {
    name: string;
    modalImage: string;
    about: string;
  } | null;
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
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 
                       transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Container - Larger size for desktop */}
              <div className="relative lg:w-3/5 flex-shrink-0">
                <div className="relative pb-[100%] lg:pb-0 lg:h-[85vh]">
                  <img 
                    src={certificate.modalImage} 
                    alt={certificate.name}
                    className="absolute inset-0 w-full h-full object-contain bg-black/60"
                    onLoad={(e) => {
                      // Adjust container based on image aspect ratio
                      const img = e.target as HTMLImageElement;
                      const aspectRatio = img.naturalWidth / img.naturalHeight;
                      const container = img.parentElement;
                      if (container) {
                        if (aspectRatio > 1) {
                          container.style.maxHeight = '85vh';
                        } else {
                          container.style.maxHeight = '85vh';
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Content Container - Scrollable */}
              <div className="lg:w-2/5 p-8 max-h-[50vh] lg:max-h-[85vh] overflow-y-auto custom-scrollbar">
                <h3 className="text-2xl font-bold text-white mb-6">{certificate.name}</h3>
                <div className="prose prose-invert">
                  <p className="text-white/90 whitespace-pre-line leading-relaxed">
                    {certificate.about}
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