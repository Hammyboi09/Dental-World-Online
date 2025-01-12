import { useState, useEffect } from 'react';
import type { SectionId } from './icons';

export function useScrollNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [progress, setProgress] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
            
            // Check background color
            const bgColor = getComputedStyle(entry.target).backgroundColor;
            const rgb = bgColor.match(/\d+/g)?.map(Number);
            if (rgb) {
              // Calculate relative luminance
              const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
              setBackgroundColor(luminance > 0.5 ? 'light' : 'dark');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    ['hero', 'services', 'testimonials', 'contact'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      setProgress((scrolled / documentHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    activeSection,
    progress,
    backgroundColor,
    scrollToSection
  };
}