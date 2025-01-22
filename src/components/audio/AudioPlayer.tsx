import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Create a single audio instance that persists across the app
const globalAudio = new Audio('/elements/audio/background-music.mp3');
globalAudio.loop = true;

// Keep track of whether audio has been initialized
let isAudioInitialized = false;

export function AudioPlayer() {
  const audioRef = useRef(globalAudio);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7); // 70% default volume
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Initialize audio immediately when component mounts
  useEffect(() => {
    const audio = audioRef.current;
    
    if (!isAudioInitialized) {
      // Set initial volume based on page
      const initialVolume = isHomePage ? 0.7 : 0.35;
      audio.volume = initialVolume;
      setVolume(initialVolume);
      
      // Start playing immediately
      const playAudio = async () => {
        try {
          // Try to play immediately
          await audio.play();
        } catch (error) {
          console.log('Initial autoplay prevented - retrying...');
          
          // Add user interaction event listeners to start audio
          const startAudio = async () => {
            try {
              await audio.play();
              // Remove event listeners once audio starts
              document.removeEventListener('click', startAudio);
              document.removeEventListener('touchstart', startAudio);
            } catch (err) {
              console.error('Audio playback failed:', err);
            }
          };

          document.addEventListener('click', startAudio);
          document.addEventListener('touchstart', startAudio);
          
          // Also try again after a short delay
          setTimeout(async () => {
            try {
              await audio.play();
            } catch (retryError) {
              console.error('Retry failed:', retryError);
            }
          }, 1000);
        }
      };

      playAudio();
      isAudioInitialized = true;
    }

    // Update volume when changing pages
    audio.volume = isHomePage ? 0.7 : 0.35;
    setVolume(isHomePage ? 0.7 : 0.35);

    return () => {
      // Don't stop the audio on component unmount
      // This keeps it playing across page changes
    };
  }, [isHomePage]);

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
        className="flex items-center space-x-2 rounded-full backdrop-blur-md border border-white/10 p-3 relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#FF6F3C]/20 via-[#FFA833]/20 to-[#FFC76D]/20 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Mute/Unmute Button */}
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 h-6 flex items-center justify-center text-white hover:text-sky-400 
                   transition-all duration-300 relative z-10"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </motion.button>

        {/* Volume Slider */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden relative z-10"
            >
              <div className="px-2 py-1">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer
                           relative overflow-hidden
                           [&::-webkit-slider-thumb]:appearance-none
                           [&::-webkit-slider-thumb]:w-3
                           [&::-webkit-slider-thumb]:h-3
                           [&::-webkit-slider-thumb]:rounded-full
                           [&::-webkit-slider-thumb]:bg-white
                           [&::-webkit-slider-thumb]:hover:bg-sky-400
                           [&::-webkit-slider-thumb]:transition-colors
                           [&::-webkit-slider-thumb]:relative
                           [&::-webkit-slider-thumb]:z-10"
                />
                {/* Volume level indicator */}
                <div 
                  className="absolute left-2 top-1/2 h-1.5 bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D] 
                           rounded-full -translate-y-1/2 transition-all duration-300"
                  style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                >
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 animate-pulse opacity-50 bg-white/30" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
