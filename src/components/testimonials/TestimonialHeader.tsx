import React from 'react';

export function TestimonialHeader() {
  return (
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-6xl font-bold mb-6 leading-tight
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-gray-800 to-gray-600
                   drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
        Patient Stories
      </h2>
      <p className="text-2xl font-medium
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-gray-800 to-gray-600
                   drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
        Read what our patients have to say about their experience
      </p>
    </div>
  );
}