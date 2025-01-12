import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClinicCardProps {
  clinic: {
    id: number;
    name: string;
    address: string;
    phone: string;
    hours: string;
    mapUrl: string;
    mapEmbed: string;
  };
}

export function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {clinic.name}
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#FF6F3C] mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Address
                </h3>
                <p className="text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {clinic.address}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#FF6F3C] mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Phone
                </h3>
                <p className="text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {clinic.phone}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#FF6F3C] mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Working Hours
                </h3>
                <p className="text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {clinic.hours}
                </p>
              </div>
            </div>
          </div>
          
          <motion.a
            href={clinic.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg
                     bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                     text-white font-medium
                     transform transition-all duration-300
                     hover:shadow-lg hover:shadow-[#FF6F3C]/20
                     relative overflow-hidden
                     group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                         opacity-0 group-hover:opacity-100 
                         -translate-x-full group-hover:translate-x-full 
                         transition-all duration-700 ease-out" />
            
            {/* Button text */}
            <span className="relative z-10">Get Directions</span>
          </motion.a>
        </div>
        
        <div className="h-full min-h-[400px] lg:min-h-0 p-4">
          <div 
            className="w-full h-full rounded-lg overflow-hidden"
            dangerouslySetInnerHTML={{ __html: clinic.mapEmbed }}
          />
        </div>
      </div>
    </div>
  );
}