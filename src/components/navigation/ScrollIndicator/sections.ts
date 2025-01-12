import { Home, Stethoscope, MessageSquare, Phone } from 'lucide-react';

export const sections = [
  { 
    id: 'hero',
    label: 'Home',
    icon: Home
  },
  { 
    id: 'services',
    label: 'Our Services',
    icon: Stethoscope
  },
  { 
    id: 'testimonials',
    label: 'Patient Stories',
    icon: MessageSquare
  },
  { 
    id: 'contact',
    label: 'Contact',
    icon: Phone
  }
] as const;

export type SectionId = typeof sections[number]['id'];