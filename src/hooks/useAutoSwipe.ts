import { useEffect, useCallback, useRef } from 'react';

interface UseAutoSwipeProps {
  currentSlide: number;
  totalSlides: number;
  interval?: number;
  isAnimating: boolean;
  onSlideChange: (index: number) => void;
}

export function useAutoSwipe({
  currentSlide,
  totalSlides,
  interval = 3000, // Updated to 3 seconds
  isAnimating,
  onSlideChange
}: UseAutoSwipeProps) {
  const timerRef = useRef<number>();
  const isPausedRef = useRef(false);

  const nextSlide = useCallback(() => {
    if (!isPausedRef.current && !isAnimating) {
      const nextIndex = (currentSlide + 1) % totalSlides;
      onSlideChange(nextIndex);
    }
  }, [currentSlide, totalSlides, isAnimating, onSlideChange]);

  const pauseAutoSwipe = useCallback(() => {
    isPausedRef.current = true;
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const resumeAutoSwipe = useCallback(() => {
    isPausedRef.current = false;
    timerRef.current = window.setInterval(nextSlide, interval);
  }, [nextSlide, interval]);

  useEffect(() => {
    resumeAutoSwipe();
    return pauseAutoSwipe;
  }, [resumeAutoSwipe, pauseAutoSwipe]);

  return {
    pauseAutoSwipe,
    resumeAutoSwipe,
    nextSlide
  };
}