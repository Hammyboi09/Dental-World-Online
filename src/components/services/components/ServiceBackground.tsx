import React from 'react';

interface ServiceBackgroundProps {
  isActive: boolean;
}

export function ServiceBackground({ isActive }: ServiceBackgroundProps) {
  return (
    <div 
      className={`
        absolute inset-0 transition-transform duration-[3.5s] ease-in-out delay-[770ms]
        ${isActive ? 'translate-x-[10px] scale-105' : ''}
      `}
    >
      {/* First Background Layer */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-sky-100 to-orange-50 bg-cover bg-center"
      />
      
      {/* Second Background Layer */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-sky-200 to-orange-100 bg-cover bg-center
          transition-opacity duration-0 delay-[1300ms]
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
}