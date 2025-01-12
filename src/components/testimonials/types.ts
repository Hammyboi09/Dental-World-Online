export interface Testimonial {
  id: number;
  name: string;
  location: string;
  testimonial: string;
  type: 'video' | 'image';
  media: string;
  rating: number;
  date: string;
}