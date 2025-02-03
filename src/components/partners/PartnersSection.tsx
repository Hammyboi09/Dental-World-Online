/*import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
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
          {/* Backdrop }
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal }
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl 
                     overflow-hidden mx-auto z-50 border border-white/20"
          >
            {/* Close Button }
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 
                       transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="p-8">
              {/* Logo and Name }
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10 p-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">{partner.name}</h3>
              </div>

              {/* Description }
              <div className="space-y-6 text-white/90">
                <p className="leading-relaxed">{partner.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">The Problem</h4>
                  <p className="leading-relaxed">{partner.problem}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                  <p className="leading-relaxed">{partner.solution}</p>
                </div>
              </div>

              {/* Website Button }
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
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                             opacity-0 group-hover:opacity-100 
                             -translate-x-full group-hover:translate-x-full 
                             transition-all duration-700 ease-out" />
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

  return (
    <section className="py-20 bg-white relative">
      {/* Optional Background Image Container - Hidden by default }
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-0 transition-opacity duration-300"
           style={{ backgroundImage: 'none' }} // Set background image URL here when needed
      />

      {/* Section Title }
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Partners</h2>
        <p className="text-xl text-gray-700">
          Working together to provide exceptional dental care solutions
        </p>
      </div>

      {/* Partners Grid }
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - 3 Partners }
        <div className="flex justify-center gap-12 mb-12">
          {partners.slice(0, 3).map((partner) => (
            <motion.button
              key={partner.id}
              onClick={() => {
                setSelectedPartner(partner);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-md p-6
                       border border-gray-200 shadow-lg
                       hover:shadow-xl hover:border-gray-300
                       transition-all duration-300
                       relative overflow-hidden
                       group"
            >
              {/* Glass Effect Overlay }
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Logo }
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-full object-contain relative z-10"
              />
            </motion.button>
          ))}
        </div>

        {/* Second Row - 4 Partners }
        <div className="flex justify-center gap-12">
          {partners.slice(3).map((partner) => (
            <motion.button
              key={partner.id}
              onClick={() => {
                setSelectedPartner(partner);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-md p-6
                       border border-gray-200 shadow-lg
                       hover:shadow-xl hover:border-gray-300
                       transition-all duration-300
                       relative overflow-hidden
                       group"
            >
              {/* Glass Effect Overlay }
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Logo }
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-full object-contain relative z-10"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Partner Modal }
      <PartnerModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
  */
 