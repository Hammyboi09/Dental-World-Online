import { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../types';
import { testimonialData } from '../testimonialData';

export function useTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  
  // Create a wrapped array for infinite loop
  const wrappedData = [...testimonialData, ...testimonialData.slice(0, 3)];
  const totalSlides = Math.ceil(wrappedData.length / 3);

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= testimonialData.length / 3) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= totalSlides - 1 ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return totalSlides - 2;
      return prev - 1;
    });
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= totalSlides - 2) return 0;
      return prev + 1;
    });
  };

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return {
    currentIndex,
    isModalOpen,
    selectedTestimonial,
    openModal,
    closeModal,
    handlePrevSlide,
    handleNextSlide,
    handleTransitionEnd,
    wrappedData
  };
}