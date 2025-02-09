import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { partners } from './partnersData';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  problem: string;
  solution: string;
  website: string;
}

interface PartnerModalProps {
  partner: Partner | null;
  isOpen: boolean;
  onClose: () => void;
}

function PartnerModal({ partner, isOpen, onClose }: PartnerModalProps) {
  if (!partner) return null;

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
            className="relative w-full max-w-2xl bg-black/50 backdrop-blur-md rounded-2xl 
                     overflow-hidden mx-auto z-50 shadow-xl border border-white/50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 
                       transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="p-8">
              {/* Logo and Name */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-black/20 p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  {partner.name}
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-6 text-white/90">
                <p className="leading-relaxed">{partner.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    The Challenge
                  </h4>
                  <p className="leading-relaxed">{partner.problem}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Our Solution
                  </h4>
                  <p className="leading-relaxed">{partner.solution}</p>
                </div>
              </div>

              {/* Website Button */}
              <motion.a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-3 px-6 rounded-xl inline-flex items-center justify-center
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
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 relative"> {/* Reduced top padding */}
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

        {/* Desktop View - First Row - 3 Partners */}
        <div className="hidden md:flex justify-center gap-16 mb-16">
          {partners.slice(0, 3).map((partner) => (
            <motion.button
              key={partner.id}
              onClick={() => {
                setSelectedPartner(partner);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-64 h-64 rounded-full bg-white p-8
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
            </motion.button>
          ))}
        </div>

        {/* Desktop View - Second Row - 4 Partners */}
        <div className="hidden md:flex justify-center gap-16">
          {partners.slice(3, 7).map((partner) => (
            <motion.button
              key={partner.id}
              onClick={() => {
                setSelectedPartner(partner);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-64 h-64 rounded-full bg-white p-8
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
            </motion.button>
          ))}
        </div>

        {/* Mobile View - Single Partner with Navigation */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-center">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full
                       border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </motion.button>

            {/* Partner Circle */}
            <motion.button
              key={partners[currentIndex].id}
              onClick={() => {
                setSelectedPartner(partners[currentIndex]);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-72 h-72 rounded-full bg-white p-6
                       backdrop-blur-md border border-white
                       shadow-xl
                       relative overflow-hidden
                       group mx-16"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-white to-white opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src={partners[currentIndex].logo}
                alt={partners[currentIndex].name}
                className="w-full h-full object-contain relative z-10"
              />
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full
                       border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Partner Modal */}
      <PartnerModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}