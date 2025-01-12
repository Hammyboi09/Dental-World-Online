import React, { useRef, useEffect } from 'react';
import { TreatmentCard } from './TreatmentCard';
import { treatments } from './treatmentData';
import './styles.css';

export function TreatmentSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = 0.18; // Reduced from 0.5 to 0.25 (50% slower)

    const animate = (timestamp: number) => {
      if (!isHoveredRef.current && slider) {
        if (lastTimestamp) {
          const delta = timestamp - lastTimestamp;
          slider.scrollLeft += speed * delta;

          // Reset scroll position when reaching the end
          if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
          }
        }
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={sliderRef}
      className="treatment-slider"
      onMouseEnter={() => isHoveredRef.current = true}
      onMouseLeave={() => isHoveredRef.current = false}
    >
      <div className="treatment-track">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="treatment-slide">
            <TreatmentCard treatment={treatment} />
          </div>
        ))}
        {/* Duplicate items for seamless loop */}
        {treatments.map((treatment) => (
          <div key={`${treatment.id}-clone`} className="treatment-slide">
            <TreatmentCard treatment={treatment} />
          </div>
        ))}
      </div>
    </div>
  );
}