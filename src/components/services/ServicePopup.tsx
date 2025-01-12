import React from 'react';
import { X } from 'lucide-react';
import type { Treatment } from './types';
import { ServiceIcon } from './ServiceIcon';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: Treatment;
}

export function ServicePopup({ isOpen, onClose, service }: ServicePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Animated layered backgrounds with sky blue and orange gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-orange-400/20 animate-scale-up" />
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-orange-400/10 animate-scale-up delay-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-orange-400/5 animate-scale-up delay-200" />
      
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 
                    animate-fade-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 
                   transition-colors text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-sky-100 to-orange-50 rounded-lg">
            <ServiceIcon type={service.iconType} className="h-6 w-6 text-sky-900" />
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-600 to-orange-500 
                       bg-clip-text text-transparent">
            {service.name}
          </h3>
        </div>

        <p className="mt-4 text-gray-600">{service.description}</p>

        <div className="mt-6 space-y-3">
          {service.treatments.map((treatment) => (
            <div key={treatment} 
                 className="flex items-center space-x-3 p-3 rounded-lg 
                          bg-gradient-to-r from-sky-50 to-orange-50
                          hover:from-sky-100 hover:to-orange-100
                          transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400" />
              <span className="text-gray-700">{treatment}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-sky-500 to-orange-500 
                   text-white font-medium hover:from-sky-600 hover:to-orange-600 
                   transition-all duration-300 transform hover:scale-[1.02]"
        >
          Close
        </button>
      </div>
    </div>
  );
}