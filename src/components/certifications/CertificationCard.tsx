import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  certificate: {
    name: string;
    cardImage: string;
    about: string;
  };
  onClick: () => void;
}

export function CertificationCard({ certificate, onClick }: CertificationCardProps) {
  return (
    <div
      className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg cursor-pointer
                border border-white/20 hover:border-white/30 hover:bg-white/10 transition-all duration-300 h-full"
      onClick={onClick}
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={certificate.cardImage} 
          alt={certificate.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="p-2 bg-black/20 backdrop-blur-sm rounded-lg">
            <Award className="w-6 h-6 text-[#FF6F3C]" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{certificate.name}</h3>
        <p className="text-gray-700 text-sm line-clamp-3">{certificate.about}</p>
      </div>
    </div>
  );
}