import React, { useState, useEffect } from 'react';
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

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= testimonialData.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  // Create duplicated array for infinite loop
  const extendedTestimonials = [...testimonialData, ...testimonialData.slice(0, 3)];

  return (
    <div className="relative px-20">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                 p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                 p-4 rounded-full bg-black/20 backdrop-blur-md
                 border border-white/10 hover:bg-black/30
                 transition-all duration-300 group
                 hover:scale-110 hover:shadow-lg hover:shadow-black/20"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform" />
      </button>

      {/* Testimonials Container */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: `${-currentIndex * (350 + 16)}px` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-none"
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