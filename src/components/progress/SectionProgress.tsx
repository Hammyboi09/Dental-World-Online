import React from 'react';
import { HeroProgress } from './sections/HeroProgress';
import { ServicesProgress } from './sections/ServicesProgress';
import { TestimonialsProgress } from './sections/TestimonialsProgress';
import { ContactProgress } from './sections/ContactProgress';

export function SectionProgress() {
  return (
    <>
      <HeroProgress />
      <ServicesProgress />
      <TestimonialsProgress />
      <ContactProgress />
    </>
  );
}