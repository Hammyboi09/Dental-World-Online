import React, { useState } from 'react';
import { ServiceSlide } from './components/ServiceSlide';
import { serviceSlides } from './serviceData';
import { ProgressBar } from './components/ProgressBar';
import { SwipeIndicator } from './components/SwipeIndicator';
import { ServiceModal } from './components/ServiceModal';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

export function Services() {
  const { currentSlide, isAnimating, goToSlide, swipeProgress } =
    useHorizontalScroll(serviceSlides.length);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {serviceSlides.map((slide, index) => (
          <ServiceSlide
            key={slide.id}
            slide={slide}
            isActive={currentSlide === index}
            className="min-w-full"
            onLearnMore={() => setIsModalOpen(true)}
          />
        ))}
      </div>

      {/* Swipe Progress Indicator */}
      <SwipeIndicator progress={swipeProgress} threshold={60} />

      {/* Enhanced Progress Bar */}
      <ProgressBar
        slides={serviceSlides}
        currentSlide={currentSlide}
        onNavigate={goToSlide}
        isAnimating={isAnimating}
      />

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={serviceSlides[currentSlide]}
      />
    </div>
  );
}