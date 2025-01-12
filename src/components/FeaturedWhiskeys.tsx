import React from 'react';
import { WhiskeyCard } from './WhiskeyCard';

const featuredWhiskeys = [
  {
    id: 1,
    name: "Macallan Rare Cask",
    price: "$3,999",
    image: "https://images.unsplash.com/photo-1585975754487-53a02619e199?auto=format&fit=crop&w=800&q=80",
    description: "Exceptional single malt crafted from handpicked sherry seasoned oak casks",
    age: "25",
    region: "Speyside"
  },
  {
    id: 2,
    name: "Highland Park",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=800&q=80",
    description: "Rich and complex with notes of honey, heather, and subtle smoke",
    age: "18",
    region: "Islands"
  },
  {
    id: 3,
    name: "Yamazaki",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1574725035820-950c0e01ccd7?auto=format&fit=crop&w=800&q=80",
    description: "Japan's most prestigious single malt, featuring mizunara oak influence",
    age: "21",
    region: "Japan"
  }
];

export function FeaturedWhiskeys() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-amber-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900">Featured Collections</h2>
          <p className="mt-4 text-amber-700 max-w-2xl mx-auto">
            Discover our handpicked selection of rare and exceptional whiskeys from renowned distilleries worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWhiskeys.map((whiskey) => (
            <WhiskeyCard key={whiskey.id} whiskey={whiskey} />
          ))}
        </div>
      </div>
    </section>
  );
}