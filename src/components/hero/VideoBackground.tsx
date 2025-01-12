import React from 'react';

export function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/elements/home/hero/hero-poster.jpg"
      >
        <source
          src="/elements/home/hero/hero-video-bg.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/60 to-gray-900/50" />
    </div>
  );
}