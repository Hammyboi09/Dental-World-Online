import React from 'react';
import './styles/gradient.css';

export function TestimonialBackground() {
  return (
    <div className="absolute inset-0 bg-no-repeat bg-cover"
         style={{
           background: `radial-gradient(circle at top left,
                         #a6c8f0 0%,
                         #fefefe 40%,
                         #fefefe 60%,
                         #ffc4b3 100%),
                       #fefefe`
         }}
    />
  );
}