import React from 'react';
import { ClinicButton } from './ClinicButton';

const clinicButtons = [
  {
    title: "Rajouri Garden Clinic",
    link: "https://maps.app.goo.gl/LxThKuEGY7XR6p4r8"
  },
  {
    title: "Punjabi Bagh Clinic",
    link: "https://maps.app.goo.gl/TyW9mHBwAm5N9Kkp9"
  },
  {
    title: "Practo Rajouri Garden",
    link: "https://www.practo.com/delhi/clinic/dental-world-rajouri-garden-1"
  },
  {
    title: "Practo Punjabi Bagh",
    link: "https://www.practo.com/delhi/clinic/dental-world-the-specialists-clinic-punjabi-bagh"
  }
] as const;

export function ClinicButtons() {
  return (
    <div className="absolute top-8 left-15 right-0 z-40"> {/* Changed from fixed to absolute and adjusted top spacing */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {clinicButtons.map((button) => (
            <ClinicButton
              key={button.title}
              title={button.title}
              link={button.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}