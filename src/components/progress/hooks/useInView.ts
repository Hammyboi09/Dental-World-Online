import { useState, useEffect } from 'react';

export function useInView(sectionId: string) {
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const calculateProgress = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const total = rect.height;
      const visible = Math.min(viewHeight, rect.bottom) - Math.max(0, rect.top);
      const newProgress = Math.max(0, Math.min(100, (visible / total) * 100));
      setProgress(newProgress);
    };

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
      window.addEventListener('scroll', calculateProgress);
      calculateProgress();
    }

    return () => {
      if (element) {
        observer.unobserve(element);
        window.removeEventListener('scroll', calculateProgress);
      }
    };
  }, [sectionId]);

  return { isInView, progress };
}