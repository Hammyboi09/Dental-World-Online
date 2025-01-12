import React from 'react';

interface LocationMapProps {
  title: string;
  mapUrl: string;
}

export function LocationMap({ title, mapUrl }: LocationMapProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
        <iframe 
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}