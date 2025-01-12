import React from 'react';

interface ServiceTransitionProps {
  isActive: boolean;
}

export function ServiceTransition({ isActive }: ServiceTransitionProps) {
  return (
    <div 
      className={`
        absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-500/10
        transform transition-all duration-[3000ms] cubic-bezier(0.6, 0.13, 0.31, 1.02)
        ${isActive ? 'translate-y-[-1410px]' : 'translate-y-0'}
      `}
    />
  );
}