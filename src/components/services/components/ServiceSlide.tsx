import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { ServiceSlide as ServiceSlideType } from '../types';

interface ServiceSlideProps {
  slide: ServiceSlideType;
  isActive: boolean;
  className?: string;
  onLearnMore: () => void;
}

export function ServiceSlide({
  slide,
  isActive,
  className = '',
  onLearnMore
}: ServiceSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <div className={`relative min-h-[100vh] ${className}`}>
      {/* Video Background */}
      <div
        className={`
          absolute inset-0 transition-transform duration-1000 ease-out
          ${isActive ? 'scale-110' : 'scale-100'}
        `}
      >
        <video
          ref={videoRef}
          src={slide.image}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="max-w-xl backdrop-blur-sm bg-black/20 p-4 sm:p-6 md:p-8 rounded-2xl
                     border border-white/10 shadow-lg
                     mx-auto md:mx-0"
          >
            <motion.h2
              className={`
                text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 transform transition-all duration-1000 delay-300
                ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
                text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
              `}
            >
              {slide.title}
            </motion.h2>

            <motion.p
              className={`
                text-base sm:text-lg mb-6 sm:mb-8 transform transition-all duration-1000 delay-500
                text-white/90 leading-relaxed
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
                ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
              `}
            >
              {slide.description}
            </motion.p>

            <motion.div
              className={`
                grid grid-cols-1 gap-3 sm:gap-4 transform transition-all duration-1000 delay-700
                ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
              `}
            >
              {slide.details.map((detail, idx) => (
                <div
                  key={detail}
                  className="flex items-center space-x-3 bg-white/5 p-2.5 sm:p-3 rounded-lg
                           backdrop-blur-sm border border-white/10"
                  style={{ transitionDelay: `${800 + idx * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {detail}
                  </span>
                </div>
              ))}

              {/* Learn More Button */}
              <motion.button
                onClick={onLearnMore}
                className="mt-2 sm:mt-4 w-full py-2.5 sm:py-3 px-6 rounded-lg
                         bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                         text-white font-medium text-sm sm:text-base
                         transform transition-all duration-300
                         hover:shadow-lg hover:shadow-[#FF6F3C]/20
                         relative overflow-hidden
                         group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                             opacity-0 group-hover:opacity-100 
                             -translate-x-full group-hover:translate-x-full 
                             transition-all duration-700 ease-out" />
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}