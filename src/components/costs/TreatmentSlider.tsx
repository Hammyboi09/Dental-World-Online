import React, { useState, useRef, useEffect } from 'react';
import { TreatmentCard } from './TreatmentCard';
import { treatments } from './treatmentData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

export function TreatmentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showSwipeInstruction, setShowSwipeInstruction] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check if it's mobile/small screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show swipe instruction on first visit
  useEffect(() => {
    const hasSeenInstruction = sessionStorage.getItem('hasSeenSwipeInstruction');
    if (!hasSeenInstruction && isMobile) {
      setShowSwipeInstruction(true);
      sessionStorage.setItem('hasSeenSwipeInstruction', 'true');
      
      // Hide instruction after 3 seconds
      const timer = setTimeout(() => {
        setShowSwipeInstruction(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? treatments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === treatments.length - 1 ? 0 : prev + 1));
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

  // Calculate visible cards and container width based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCards = getVisibleCards();
  const cardWidth = 350; // Fixed card width
  const cardGap = 24; // Gap between cards
  const containerPadding = 32; // Padding on container sides
  const totalWidth = (cardWidth + cardGap) * visibleCards - cardGap;

  // Create a wrapped array for smooth infinite loop
  const wrappedTreatments = [...treatments, ...treatments.slice(0, 3)];

  return (
    <div className="relative">
      {/* Swipe Instruction Alert */}
      <AnimatePresence>
        {showSwipeInstruction && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute -top-16 left-0 right-0 mx-auto w-max z-10
                     bg-black/80 text-white px-6 py-3 rounded-full
                     backdrop-blur-md border border-white/20"
          >
            <p className="text-sm font-medium">
              ← Swipe left or right to navigate →
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons - Only show on larger screens */}
      {!isMobile && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10
                     p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                     border border-white/10 hover:bg-black/30
                     transition-all duration-300 group
                     hover:scale-110 hover:shadow-lg hover:shadow-black/20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10
                     p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                     border border-white/10 hover:bg-black/30
                     transition-all duration-300 group
                     hover:scale-110 hover:shadow-lg hover:shadow-black/20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </>
      )}

      {/* Cards Container */}
      <div 
        className="mx-auto overflow-hidden"
        style={{ 
          maxWidth: `${totalWidth + (containerPadding * 2)}px`,
          padding: `0 ${containerPadding}px`
        }}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex"
          animate={{
            x: `${-currentIndex * (cardWidth + cardGap)}px`,
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
          style={{
            gap: `${cardGap}px`,
          }}
        >
          {wrappedTreatments.map((treatment, index) => (
            <div 
              key={`${treatment.id}-${index}`}
              className="flex-none"
              style={{ width: `${cardWidth}px` }}
            >
              <TreatmentCard treatment={treatment} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}