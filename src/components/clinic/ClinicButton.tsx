import React from 'react';

interface ClinicButtonProps {
  title: string;
  link: string;
}

export function ClinicButton({ title, link }: ClinicButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center
                px-4 py-1.5 bg-[#1A1A1A] hover:bg-[#4A4A4A]
                rounded-lg text-[13px] text-white/90
                transition-all duration-300 transform hover:scale-105 active:scale-95
                border border-white/10 hover:border-white/20
                shadow-sm hover:shadow-md
                font-roboto tracking-wide font-medium"
    >
      {title}
    </a>
  );
}