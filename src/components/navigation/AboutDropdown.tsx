import React from 'react';
import { ChevronDown, Users, Lightbulb, Award } from 'lucide-react';
import { useDropdownMenu } from './hooks/useDropdownMenu';
import { DropdownItem } from './DropdownItem';

const menuItems = [
  { href: '/team', label: 'Our Team', icon: Users, description: 'Meet our expert professionals' },
  { href: '/ideology', label: 'Our Ideology', icon: Lightbulb, description: 'Our values and mission' },
  { href: '/certifications', label: 'Certifications', icon: Award, description: 'Our achievements and accreditations' },
];

export function AboutDropdown() {
  const { isOpen, handlers, closeMenu } = useDropdownMenu();

  return (
    <div 
      className="relative group"
      {...handlers}
      role="navigation"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <button
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-lg
          text-gray-200 hover:text-white hover:bg-gray-800/30
          transition-all duration-300 ease-in-out
          min-h-[44px] min-w-[44px] text-base font-medium
          ${isOpen ? 'bg-gray-800/30 text-white' : ''}
        `}
      >
        <span>About Us</span>
        <ChevronDown className={`
          h-4 w-4 transition-transform duration-300
          ${isOpen ? 'rotate-180' : ''}
        `} />
      </button>

      <div
        className={`
          absolute top-full right-0 mt-2 w-72
          bg-gray-900/95 backdrop-blur-md rounded-xl
          shadow-lg shadow-gray-900/10 
          border border-gray-700/50
          transform transition-all duration-300 ease-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-2 invisible'
          }
        `}
        onMouseEnter={handlers.onMouseEnter}
        role="menu"
      >
        <div className="py-2">
          {menuItems.map((item) => (
            <DropdownItem
              key={item.href}
              {...item}
              onClick={closeMenu}
            />
          ))}
        </div>
      </div>
    </div>
  );
}