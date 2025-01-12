import React from 'react';
import { GalleryImage } from './GalleryImage';
import { galleryImages } from './galleryData';

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryImages.map((image) => (
        <GalleryImage key={image.id} image={image} />
      ))}
    </div>
  );
}