import { useState, useEffect, useCallback } from 'react';

export function useHorizontalScroll(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [swipeThreshold] = useState(100); // Minimum distance for a swipe

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index < 0 || index >= totalSlides) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, totalSlides]);

  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      
      const section = document.getElementById('services');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= 100;

      if (!isInView) return;

      e.preventDefault();

      // Accumulate scroll delta until it reaches the threshold
      const scrollThreshold = 100; // Minimum scroll amount for slide change
      if (Math.abs(e.deltaY) >= scrollThreshold) {
        if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
          goToSlide(currentSlide + 1);
        } else if (e.deltaY < 0 && currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      setTouchStart({ x: touchStartX, y: touchStartY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating) return;

      const section = document.getElementById('services');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= 100;

      if (!isInView) return;

      const touchEndY = e.touches[0].clientY;
      const touchEndX = e.touches[0].clientX;
      
      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      // Only handle vertical swipes that are more vertical than horizontal
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) >= swipeThreshold) {
        e.preventDefault();
        
        if (deltaY > 0 && currentSlide < totalSlides - 1) {
          goToSlide(currentSlide + 1);
        } else if (deltaY < 0 && currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSlide, isAnimating, totalSlides, goToSlide, swipeThreshold]);

  return { currentSlide, isAnimating, goToSlide };
}