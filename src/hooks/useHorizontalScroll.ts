import { useState, useEffect, useCallback } from 'react';
import { useSwipeGesture } from './useSwipeGesture';
import { useAutoSwipe } from './useAutoSwipe';

export function useHorizontalScroll(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const {
    handleTouchStart,
    calculateSwipeProgress,
    determineSwipeDirection,
    setSwipeProgress,
    swipeProgress
  } = useSwipeGesture();

  const SWIPE_THRESHOLD = 30;

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index < 0 || index >= totalSlides) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, totalSlides]);

  const { pauseAutoSwipe, resumeAutoSwipe } = useAutoSwipe({
    currentSlide,
    totalSlides,
    interval: 5000,
    isAnimating,
    onSlideChange: goToSlide
  });

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating) return;

      const section = document.getElementById('services');
      if (!section?.contains(e.target as Node)) return;

      const touchEnd = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      const progress = calculateSwipeProgress(touchEnd);
      setSwipeProgress(progress);

      if (progress >= SWIPE_THRESHOLD) {
        const direction = determineSwipeDirection(touchEnd);
        if (direction === 'down' && currentSlide > 0) {
          goToSlide(currentSlide - 1);
        } else if (direction === 'up' && currentSlide < totalSlides - 1) {
          goToSlide(currentSlide + 1);
        }
      }
    };

    const handleTouchEnd = () => {
      setSwipeProgress(0);
      resumeAutoSwipe();
    };

    const handleTouchStart = (e: TouchEvent) => {
      pauseAutoSwipe();
      handleTouchStart(e);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    currentSlide,
    isAnimating,
    totalSlides,
    goToSlide,
    handleTouchStart,
    calculateSwipeProgress,
    determineSwipeDirection,
    pauseAutoSwipe,
    resumeAutoSwipe
  ]);

  return {
    currentSlide,
    isAnimating,
    goToSlide,
    swipeProgress,
    pauseAutoSwipe,
    resumeAutoSwipe
  };
}