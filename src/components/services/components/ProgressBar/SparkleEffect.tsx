import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export function SparkleEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Player
        autoplay
        loop
        src="https://lottie.host/32e8eab5-bc41-4912-9e7e-c19e667b046f/LKlL4t0Y4z.json"
        style={{ 
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '60px',
          height: '60px',
          filter: 'brightness(1.2)'
        }}
      />
    </div>
  );
}