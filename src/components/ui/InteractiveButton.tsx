import React from 'react';

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function InteractiveButton({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}: InteractiveButtonProps) {
  const baseStyles = `
    relative overflow-hidden transform transition-all duration-200
    rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
    active:scale-95
  `;
  
  const variants = {
    primary: `
      bg-sky-600 text-white hover:bg-sky-700
      focus:ring-sky-500
      before:absolute before:inset-0 before:bg-white/20
      before:translate-x-[-100%] hover:before:translate-x-[100%]
      before:transition-transform before:duration-300
    `,
    secondary: 'bg-white text-sky-900 hover:bg-sky-50 focus:ring-sky-400',
    outline: 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50 focus:ring-sky-400'
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}