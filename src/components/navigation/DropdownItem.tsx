import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DropdownItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  description: string;
  onClick?: () => void;
}

export function DropdownItem({ href, label, icon: Icon, description, onClick }: DropdownItemProps) {
  return (
    <Link
      to={href}
      className={`
        flex items-start space-x-3 px-4 py-3
        text-gray-200 hover:text-white hover:bg-gray-800/50
        transition-all duration-300 group
        min-h-[44px]
      `}
      role="menuitem"
      onClick={onClick}
    >
      <div className="p-1 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-medium text-base">{label}</div>
        <div className="text-sm text-gray-400 group-hover:text-gray-300">{description}</div>
      </div>
    </Link>
  );
}