import React from 'react';
import { motion } from 'framer-motion';
import {
  Syringe,
  Stethoscope,
  Heart,
  Microscope,
  Shield,
  Baby,
  Sparkles,
} from 'lucide-react';
import { serviceIcons } from './ServiceIcons';

interface SlideIconProps {
  title: string;
  isActive: boolean;
  isPast: boolean;
  index: number;
  onClick: (index: number) => void;
}

export function SlideIcon({
  title,
  isActive,
  isPast,
  index,
  onClick,
}: SlideIconProps) {
  // First check if we have a custom SVG icon for this service
  const CustomIcon = serviceIcons[title as keyof typeof serviceIcons];
  
  // If no custom icon, use the default Lucide icons
  const DefaultIcon = (() => {
    switch (title) {
      case 'Microscopic Dentistry':
        return Microscope;
      case 'Pediatric Dentistry':
        return Baby;
      case 'Cosmetic Dentistry':
        return Sparkles;
      default:
        return Shield; // Default fallback icon
    }
  })();

  return (
    <motion.button
      onClick={() => onClick(index)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: isActive ? 1.2 : 0.8,
        opacity: isActive ? 1 : 0.5,
      }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`
        relative p-2 rounded-full
        ${
          isActive
            ? 'bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D] shadow-lg shadow-[#FF6F3C]/20'
            : 'bg-white/5 hover:bg-white/10'
        }
        transition-all duration-300 group
        cursor-pointer
      `}
      aria-label={`Go to ${title} slide`}
    >
      {CustomIcon ? (
        <CustomIcon />
      ) : (
        <DefaultIcon
          className={`
            w-4 h-4 transition-all duration-300
            ${
              isActive
                ? 'text-white filter brightness-150'
                : 'text-white/50 group-hover:text-white/80'
            }
          `}
        />
      )}

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
          {title}
        </div>
      </div>
    </motion.button>
  );
}