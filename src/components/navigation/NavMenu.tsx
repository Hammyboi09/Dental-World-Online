import React from 'react';
import { AboutDropdown } from './AboutDropdown';
import { CTAButton } from '../ui/CTAButton';
import { mainNavItems } from './menuItems';

interface NavMenuProps {
  className?: string;
}

export function NavMenu({ className = '' }: NavMenuProps) {
  return (
    <div className={`items-center space-x-8 ${className}`}>
      {mainNavItems.map((item) => {
        if (item.hasDropdown) return <AboutDropdown key={item.href} />;
        if (item.isCTA) return (
          <CTAButton key={item.href} href={item.href}>
            {item.label}
          </CTAButton>
        );
        return (
          <a 
            key={item.href}
            href={item.href}
            className="text-gray-200 hover:text-[#FF5733] transition-colors duration-300"
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}