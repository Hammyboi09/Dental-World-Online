import React from 'react';
import { Logo } from '../ui/Logo';

export function FooterLogo() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-3"> {/* Reduced from space-x-2 to bring items closer */}
        <Logo className="h-8 w-8 text-white" />
        <span className="text-2xl font-bold text-white">Dental World</span>
      </div>
      <p className="text-gray-400 text-base leading-relaxed max-w-sm"> {/* Added max-width and adjusted text */}
        Providing exceptional dental care with advanced technology and a gentle touch.
      </p>
    </div>
  );
}