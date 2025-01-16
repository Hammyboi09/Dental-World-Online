import React, { useState } from 'react';
import { TreatmentCard } from './TreatmentCard';
import { treatments } from './treatmentData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

export function TreatmentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? treatments.length - 3 : prev - 1;
      return newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const newIndex = prev === treatments.length - 3 ? 0 : prev + 1;
      return newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative px-24"> {/* Increased padding from px-20 to px-24 */}
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        disabled={isAnimating}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10
                 p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20
                 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous treatment"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform" />
      </button>

      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10
                 p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20
                 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next treatment"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform" />
      </button>

      {/* Cards Container */}
      <div className="overflow-hidden mx-auto max-w-[1200px]"> {/* Added max-width and margin auto */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: `${-currentIndex * (350 + 42)}px`, // 350px is card width, 32px is gap (gap-8)
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1], // Custom easing for smoother animation
          }}
        >
          {treatments.map((treatment) => (
            <div key={treatment.id} className="flex-none">
              <TreatmentCard treatment={treatment} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}