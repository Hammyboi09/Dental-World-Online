import React from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/usecases', label: 'Usecases' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' }
];

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}