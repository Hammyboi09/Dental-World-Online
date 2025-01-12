import { useState, useCallback, useRef } from 'react';

export function useDelayedHover(enterDelay: number = 200, leaveDelay: number = 500) {
  const [isHovered, setIsHovered] = useState(false);
  const enterTimer = useRef<number>();
  const leaveTimer = useRef<number>();
  
  const handleMouseEnter = useCallback(() => {
    clearTimeout(leaveTimer.current);
    enterTimer.current = window.setTimeout(() => {
      setIsHovered(true);
    }, enterDelay);
  }, [enterDelay]);
  
  const handleMouseLeave = useCallback(() => {
    clearTimeout(enterTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      setIsHovered(false);
    }, leaveDelay);
  }, [leaveDelay]);
  
  return {
    isHovered,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
}