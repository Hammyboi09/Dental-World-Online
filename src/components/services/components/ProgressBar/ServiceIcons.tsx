import React from 'react';

// Import SVG icons as React components
const BasalImplantIcon = () => (
  <img 
    src="/elements/icons/basal-implant.svg" 
    alt="Basal Implant"
    className="w-4 h-4"
  />
);

const RMTIcon = () => (
  <img 
    src="/elements/icons/rmt.svg" 
    alt="Restoring Missing Teeth"
    className="w-4 h-4"
  />
);

const ImplantIcon = () => (
  <img 
    src="/elements/icons/implant.svg" 
    alt="Dental Implant"
    className="w-4 h-4"
  />
);

const RCTIcon = () => (
  <img 
    src="/elements/icons/rct.svg" 
    alt="Root Canal"
    className="w-4 h-4"
  />
);

export const serviceIcons = {
  'Basal Implants': BasalImplantIcon,
  'Restoring Missing Teeth': RMTIcon,
  'Dental Implants': ImplantIcon,
  'Root Canal Treatment': RCTIcon
} as const;