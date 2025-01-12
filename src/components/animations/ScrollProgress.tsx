import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-sky-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}