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
      className="w-full px-6 py-3 rounded-full border-2 border-[#FFA833] 
                 text-white bg-transparent hover:bg-[#FFA833]/10
                 transition-all duration-300 group
                 shadow-[0_0_15px_rgba(255,168,51,0.3)]
                 hover:shadow-[0_0_20px_rgba(255,168,51,0.5)]"
    >
      <div className="flex flex-col space-y-1">
        <span className="text-[#FFA833] font-medium group-hover:text-[#FFC76D] transition-colors">
          {command}
        </span>
        <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
          {description}
        </span>
      </div>
    </motion.button>
  );
}