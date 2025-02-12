import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { partners } from './partnersData';

interface PartnerModalProps {
  partner: (typeof partners)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function PartnerModal({ isOpen, onClose, partner }: PartnerModalProps) {
  if (!partner) return null;

  return (
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
        className="relative w-full max-w-2xl bg-black/50 backdrop-blur-md rounded-2xl 
                 overflow-hidden mx-auto z-50 shadow-xl border border-white/50"
      >
        <div className="p-8">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 p-2 rounded-full 
                     bg-black/20 hover:bg-black/30
                     backdrop-blur-md border border-white/10
                     transition-all duration-300 z-10
                     group"
            aria-label="Close modal"
          >
            <X
              className="w-5 h-5 text-white transition-transform duration-300
                        group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
          </motion.button>

          {/* Logo and Name */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-black/20 p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-white">{partner.name}</h3>
          </div>

          {/* Description */}
          <div className="space-y-6 text-white/90">
            <p className="leading-relaxed">{partner.description}</p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                
              </h4>
              <p className="leading-relaxed">{partner.problem}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                
              </h4>
              <p className="leading-relaxed">{partner.solution}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            {/* Website Button */}
            <motion.a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 px-6 rounded-xl inline-flex items-center justify-center
                     bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                     text-white font-medium
                     transform transition-all duration-300
                     hover:shadow-lg hover:shadow-[#FF6F3C]/20
                     relative overflow-hidden
                     group"
            >
              <span className="mr-2">Visit Website</span>
              <ExternalLink className="w-5 h-5" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                         opacity-0 group-hover:opacity-100 
                         -translate-x-full group-hover:translate-x-full 
                         transition-all duration-700 ease-out"
              />
            </motion.a>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 px-6 rounded-xl inline-flex items-center justify-center
                     bg-black/30 backdrop-blur-sm
                     text-white font-medium border border-white/10
                     transform transition-all duration-300
                     hover:bg-black/40
                     relative overflow-hidden"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<
    (typeof partners)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Create a duplicated array for infinite scroll effect
  // Add extra copies to ensure smooth looping
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate total width of original partners
    const slideWidth = slider.scrollWidth / 3; // Divide by 3 since we tripled the array

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + 0.7; // Reduced speed for smoother animation

        // Reset position when reaching the end of first set
        if (newPosition >= slideWidth) {
          return 0;
        }
        return newPosition;
      });
    };

    // Start automatic scrolling
    const interval = setInterval(scroll, 16); // Using requestAnimationFrame timing

    // Pause on hover
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => setInterval(scroll, 16);

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener('mouseenter', handleMouseEnter);
        slider.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-12 relative">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-6xl font-bold mb-6 leading-tight
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-gray-800 to-gray-600
                       drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
          >
            Our Partners
          </h2>
          <p
            className="text-2xl font-medium
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-gray-800 to-gray-600
                       drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
          >
            Working together with leading healthcare providers and technology
            partners to deliver exceptional dental care solutions
          </p>
        </div>

        {/* Partner Slider */}
        <div className="relative overflow-hidden">
          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${duplicatedPartners.length * 100}%`,
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.button
                key={`${partner.id}-${index}`}
                onClick={() => {
                  setSelectedPartner(partner);
                  setIsModalOpen(true);
                }}
                className="flex-none w-48 mx-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="w-48 h-48 mx-auto rounded-full bg-white p-8
                             backdrop-blur-md border border-white
                             hover:shadow-xl hover:border-white
                             transition-all duration-300
                             relative overflow-hidden
                             group"
                >
                  {/* Glass Effect Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white to-white opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Logo */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <PartnerModal
            partner={selectedPartner}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}