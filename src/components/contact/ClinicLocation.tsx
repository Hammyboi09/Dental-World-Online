import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface ClinicLocationProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

export function ClinicLocation({ name, address, phone, hours, mapUrl }: ClinicLocationProps) {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 flex-shrink-0 text-[#FF6F3C]" />
            <p className="text-white/90">{address}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 flex-shrink-0 text-[#FF6F3C]" />
            <p className="text-white/90">{phone}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 flex-shrink-0 text-[#FF6F3C]" />
            <p className="text-white/90">{hours}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 h-[280px]">
        <iframe 
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
}