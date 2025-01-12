import React from 'react';
import { ServiceIcon } from '../ServiceIcon';
import type { Treatment } from '../types';

interface ServiceContentProps {
  service: Treatment;
  isActive: boolean;
  index: number;
  onClick: () => void;
}

export function ServiceContent({
  service,
  isActive,
  index,
  onClick,
}: ServiceContentProps) {
  const baseDelay = 400;
  const lineDelay = (line: number) => baseDelay + line * 100;

  return (
    <div className="relative h-full w-full" onClick={onClick}>
      <div
        className={`
        absolute ${index % 2 === 0 ? 'right-16' : 'left-16'} top-32
        transition-all duration-[1500ms]
        ${
          isActive
            ? '-translate-y-[125px] opacity-0'
            : 'translate-y-0 opacity-100'
        }
      `}
      >
        {/* Icon */}
        <div
          className={`
            transform transition-all duration-[1500ms]
            ${
              isActive
                ? 'translate-y-[-125px] opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
          style={{ transitionDelay: `${lineDelay(1)}ms` }}
        >
          <ServiceIcon
            type={service.iconType}
            className="h-16 w-16 text-[#FF6F3C]"
          />
        </div>

        {/* Title */}
        <h3
          className={`
            mt-6 text-4xl font-bold text-gray-900
            transform transition-all duration-[1500ms]
            ${
              isActive
                ? 'translate-y-[-125px] opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
          style={{ transitionDelay: `${lineDelay(2)}ms` }}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p
          className={`
            mt-4 text-lg text-gray-600
            transform transition-all duration-[1500ms]
            ${
              isActive
                ? 'translate-y-[-125px] opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
          style={{ transitionDelay: `${lineDelay(3)}ms` }}
        >
          {service.description}
        </p>

        {/* Treatments with Updated Bullet Colors */}
        <div
          className={`
            mt-8 space-y-2
            transform transition-all duration-[1500ms]
            ${
              isActive
                ? 'translate-y-[-125px] opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
          style={{ transitionDelay: `${lineDelay(4)}ms` }}
        >
          {service.treatments.map((treatment) => (
            <div key={treatment} className="flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]" />
              <span className="text-gray-600">{treatment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
