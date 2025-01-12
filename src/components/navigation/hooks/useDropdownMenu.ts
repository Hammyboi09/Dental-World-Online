import { useState, useCallback, useRef } from 'react';

export function useDropdownMenu(enterDelay = 200, leaveDelay = 800) {
  const [isOpen, setIsOpen] = useState(false);
  const enterTimer = useRef<number>();
  const leaveTimer = useRef<number>();
  const submenuTimer = useRef<number>();

  const handleMouseEnter = useCallback(() => {
    clearTimeout(leaveTimer.current);
    clearTimeout(submenuTimer.current);
    
    enterTimer.current = window.setTimeout(() => {
      setIsOpen(true);
    }, enterDelay);
  }, [enterDelay]);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(enterTimer.current);
    
    leaveTimer.current = window.setTimeout(() => {
      submenuTimer.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }, leaveDelay);
  }, [leaveDelay]);

  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick
    },
    closeMenu
  };
}