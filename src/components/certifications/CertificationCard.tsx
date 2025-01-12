import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  certificate: {
    name: string;
    image: string;
    about: string;
  };
  onClick: () => void;
}

export function CertificationCard({ certificate, onClick }: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg cursor-pointer
                border border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={certificate.image} 
          alt={certificate.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="p-2 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg">
            <Award className="w-6 h-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{certificate.name}</h3>
        <p className="text-gray-700 text-sm line-clamp-3">{certificate.about}</p>
      </div>
    </motion.div>
  );
}