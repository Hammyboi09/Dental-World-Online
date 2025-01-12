import React from 'react';

interface ScrollIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  isAnimating: boolean;
  onSlideChange: (index: number) => void;
}

export function ScrollIndicator({ 
  totalSlides, 
  currentSlide,
  isAnimating,
  onSlideChange
}: ScrollIndicatorProps) {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          disabled={isAnimating}
          onClick={() => !isAnimating && onSlideChange(index)}
          className={`
            w-2.5 h-2.5 rounded-full transition-all duration-300
            ${currentSlide === index 
              ? 'bg-white scale-125' 
              : 'bg-white/30 hover:bg-white/50'}
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}