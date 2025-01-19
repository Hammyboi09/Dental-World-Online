import React from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactBackground } from '../components/contact/ContactBackground';
import { ClinicLocation } from '../components/contact/ClinicLocation';
import { ExploreMoreSection } from '../components/contact/ExploreMoreSection';

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow">
        <ContactBackground />
        <NavBar />
        
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16 relative z-10">
              <h1 className="text-6xl font-bold mb-6 leading-tight
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600">
                Contact Us
              </h1>
              <p className="text-2xl font-medium
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600">
                We're Here to Help - Reach Out Today
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
              {/* Left Column - Contact Info */}
              <div className="space-y-4">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/10">
                  <ContactInfo />
                </div>
              </div>

              {/* Right Column - Clinic Locations */}
              <div className="space-y-8">
                <ClinicLocation
                  name="Rajouri Garden Clinic"
                  address="A-2/132, Rajouri Garden, New Delhi - 110027"
                  phone="+91-11-25193887"
                  hours="Mon-Sat: 10:00 AM - 8:00 PM"
                  mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4279126120446!2d77.12017747563739!3d28.646903383427684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036bbfffffff%3A0x190db336d0e20662!2sDental%20World%20-%20Best%20Dental%20Clinic%20in%20Delhi%20%7C%20Teeth%20Whitening%20%26%20RCT%20Treatment%20in%20Delhi%20%7C%20Dentist%20in%20Delhi!5e0!3m2!1sen!2sin!4v1735489065460!5m2!1sen!2sin"
                />
                
                <ClinicLocation
                  name="Punjabi Bagh Clinic"
                  address="Building No.-57, Road No.-42, West Punjabi Bagh, New Delhi - 110026"
                  phone="+91-11-45083723"
                  hours="Mon-Sat: 10:00 AM - 8:00 PM"
                  mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.654824732386!2d77.13203447563815!3d28.670052282375597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a501aed181%3A0xf9b1cdb8264f36ab!2sDental%20World%20-%20Dental%20Clinic%20in%20Delhi%20%7C%20Root%20Canal%20Treatment%20in%20Delhi%20%7C%20Invisible%20Braces%20%26%20Invisalign%20In%20Delhi!5e0!3m2!1sen!2sin!4v1735489109592!5m2!1sen!2sin"
                />
              </div>
            </div>

            {/* Explore More Section */}
            <ExploreMoreSection />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}