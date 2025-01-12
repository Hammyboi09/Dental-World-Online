import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MobileMenuItemProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
  showIcon?: boolean;
  className?: string;
}

export function MobileMenuItem({ 
  href, 
  label, 
  icon: Icon, 
  description, 
  showIcon,
  className = ''
}: MobileMenuItemProps) {
  return (
    <a
      href={href}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg
        text-gray-200 hover:text-white
        active:bg-gray-800/70 transition-all duration-300
        min-h-[44px] group ${className}
      `}
    >
      {showIcon && Icon && (
        <div className="p-1 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div>
        <div className="font-medium text-base">{label}</div>
        {description && (
          <div className="text-sm text-gray-400 group-hover:text-gray-300">{description}</div>
        )}
      </div>
    </a>
  );
}