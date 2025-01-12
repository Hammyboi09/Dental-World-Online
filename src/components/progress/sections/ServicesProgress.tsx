import React from 'react';
import { useInView } from '../hooks/useInView';
import { useServicesProgress } from '../hooks/useServicesProgress';
import { ProgressBar } from '../ProgressBar';

export function ServicesProgress() {
  const { isInView } = useInView('services');
  const { currentSlide, totalSlides, slideProgress } = useServicesProgress();
  
  if (!isInView) return null;
  
  return (
    <div className="fixed right-8 top-[45vh] z-50">
      <ProgressBar
        label={`Services (${currentSlide}/${totalSlides})`}
        progress={slideProgress}
        gradientFrom="from-orange-400"
        gradientTo="to-pink-400"
      />
    </div>
  );
}