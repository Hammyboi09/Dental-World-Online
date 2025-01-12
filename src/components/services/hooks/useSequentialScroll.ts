import { useState, useEffect } from 'react';

const SLIDE_DURATION = 1500; // Time to show each slide
const SECTION_HOLD_DELAY = 800; // Delay before allowing section change
const ANIMATION_DURATION = 1000; // Duration of slide transitions

export function useSequentialScroll(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [canExitSection, setCanExitSection] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating || isLocked) return;

      const section = document.getElementById('services');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= 100;

      if (!isInView) {
        if (currentSlide !== 1) {
          setCurrentSlide(1);
          setCanExitSection(false);
        }
        return;
      }

      e.preventDefault();
      
      if (e.deltaY > 0) { // Scrolling down
        if (currentSlide < totalSlides) {
          setIsAnimating(true);
          setCurrentSlide(prev => prev + 1);
          
          // Reset exit permission when moving between slides
          setCanExitSection(false);
          
          // Allow next scroll after slide animation
          setTimeout(() => {
            setIsAnimating(false);
          }, ANIMATION_DURATION);
          
          // Allow section exit after viewing last slide for minimum duration
          if (currentSlide === totalSlides - 1) {
            setTimeout(() => {
              setCanExitSection(true);
            }, SLIDE_DURATION);
          }
        } else if (canExitSection) {
          // Only allow exit to next section if we've viewed the last slide
          setIsLocked(true);
          const testimonials = document.getElementById('testimonials');
          testimonials?.scrollIntoView({ behavior: 'smooth' });
          
          // Reset states after section change
          setTimeout(() => {
            setIsLocked(false);
            setCurrentSlide(1);
            setCanExitSection(false);
          }, SECTION_HOLD_DELAY);
        }
      } else { // Scrolling up
        if (currentSlide > 1) {
          setIsAnimating(true);
          setCurrentSlide(prev => prev - 1);
          setCanExitSection(false);
          
          setTimeout(() => {
            setIsAnimating(false);
          }, ANIMATION_DURATION);
        } else {
          setIsLocked(true);
          const hero = document.getElementById('hero');
          hero?.scrollIntoView({ behavior: 'smooth' });
          
          setTimeout(() => {
            setIsLocked(false);
          }, SECTION_HOLD_DELAY);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isAnimating, isLocked, canExitSection, totalSlides]);

  return { 
    currentSlide, 
    isAnimating,
    canExitSection 
  };
}