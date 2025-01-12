import { Users, Lightbulb, Award } from 'lucide-react';

export const aboutItems = [
  { 
    href: '/team', 
    label: 'Our Team', 
    icon: Users, 
    description: 'Meet our expert professionals' 
  },
  { 
    href: '/ideology', 
    label: 'Our Ideology', 
    icon: Lightbulb, 
    description: 'Our values and mission' 
  },
  { 
    href: '/certifications', 
    label: 'Certifications', 
    icon: Award, 
    description: 'Our achievements' 
  }
] as const;