import React from 'react';
import { Heart, Sparkles, Stethoscope, Baby } from 'lucide-react';

export type IconType = 'general' | 'cosmetic' | 'orthodontics' | 'pediatric';

interface ServiceIconProps {
  type: IconType;
  className?: string;
}

export function ServiceIcon({ type, className = "h-6 w-6" }: ServiceIconProps) {
  switch (type) {
    case 'general':
      return <Heart className={className} />;
    case 'cosmetic':
      return <Sparkles className={className} />;
    case 'orthodontics':
      return <Stethoscope className={className} />;
    case 'pediatric':
      return <Baby className={className} />;
  }
}