import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const globalAudio = new Audio('/elements/audio/background-music.mp3');
globalAudio.loop = true;
let isAudioInitialized = false;

export function AudioPlayer() {
  const audioRef = useRef(globalAudio);
  const [isMuted, setIsMuted] = useState(false);
  const [volume] = useState(0.05); // Default volume
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const audio = audioRef.current;

    if (!isAudioInitialized) {
      audio.volume = volume;

      const playAudio = async () => {
        try {
          await audio.play();
        } catch {
          const startAudio = async () => {
            try {
              await audio.play();
              document.removeEventListener('click', startAudio);
              document.removeEventListener('touchstart', startAudio);
            } catch (err) {
              console.error('Audio playback failed:', err);
            }
          };

          document.addEventListener('click', startAudio);
          document.addEventListener('touchstart', startAudio);

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

    audio.volume = isHomePage ? volume : volume;
  }, [isHomePage, volume]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    // Toggle mute/unmute
    if (isMuted) {
      audioRef.current.muted = false;
    } else {
      audioRef.current.muted = true;
    }
    setIsMuted(!isMuted); // Update the state to reflect the mute/unmute status
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.div
        initial={false}
        animate={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        className="flex items-center justify-center rounded-full backdrop-blur-md border border-white/10 p-3"
      >
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </motion.button>
      </motion.div>
    </div>
  );
}
