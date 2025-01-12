import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: FadeInProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  
  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };
  
  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`
        transform transition-all duration-700 ease-out
        ${isIntersecting ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClasses[direction]}`}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}