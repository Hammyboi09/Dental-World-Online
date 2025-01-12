import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/dentalworlddelhi",
    label: "Instagram"
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/dentalworldonline/",
    label: "Facebook"
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@dentalworldonline",
    label: "Youtube"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/dental-world-delhi",
    label: "LinkedIn"
  }
];

export function FooterSocials() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
        </a>
      ))}
    </div>
  );
}