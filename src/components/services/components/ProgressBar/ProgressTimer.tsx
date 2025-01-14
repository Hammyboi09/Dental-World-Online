import React from 'react';
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
  currentSlide,
  totalSlides,
}: ProgressTimerProps) {
  const segmentWidth = 100 / totalSlides;
  const currentSegmentStart = currentSlide * segmentWidth;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-20" />
      <FluidProgress progress={currentSegmentStart + segmentWidth} segmentWidth={segmentWidth} />
      <SparkleEffect />
    </div>
  );
}