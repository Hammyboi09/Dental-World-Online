import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useDropdownMenu } from './hooks/useDropdownMenu';
import { DropdownItem } from './DropdownItem';
import { menuItems } from './menuItems';

export function MenuDropdown() {
  const { isOpen, handlers, closeMenu } = useDropdownMenu(200, 500);

  return (
    <div 
      className="relative"
      {...handlers}
      role="navigation"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <button
        className={`
          flex items-center justify-center p-2 rounded-lg
          text-gray-200 hover:text-white hover:bg-gray-800/30
          transition-all duration-300 ease-in-out
          min-h-[44px] min-w-[44px]
          ${isOpen ? 'bg-gray-800/30 text-white' : ''}
        `}
      >
        <Hamburger 
          toggled={isOpen}
          size={20}
          color="currentColor"
          distance="sm"
          duration={0.3}
        />
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
      >
        <div className="py-2">
          {menuItems.map((item) => (
            <DropdownItem
              key={item.href}
              href={item.href}
              label={item.label}
              description={item.description}
              icon={item.icon}
              onClick={closeMenu}
            />
          ))}
        </div>
      </div>
    </div>
  );
}