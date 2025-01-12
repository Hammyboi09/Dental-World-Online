import React from 'react';
import { useInView } from '../hooks/useInView';
import { ProgressBar } from '../ProgressBar';

export function TestimonialsProgress() {
  const { isInView, progress } = useInView('testimonials');
  
  if (!isInView) return null;
  
  return (
    <div className="fixed right-8 top-[65vh] z-50">
      <ProgressBar
        label="Stories"
        progress={progress}
        gradientFrom="from-green-400"
        gradientTo="to-emerald-400"
      />
    </div>
  );
}