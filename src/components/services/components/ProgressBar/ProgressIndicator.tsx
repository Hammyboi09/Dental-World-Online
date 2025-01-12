import React from 'react';
import { ProgressTimer } from './ProgressTimer';

interface ProgressIndicatorProps {
  progress: number;
  currentSlide: number;
  totalSlides: number;
  isAnimating: boolean;
  onAutoProgress: () => void;
}

export function ProgressIndicator({ 
  progress, 
  currentSlide, 
  totalSlides,
  isAnimating, 
  onAutoProgress 
}: ProgressIndicatorProps) {
  return (
    <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
      <ProgressTimer
        isActive={!isAnimating}
        duration={4000} // Updated to 4 seconds
        onComplete={onAutoProgress}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
}