import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Our Services' },
  { id: 'testimonials', label: 'Patient Stories' },
  { id: 'contact', label: 'Contact' }
];

export function GlobalScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);

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

    sections.forEach(({ id }) => {
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
      const calculatedProgress = (scrolled / documentHeight) * 100;
      setProgress(calculatedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSectionIndex = sections.findIndex(section => section.id === activeSection);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {/* Loading Bar */}
        <div className="absolute right-1 top-0 w-0.5 h-full bg-white/20">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-sky-400 to-orange-400 transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* Section Indicators */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const isActive = section.id === activeSection;
            const isPast = index < activeSectionIndex;
            const isCurrent = index === activeSectionIndex;

            return (
              <div
                key={section.id}
                className="group flex items-center space-x-4"
              >
                <span 
                  className={`
                    text-sm font-medium transition-all duration-300
                    transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    ${isPast ? 'text-sky-400' : isCurrent ? 'text-white' : 'text-white/75'}
                  `}
                >
                  {section.label}
                </span>
                <div 
                  className={`
                    w-3 h-3 rounded-full transition-all duration-500
                    ${isPast 
                      ? 'bg-gradient-to-r from-sky-400 to-orange-400 scale-75' 
                      : isCurrent
                        ? 'bg-gradient-to-r from-sky-400 to-orange-400 scale-125'
                        : 'bg-white/50'
                    }
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}