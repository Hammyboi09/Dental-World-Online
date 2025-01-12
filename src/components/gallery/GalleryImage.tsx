import React from 'react';
import type { GalleryImage as GalleryImageType } from './types';

interface GalleryImageProps {
  image: GalleryImageType;
}

export function GalleryImage({ image }: GalleryImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-square">
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-semibold text-lg">{image.title}</h3>
        </div>
      </div>
    </div>
  );
}