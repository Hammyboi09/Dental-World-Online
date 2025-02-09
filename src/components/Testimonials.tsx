import React from 'react';
import { TestimonialSlider } from './testimonials/TestimonialSlider';
import { TestimonialHeader } from './testimonials/TestimonialHeader';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialHeader />
        <TestimonialSlider />
      </div>
    </section>
  );
}