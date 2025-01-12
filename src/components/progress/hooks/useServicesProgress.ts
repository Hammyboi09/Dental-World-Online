import { useState, useEffect } from 'react';

export function useServicesProgress() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(7); // From serviceData.ts
  const [slideProgress, setSlideProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      const progress = (Math.abs(rect.top) / rect.height) * 100;
      const slideIndex = Math.floor((progress / 100) * totalSlides) + 1;
      
      setCurrentSlide(Math.min(slideIndex, totalSlides));
      setSlideProgress((progress / totalSlides) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  return { currentSlide, totalSlides, slideProgress };
}