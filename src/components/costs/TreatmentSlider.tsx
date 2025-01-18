import React, { useState, useRef } from 'react';
import { TreatmentCard } from './TreatmentCard';
import { treatments } from './treatmentData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

export function TreatmentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative px-4 md:px-12 lg:px-20 py-8">
      {/* Navigation Buttons - Adjusted positioning */}
      <button
        onClick={handlePrevious}
        disabled={isAnimating}
        className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10
                 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20
                 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous treatment"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform" />
      </button>

      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10
                 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20
                 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next treatment"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform" />
      </button>

      {/* Cards Container with Touch Events */}
      <div 
        className="overflow-hidden mx-auto max-w-[1200px]"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex gap-4 md:gap-6 lg:gap-8 px-2 md:px-4"
          animate={{
            x: `${-currentIndex * (350 + 16)}px`,
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
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