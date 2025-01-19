import React from 'react';
import { VideoBackground } from './hero/VideoBackground';
import { ClinicButtons } from './clinic/ClinicButtons';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen pt-24">
      <VideoBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <ClinicButtons />

        <div className="max-w-5xl mx-auto text-center mt-16">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/elements/home/logo/main-logo.png"
              alt="Dental World Logo"
              className="w-[3000px] h-[750px] -mt-48 object-contain transform hover:scale-125 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="-mt-48 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/ai-consultation"
              className="inline-flex items-center justify-center px-8 py-4
                       bg-gradient-to-r from-violet-600 to-indigo-600
                       hover:from-violet-500 hover:to-indigo-500
                       text-white text-lg font-semibold
                       rounded-2xl shadow-lg
                       transform transition-all duration-300
                       hover:scale-105 hover:shadow-violet-500/25
                       relative overflow-hidden
                       group
                       mx-auto"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 
                           opacity-0 group-hover:opacity-20 
                           transition-opacity duration-1000 
                           animate-pulse"
              />

              <div
                className="absolute inset-0 transform -translate-x-full
                           bg-gradient-to-r from-transparent via-white/20 to-transparent
                           group-hover:translate-x-full transition-transform duration-1000"
              />

              <span className="relative z-10">Get Free AI Consultation</span>

              <div
                className="absolute top-0 left-0 w-2 h-2 rounded-full
                           bg-violet-300 opacity-50 animate-ping"
              />
              <div
                className="absolute bottom-0 right-0 w-2 h-2 rounded-full
                           bg-indigo-300 opacity-50 animate-ping delay-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
