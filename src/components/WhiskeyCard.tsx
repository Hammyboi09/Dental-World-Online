import React from 'react';
import { Button } from './ui/Button';

interface WhiskeyCardProps {
  whiskey: {
    name: string;
    price: string;
    image: string;
    description: string;
    age?: string;
    region?: string;
  };
}

export function WhiskeyCard({ whiskey }: WhiskeyCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-72 overflow-hidden">
        <img
          src={whiskey.image}
          alt={whiskey.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-amber-900">{whiskey.name}</h3>
            {whiskey.age && (
              <span className="text-sm text-amber-700">{whiskey.age} Years Old</span>
            )}
          </div>
          <span className="text-2xl font-bold text-amber-900">{whiskey.price}</span>
        </div>
        
        {whiskey.region && (
          <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
            {whiskey.region}
          </span>
        )}
        
        <p className="mt-3 text-amber-700">{whiskey.description}</p>
        
        <div className="mt-6">
          <Button variant="primary" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}