import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919650044321"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-emerald-500/90 backdrop-blur-md rounded-xl p-6
                 border border-emerald-400/30 hover:bg-emerald-500/95
                 transition-all duration-300 group"
    >
      <div className="flex items-center justify-center space-x-4">
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <div className="text-white">
          <p className="text-lg font-semibold">Chat with Us on WhatsApp</p>
          <p className="text-sm text-white/90">Quick responses during business hours</p>
        </div>
      </div>
    </a>
  );
}