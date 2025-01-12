import { useState, useEffect, useCallback } from 'react';

export function useAutoSlider(totalWidth: number, speed: number = 1) {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resetPosition = useCallback(() => {
    if (position <= -totalWidth) {
      setPosition(0);
    }
  }, [position, totalWidth]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPosition(prev => prev - speed);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isPaused, speed]);

  useEffect(() => {
    resetPosition();
  }, [position, resetPosition]);

  return {
    position,
    setIsPaused,
    resetPosition
  };
}