import React from 'react';

interface ProgressContainerProps {
  children: React.ReactNode;
}

export function ProgressContainer({ children }: ProgressContainerProps) {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
      <div className="flex items-center space-x-2">
        {children}
      </div>
    </div>
  );
}