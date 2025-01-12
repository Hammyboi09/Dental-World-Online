import { useEffect, useState } from 'react';

export function useSectionObserver() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('section-enter-active');
            entry.target.classList.remove('section-enter');
          } else {
            entry.target.classList.add('section-enter');
            entry.target.classList.remove('section-enter-active');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-enter');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}