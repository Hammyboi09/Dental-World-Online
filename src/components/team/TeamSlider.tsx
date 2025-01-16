import React, { useState } from 'react';
import { TeamCard } from './TeamCard';
import { teamMembers } from './teamData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamSliderProps {
  onMemberClick: (member: typeof teamMembers[0]) => void;
}

export function TeamSlider({ onMemberClick }: TeamSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 3 ? 0 : prev + 1));
  };

  return (
    // Changed from px-20 to px-4 to make slider wider
    <div className="relative px-4">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10
                 p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
        aria-label="Previous team member"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10
                 p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
        aria-label="Next team member"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform" />
      </button>

      {/* Cards Container */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ 
            x: `${-currentIndex * (350 + 32)}px` // 350px is card width, 32px is gap (gap-8)
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.32, 0.72, 0, 1] // Custom easing for smoother animation
          }}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="flex-none">
              <TeamCard member={member} onClick={() => onMemberClick(member)} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
