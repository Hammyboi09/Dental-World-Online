import React, { useEffect, useState } from 'react';
import { FluidProgress } from './FluidProgress';
import { SparkleEffect } from './SparkleEffect';

interface ProgressTimerProps {
  isActive: boolean;
  duration: number;
  onComplete: () => void;
  currentSlide: number;
  totalSlides: number;
}

export function ProgressTimer({
  isActive,
  duration,
  onComplete,
  currentSlide,
  totalSlides,
}: ProgressTimerProps) {
  const [progress, setProgress] = useState(0);
  const segmentWidth = 100 / totalSlides;
  const currentSegmentStart = currentSlide * segmentWidth;

  useEffect(() => {
    if (!isActive) {
      setProgress(currentSegmentStart);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const segmentProgress = (elapsed / duration) * segmentWidth;
      const newProgress = currentSegmentStart + segmentProgress;

      if (newProgress >= currentSegmentStart + segmentWidth) {
        setProgress(currentSegmentStart + segmentWidth);
        clearInterval(interval);
        onComplete();
      } else {
        setProgress(newProgress);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [
    isActive,
    duration,
    onComplete,
    currentSlide,
    segmentWidth,
    currentSegmentStart,
  ]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-20" />
      <FluidProgress progress={progress} segmentWidth={segmentWidth} />
      <SparkleEffect />
    </div>
  );
}
