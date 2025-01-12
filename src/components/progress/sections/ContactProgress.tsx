import React from 'react';
import { useInView } from '../hooks/useInView';
import { ProgressBar } from '../ProgressBar';

export function ContactProgress() {
  const { isInView, progress } = useInView('contact');
  
  if (!isInView) return null;
  
  return (
    <div className="fixed right-8 top-[85vh] z-50">
      <ProgressBar
        label="Contact"
        progress={progress}
        gradientFrom="from-purple-400"
        gradientTo="to-violet-400"
      />
    </div>
  );
}