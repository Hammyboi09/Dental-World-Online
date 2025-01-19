import React from 'react';
import { motion } from 'framer-motion';

interface CommandButtonProps {
  command: string;
  description: string;
  onClick: () => void;
}

export function CommandButton({ command, description, onClick }: CommandButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full px-8 py-4 rounded-[32px] border-2 border-[#FFA833] 
                 text-white bg-transparent hover:bg-[#FFA833]/10
                 transition-all duration-300 group
                 shadow-[0_0_15px_rgba(255,168,51,0.3)]
                 hover:shadow-[0_0_20px_rgba(255,168,51,0.5)]
                 relative overflow-hidden"
    >
      {/* Shimmer effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                   opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full
                   transition-all duration-700 ease-out"
      />
      
      <div className="flex flex-col space-y-2">
        <span className="text-[#FFA833] font-medium text-lg group-hover:text-[#FFC76D] transition-colors">
          {command}
        </span>
        {description && (
          <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
            {description}
          </span>
        )}
      </div>
    </motion.button>
  );
}
