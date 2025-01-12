import React from 'react';
import { motion } from 'framer-motion';

interface FluidProgressProps {
  progress: number;
  segmentWidth: number;
}

export function FluidProgress({ progress, segmentWidth }: FluidProgressProps) {
  return (
    <motion.div
      className="absolute h-full"
      style={{
        background: `linear-gradient(
          90deg,
          rgba(255,111,60,0.9) 0%,    /* #FF6F3C */
          rgba(255,168,51,0.9) 33%,    /* #FFA833 */
          rgba(255,199,109,0.9) 66%,   /* #FFC76D */
          rgba(255,111,60,0.9) 100%    /* #FF6F3C */
        )`,
        backgroundSize: '400% 100%',
        animation: 'shimmer 4s linear infinite',
        borderRadius: 'inherit',
        width: `${progress}%`
      }}
      initial={{ width: `${progress - segmentWidth}%` }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      {/* Glow effect */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-8"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,111,60,0.3), transparent)',
          animation: 'pulse 2s ease-in-out infinite'
        }}
      />
    </motion.div>
  );
}