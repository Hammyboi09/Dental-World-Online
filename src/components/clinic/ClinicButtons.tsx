import React, { useState } from 'react';
import { ClinicButton } from './ClinicButton';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-8 left-15 right-0 z-40">
      <div className="max-w-7xl mx-auto px-5">
        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-4">
          {clinicButtons.map((button) => (
            <ClinicButton
              key={button.title}
              title={button.title}
              link={button.link}
              className="text-center" // Center text in the ClinicButton component
            />
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-14 py-1 bg-[#1A1A1A] hover:bg-[#4A4A4A]
                     rounded-lg text-white/90 transition-all duration-300"
          >
            <span className="text-[13px] font-roboto tracking-wide font-medium text-center w-full">Other Links</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 py-2
                         shadow-lg backdrop-blur-none w-[90%] mx-auto"
              >
                {clinicButtons.map((button, index) => (
                  <motion.a
                    key={button.title}
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-2 text-[13px] text-white/90 bg-[#1A1A1A]
                               hover:bg-[#292929] rounded-md shadow-md
                               font-roboto tracking-wide font-medium transition-all
                               mt-1 first:mt-0 text-center w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {button.title}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
