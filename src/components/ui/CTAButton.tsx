import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ href, children, className = '' }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`
        inline-block px-6 py-2 rounded-xl
        bg-gradient-to-r from-primary to-secondary
        text-white font-medium
        transform hover:scale-105
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:shadow-primary/20
        ${className}
      `}
    >
      {children}
    </a>
  );
}