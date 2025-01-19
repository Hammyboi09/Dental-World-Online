import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Youtube, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
      
      <div className="space-y-3">
        {/* Phone Numbers */}
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-[#FF6F3C]" />
          <div>
            <h4 className="text-white font-medium mb-1">Phone Numbers</h4>
            <div className="text-white">
              <a href="tel:+911145083723" className="text-white">+91-11-45083723</a><br />
              <a href="tel:+911125193887" className="text-white">+91-11-25193887</a><br />
              <a href="tel:+919650044321" className="text-white">+91-9650044321</a>
            </div>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-[#FF6F3C]" />
          <div>
            <h4 className="text-white font-medium mb-1">Email</h4>
            <a href="mailto:dentalworldonline@gmail.com" className="text-white">
              dentalworldonline@gmail.com
            </a>
          </div>
        </div>
        
        {/* Locations */}
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-[#FF6F3C]" />
          <div>
            <h4 className="text-white font-medium mb-2">Locations</h4>
            <div className="text-white">
              <p className="mb-2">
                <strong>Rajouri Garden's Clinic:</strong><br />
                A-2/132,<br />
                Rajouri Garden,<br />
                New Delhi - 110027
              </p>
              <p>
                <strong>Punjabi Bagh's Clinic:</strong><br />
                Building No.-57, Road No.-42,<br />
                West Punjabi Bagh,<br />
                New Delhi - 110026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Grid */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">Our Social's</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919650044321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-xl
                     bg-emerald-500/90 backdrop-blur-md
                     border border-emerald-400/30 hover:bg-emerald-500/95
                     transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8 text-white mb-2" />
            <span className="text-white font-medium">WhatsApp</span>
          </a>

          {/* Gmail */}
          <a
            href="mailto:dentalworldonline@gmail.com"
            className="flex flex-col items-center justify-center p-4 rounded-xl
                     bg-red-500/90 backdrop-blur-md
                     border border-red-400/30 hover:bg-red-500/95
                     transition-all duration-300"
          >
            <Mail className="w-8 h-8 text-white mb-2" />
            <span className="text-white font-medium">Gmail</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dentalworlddelhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-xl
                     bg-gradient-to-br from-purple-500/90 via-pink-500/90 to-orange-500/90
                     backdrop-blur-md border border-pink-400/30
                     hover:from-purple-500/95 hover:via-pink-500/95 hover:to-orange-500/95
                     transition-all duration-300"
          >
            <Instagram className="w-8 h-8 text-white mb-2" />
            <span className="text-white font-medium">Instagram</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@dentalworldonline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-xl
                     bg-red-600/90 backdrop-blur-md
                     border border-red-500/30 hover:bg-red-600/95
                     transition-all duration-300"
          >
            <Youtube className="w-8 h-8 text-white mb-2" />
            <span className="text-white font-medium">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}