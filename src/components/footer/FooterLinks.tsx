import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { 
    title: 'Services', 
    items: [
      { label: 'Oral Surgery', path: '/services' },
      { label: 'General Treatments', path: '/services' },
      { label: 'Periodontics/Gums Treatments', path: '/services' },
      { label: 'Oral Concerns', path: '/services' }
    ] 
  },
  { 
    title: 'Company', 
    items: [
      { label: 'Gallery', path: '/gallery' },
      { label: 'Our Team', path: '/team' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Blog', path: '/blog' }
    ] 
  },
  { 
    title: 'Support', 
    items: [
      { label: 'FAQs', path: '/faq' },
      { label: 'Contact', path: '/contact' }
    ] 
  }
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-white font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}