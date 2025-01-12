import { Image, MessageCircle, Wrench, DollarSign, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const menuItems = [
  { 
    href: '/gallery', 
    label: 'Gallery',
    description: 'View our dental facility and success stories',
    icon: Image
  },
  { 
    href: '/testimonials', 
    label: 'Testimonials',
    description: 'Read what our patients say about us',
    icon: MessageCircle
  },
  { 
    href: '/services', 
    label: 'Services',
    description: 'Explore our comprehensive dental services',
    icon: Wrench
  },
  { 
    href: '/cost', 
    label: 'Cost',
    description: 'Transparent pricing and payment options',
    icon: DollarSign
  },
  { 
    href: '/locations', 
    label: 'Clinic Locations',
    description: 'Find a dental clinic near you',
    icon: MapPin
  }
] as const;