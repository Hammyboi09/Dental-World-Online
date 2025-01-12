import { useState } from 'react';

interface TouchPoint {
  x: number;
  y: number;
}

export function useSwipeGesture() {
  const [touchStart, setTouchStart] = useState<TouchPoint>({ x: 0, y: 0 });
  const [swipeProgress, setSwipeProgress] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
    setSwipeProgress(0);
  };

  const calculateSwipeProgress = (touchEnd: TouchPoint) => {
    const deltaY = touchStart.y - touchEnd.y;
    const screenHeight = window.innerHeight;
    return (Math.abs(deltaY) / screenHeight) * 100;
  };

  const determineSwipeDirection = (touchEnd: TouchPoint) => {
    const deltaY = touchStart.y - touchEnd.y;
    return deltaY > 0 ? 'down' : 'up';
  };

  return {
    handleTouchStart,
    calculateSwipeProgress,
    determineSwipeDirection,
    setSwipeProgress,
    swipeProgress
  };
}