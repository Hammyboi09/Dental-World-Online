import React from 'react';
import { Check } from 'lucide-react';
import type { Treatment } from './types';

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg w-[350px] h-[500px] flex-shrink-0 flex flex-col
                  border border-white/20 hover:border-white/30 transition-all duration-300">
      {/* Image Container - Fixed height */}
      <div className="h-48 relative overflow-hidden">
        <img 
          src={treatment.image} 
          alt={treatment.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      
      {/* Content Container - Flex grow to fill remaining space */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Title and Price - Fixed height section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 h-[56px]
                       drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {treatment.name}
          </h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                     bg-clip-text text-transparent
                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {treatment.priceRange}
          </p>
        </div>
        
        {/* Features List - Grows to fill available space */}
        <div className="space-y-3 flex-grow">
          {treatment.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5
                             drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              <span className="text-white/90 leading-tight
                           drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}