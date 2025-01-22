import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7); // 70% default volume
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Initialize audio on component mount
  useEffect(() => {
    audioRef.current = new Audio('/elements/audio/background-music.mp3');
    audioRef.current.loop = true;
    
    // Set initial volume based on page
    const initialVolume = isHomePage ? 0.7 : 0.35;
    audioRef.current.volume = initialVolume;
    setVolume(initialVolume);
    
    // Start playing with muted state first (to comply with autoplay policies)
    audioRef.current.muted = true;
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Unmute after a short delay if user hasn't interacted yet
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.muted = false;
            }
          }, 1000);
        })
        .catch(() => {
          // Handle autoplay failure - keep muted until user interaction
          console.log('Autoplay prevented - waiting for user interaction');
        });
    }

    // Add click event listener to the document
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.muted) {
        audioRef.current.muted = false;
        audioRef.current.play();
      }
      document.removeEventListener('click', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle volume changes based on scroll position (only on home page)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection || !audioRef.current) return;

      const rect = heroSection.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const heroVisibility = Math.max(0, Math.min(1, (rect.bottom) / viewHeight));
      
      // Calculate volume between 30% and 70% based on hero section visibility
      const newVolume = 0.3 + (heroVisibility * 0.4);
      
      // Apply volume change with smooth transition
      if (audioRef.current && !isMuted) {
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isMuted]);

  // Handle mute/unmute
  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = volume;
      audioRef.current.muted = false;
    } else {
      audioRef.current.volume = 0;
      audioRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  };

  // Handle volume change from slider
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = false;
      setVolume(newVolume);
      setIsMuted(false);
    }
  };

  return (
    <div
      className="fixed bottom-8 left-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
          width: isHovered ? 'auto' : '48px',
        }}
        className="flex items-center space-x-2 rounded-full backdrop-blur-md border border-white/10 p-3"
      >
        <button
          onClick={toggleMute}
          className="w-6 h-6 flex items-center justify-center text-white hover:text-sky-400 transition-colors"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 100, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-3
                         [&::-webkit-slider-thumb]:h-3
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-white
                         [&::-webkit-slider-thumb]:hover:bg-sky-400
                         [&::-webkit-slider-thumb]:transition-colors"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}