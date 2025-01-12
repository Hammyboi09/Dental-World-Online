import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { FooterContact } from './FooterContact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Dental World</h2>
            <p className="text-gray-400 mb-6">
              Providing exceptional dental care with advanced technology and a gentle touch.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dentalworlddelhi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/dentalworldonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com/@dentalworldonline"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/dental-world-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Orthodontics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <FooterContact />
          </div>

          {/* Location Maps Section */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              {/* Rajouri Garden Map */}
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Rajouri Garden</h4>
                <div className="w-full h-[150px] rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4279126120446!2d77.12017747563739!3d28.646903383427684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036bbfffffff%3A0x190db336d0e20662!2sDental%20World%20-%20Best%20Dental%20Clinic%20in%20Delhi%20%7C%20Teeth%20Whitening%20%26%20RCT%20Treatment%20in%20Delhi%20%7C%20Dentist%20in%20Delhi!5e0!3m2!1sen!2sin!4v1735489065460!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Punjabi Bagh Map */}
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Punjabi Bagh</h4>
                <div className="w-full h-[150px] rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.654824732386!2d77.13203447563815!3d28.670052282375597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a501aed181%3A0xf9b1cdb8264f36ab!2sDental%20World%20-%20Dental%20Clinic%20in%20Delhi%20%7C%20Root%20Canal%20Treatment%20in%20Delhi%20%7C%20Invisible%20Braces%20%26%20Invisalign%20In%20Delhi!5e0!3m2!1sen!2sin!4v1735489109592!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dental World. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}