import React, { useState } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialModal } from './TestimonialModal';
import { testimonialData } from './testimonialData';
import './styles/slider.css';

export function TestimonialSlider() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  // Show more testimonials in the initial view
  const visibleTestimonials = 20;
  const displayedTestimonials = testimonialData.slice(0, visibleTestimonials);

  return (
    <div className="testimonial-container">
      <div className="testimonial-track">
        {displayedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="testimonial-slide">
            <TestimonialCard
              testimonial={testimonial}
              onClick={() => handleTestimonialClick(testimonial)}
            />
          </div>
        ))}
        {/* Duplicate for infinite scroll */}
        {displayedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-duplicate-${index}`} className="testimonial-slide">
            <TestimonialCard
              testimonial={testimonial}
              onClick={() => handleTestimonialClick(testimonial)}
            />
          </div>
        ))}
      </div>

      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonial={selectedTestimonial}
      />
    </div>
  );
}