import React from 'react';

interface ProgressSectionProps {
  section: {
    id: string;
    label: string;
  };
  isActive: boolean;
  progress: number;
  isLast: boolean;
}

export function ProgressSection({ section, isActive, progress, isLast }: ProgressSectionProps) {
  return (
    <div className="relative group">
      {/* Progress Bar */}
      <div className="h-2 w-16 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-orange-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Label Tooltip */}
      <div className={`
        absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
        px-2 py-1 rounded bg-gray-900/90 text-white text-xs
        transform transition-all duration-200
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}
      `}>
        {section.label}
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="absolute top-1/2 -right-2 w-2 h-px bg-white/20" />
      )}
    </div>
  );
}