import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-md w-full">
      <input
        type="text"
        placeholder="Search rare and premium whiskeys..."
        className="w-full bg-white/10 text-white placeholder-amber-200/70 rounded-lg py-2.5 px-4 pl-11 
                 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:bg-white/20 transition-all"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-200/70" />
    </div>
  );
}