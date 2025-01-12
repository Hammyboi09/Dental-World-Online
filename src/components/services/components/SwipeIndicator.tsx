import React from 'react';

interface SwipeIndicatorProps {
  progress: number;
  threshold: number;
}

export function SwipeIndicator({ progress, threshold }: SwipeIndicatorProps) {
  const isNearThreshold = progress >= threshold - 5;
  
  return (
    <div className={`
      fixed right-8 top-1/2 -translate-y-1/2
      pointer-events-none transition-opacity duration-300
      ${progress > 0 ? 'opacity-100' : 'opacity-0'}
    `}>
      <div className="relative w-16 h-32">
        {/* Vertical progress bar */}
        <div className="absolute inset-0 w-2 bg-white/20 rounded-full mx-auto">
          <div
            className={`
              absolute bottom-0 w-full rounded-full transition-all duration-300
              ${isNearThreshold ? 'bg-sky-400' : 'bg-white'}
            `}
            style={{ height: `${progress}%` }}
          />
        </div>
        
        {/* Percentage indicator */}
        <span className={`
          absolute -left-8 top-1/2 -translate-y-1/2
          text-lg font-medium transition-colors duration-300
          ${isNearThreshold ? 'text-sky-400' : 'text-white'}
        `}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}