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
    setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
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

  // Calculate visible cards and container width based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCards = getVisibleCards();
  const cardWidth = 350; // Fixed card width
  const cardGap = 24; // Gap between cards
  const containerPadding = 32; // Padding on container sides
  const totalWidth = (cardWidth + cardGap) * visibleCards - cardGap;

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10
                 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={handleNext}
        className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10
                 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Cards Container */}
      <div 
        className="mx-auto overflow-hidden"
        style={{ 
          maxWidth: `${totalWidth + (containerPadding * 2)}px`,
          padding: `0 ${containerPadding}px`
        }}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex"
          animate={{
            x: `${-currentIndex * (cardWidth + cardGap)}px`,
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
          style={{
            gap: `${cardGap}px`,
          }}
        >
          {testimonialData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-none"
              style={{ width: `${cardWidth}px` }}
            >
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