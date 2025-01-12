import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

export function useSectionProgress(sections: Section[]) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const calculateProgress = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const total = rect.height;
      const visible = Math.min(viewHeight, rect.bottom) - Math.max(0, rect.top);
      return Math.max(0, Math.min(100, (visible / total) * 100));
    };

    const handleScroll = () => {
      const progress: Record<string, number> = {};
      
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          progress[id] = calculateProgress(element);
          if (progress[id] > 50) {
            setActiveSection(id);
          }
        }
      });

      setSectionProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return { activeSection, sectionProgress };
}