import React from 'react';
import { motion } from 'framer-motion';
import { SlideIcon } from './SlideIcon';
import { ProgressIndicator } from './ProgressIndicator';
import { NavigationButton } from './NavigationButton';
import type { ServiceSlide } from '../../types';

interface ProgressBarProps {
  slides: ServiceSlide[];
  currentSlide: number;
  onNavigate: (index: number) => void;
  isAnimating: boolean;
}

export function ProgressBar({ slides, currentSlide, onNavigate, isAnimating }: ProgressBarProps) {
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const handleIconClick = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      onNavigate(index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-8 left-0 right-0 mx-auto w-[90%] sm:w-[85%] md:w-[75%] max-w-3xl px-2 sm:px-4 z-50"
    >
      <div className="flex items-center space-x-6">
        <NavigationButton
          direction="left"
          onClick={() => !isAnimating && onNavigate(currentSlide - 1)}
          disabled={isAnimating || currentSlide === 0}
        />

        <div className="flex-1 space-y-4">
          {/* Icons */}
          <div className="flex justify-between px-2">
            {slides.map((slide, index) => (
              <SlideIcon
                key={slide.id}
                title={slide.title}
                isActive={currentSlide === index}
                isPast={index < currentSlide}
                index={index}
                onClick={() => handleIconClick(index)}
              />
            ))}
          </div>

          {/* Progress Bar with Timer */}
          <ProgressIndicator
            progress={progress}
            currentSlide={currentSlide}
            totalSlides={slides.length}
            isAnimating={isAnimating}
            onAutoProgress={() => onNavigate((currentSlide + 1) % slides.length)}
          />
        </div>

        <NavigationButton
          direction="right"
          onClick={() => !isAnimating && onNavigate(currentSlide + 1)}
          disabled={isAnimating || currentSlide === slides.length - 1}
        />
      </div>
    </motion.div>
  );
}
