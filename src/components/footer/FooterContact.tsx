import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function FooterContact() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Contact Us</h3>
      <div className="space-y-4">
        {/* Phone Numbers */}
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-[#FF6F3C] flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-400">
              <a href="tel:+911145083723" className="hover:text-white transition-colors">+91-11-45083723</a><br />
              <a href="tel:+911125193887" className="hover:text-white transition-colors">+91-11-25193887</a><br />
              <a href="tel:+919650044321" className="hover:text-white transition-colors">+91-9650044321</a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-[#FF6F3C] flex-shrink-0 mt-1" />
          <a href="mailto:dentalworldonline@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            dentalworldonline@gmail.com
          </a>
        </div>

        {/* Locations */}
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-[#FF6F3C] flex-shrink-0 mt-1" />
          <div className="text-gray-400">
            <p className="mb-2">
              <strong className="text-gray-300">Rajouri Garden:</strong><br />
              A-2/132,<br />
              Rajouri Garden, New Delhi - 110027
            </p>
            <p>
              <strong className="text-gray-300">Punjabi Bagh:</strong><br />
              Building No.-57, Road No.-42,<br />
              West Punjabi Bagh, New Delhi - 110026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}