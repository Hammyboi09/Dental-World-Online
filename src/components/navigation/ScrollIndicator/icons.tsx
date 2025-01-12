import React from 'react';
import { Home, Stethoscope, MessageSquare, Phone } from 'lucide-react';

export const sectionIcons = {
  hero: Home,
  services: Stethoscope,
  testimonials: MessageSquare,
  contact: Phone
} as const;

export type SectionId = keyof typeof sectionIcons;