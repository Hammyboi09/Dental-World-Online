import React, { useState, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialModal } from './TestimonialModal';
import { testimonialData } from './testimonialData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/slider.css';

export function TestimonialSlider() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? testimonialData.length - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= testimonialData.length ? 0 : newIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Create duplicated array for infinite loop
  const extendedTestimonials = [...testimonialData, ...testimonialData.slice(0, 3)];

  return (
    <div className="relative px-4 md:px-12 lg:px-20 py-8">
      {/* Navigation Buttons - Adjusted positioning */}
      <button
        onClick={handlePrevious}
        className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10
                 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10
                 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform" />
      </button>

      {/* Testimonials Container with Touch Events */}
      <div 
        className="overflow-hidden"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex gap-4 md:gap-6 lg:gap-8 px-2 md:px-4"
          animate={{ x: `${-currentIndex * (350 + 16)}px` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-none">
              <TestimonialCard
                testimonial={testimonial}
                onClick={() => handleTestimonialClick(testimonial)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonial={selectedTestimonial}
      />
    </div>
  );
}