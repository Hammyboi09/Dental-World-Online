import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  about: string;
}