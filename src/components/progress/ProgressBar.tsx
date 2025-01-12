import React from 'react';

interface ProgressBarProps {
  label: string;
  progress: number;
  gradientFrom: string;
  gradientTo: string;
}

export function ProgressBar({ label, progress, gradientFrom, gradientTo }: ProgressBarProps) {
  return (
    <div className="group relative">
      <div className="flex items-center space-x-3">
        <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}