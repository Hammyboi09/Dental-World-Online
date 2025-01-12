import React from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from './types';

interface TeamCardProps {
  member: TeamMember;
  onClick: () => void;
}

export function TeamCard({ member, onClick }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg cursor-pointer
                border border-white/20 hover:bg-white/20 transition-all duration-300
                w-[350px] h-[480px] flex flex-col"
    >
      {/* Image Container - Fixed height */}
      <div className="h-[280px] relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      
      {/* Content Container - Fixed padding and spacing */}
      <div className="flex-grow p-8 bg-white/5 backdrop-blur-sm flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-1">{member.name}</h3>
          <p className="text-lg text-sky-700 mb-3 line-clamp-1">{member.designation}</p>
          <p className="text-gray-700 text-sm line-clamp-2">{member.qualification}</p>
        </div>
        
        {/* Updated View Profile Button */}
        <button
          className="mt-6 w-full py-3 px-6 rounded-xl
                   bg-gradient-to-r from-gray-800 to-gray-600
                   text-white font-medium
                   transform transition-all duration-300
                   hover:shadow-lg hover:shadow-gray-800/20
                   active:scale-95
                   drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
        >
          View Profile
        </button>
      </div>
    </motion.div>
  );
}