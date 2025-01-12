import React from 'react';
import { useInView } from '../hooks/useInView';
import { ProgressBar } from '../ProgressBar';

export function HeroProgress() {
  const { isInView, progress } = useInView('hero');
  
  if (!isInView) return null;
  
  return (
    <div className="fixed right-8 top-[25vh] z-50">
      <ProgressBar
        label="Home"
        progress={progress}
        gradientFrom="from-sky-400"
        gradientTo="to-indigo-400"
      />
    </div>
  );
}