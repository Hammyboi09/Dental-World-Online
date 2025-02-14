import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold mb-4">Contact Us</h3>
      <div className="space-y-3">
        <div className="flex items-start text-gray-400 hover:text-white transition-colors">
          <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
          <div> <a href="tel:+919650044321">+91 9650044321</a>
          </div>
        </div>
        
        <a href="mailto:dentalworldonline@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
          <Mail className="h-5 w-5 mr-2" />
          dentalworldonline@gmail.com
        </a>
        
        <div className="flex items-start text-gray-400">
          <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
          <div>
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
  );
}