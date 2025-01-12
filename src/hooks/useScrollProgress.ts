import { useState, useEffect, useCallback } from 'react';

export function useScrollProgress() {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);

  const calculateProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    setProgress((scrolled / documentHeight) * 100);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80; // Account for header
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', calculateProgress);
    calculateProgress();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', calculateProgress);
    };
  }, [calculateProgress]);

  return { activeSection, progress, scrollToSection };
}