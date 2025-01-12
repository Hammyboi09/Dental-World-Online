import React from 'react';
import { TestimonialCircle } from './TestimonialCircle';
import { testimonialData } from './testimonialData';
import './styles/slider.css';

interface TestimonialTrackProps {
  onTestimonialClick: (testimonial: typeof testimonialData[0]) => void;
}

export function TestimonialTrack({ onTestimonialClick }: TestimonialTrackProps) {
  // Triple the data for smoother infinite loop
  const duplicatedData = [...testimonialData, ...testimonialData, ...testimonialData];

  return (
    <ul className="testimonial-track">
      {duplicatedData.map((testimonial, index) => (
        <li key={`${testimonial.id}-${index}`}>
          <TestimonialCircle 
            testimonial={testimonial}
            onClick={() => onTestimonialClick(testimonial)}
          />
        </li>
      ))}
    </ul>
  );
}