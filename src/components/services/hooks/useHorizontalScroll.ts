import { useState, useCallback } from 'react';

export function useHorizontalScroll(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= totalSlides) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 1000);
    },
    [isAnimating, totalSlides]
  );

  // Remove all touch and scroll event handlers
  // Only allow navigation through buttons and icons

  return {
    currentSlide,
    isAnimating,
    goToSlide,
    swipeProgress: 0, // Keep this to maintain interface compatibility but it won't be used
  };
}