import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

export function NavigationButton({
  direction,
  onClick,
  disabled,
}: NavigationButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        p-2 sm:p-2.5 rounded-full bg-white/20 backdrop-blur-sm
        disabled:opacity-30 disabled:cursor-not-allowed
        transition-colors duration-300
        hover:bg-white/30 shadow-lg
        border border-white/30
      `}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </motion.button>
  );
}