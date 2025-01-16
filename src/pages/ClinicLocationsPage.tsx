import React from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { ClinicCard } from '../components/clinic/ClinicCard';
import { ClinicBackground } from '../components/clinic/ClinicBackground';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, MessageSquare } from 'lucide-react';
import '../styles/clinic-gradient.css';

const clinics = [
  {
    id: 1,
    name: "Rajouri Garden Clinic",
    address: "A-132, Block A, Rajouri Garden, New Delhi - 110027",
    phone: "+91-11-25193887",
    hours: "Mon-Sat: 10:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/ZzM3AajdAsAtTWVn7",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4279126120446!2d77.12017747563739!3d28.646903383427684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036bbfffffff%3A0x190db336d0e20662!2sDental%20World%20-%20Best%20Dental%20Clinic%20in%20Delhi%20%7C%20Teeth%20Whitening%20%26%20RCT%20Treatment%20in%20Delhi%20%7C%20Dentist%20in%20Delhi!5e0!3m2!1sen!2sin!4v1735489065460!5m2!1sen!2sin" width="817" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    id: 2,
    name: "Punjabi Bagh Clinic",
    address: "Building No.-57, Road No.-42, West Punjabi Bagh, New Delhi - 110026",
    phone: "+91-11-45083723",
    hours: "Mon-Sat: 10:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/FJJV1P5njfrVhkWm8",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.654824732386!2d77.13203447563815!3d28.670052282375597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a501aed181%3A0xf9b1cdb8264f36ab!2sDental%20World%20-%20Dental%20Clinic%20in%20Delhi%20%7C%20Root%20Canal%20Treatment%20in%20Delhi%20%7C%20Invisible%20Braces%20%26%20Invisalign%20In%20Delhi!5e0!3m2!1sen!2sin!4v1735489109592!5m2!1sen!2sin" width="817" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  }
];

const navigationButtons = [
  {
    icon: Home,
    label: 'Home',
    path: '/',
    description: 'Return to homepage'
  },
  {
    icon: Phone,
    label: 'Contact Us',
    path: '/contact',
    description: 'Get in touch with us'
  },
  {
    icon: MessageSquare,
    label: 'Testimonials',
    path: '/testimonials',
    description: 'Read what our patients say'
  }
];

export function ClinicLocationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow">
        <ClinicBackground />
        <NavBar />
        
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading Section */}
            <div className="text-center mb-16 relative z-10">
              <h1 className="text-6xl font-bold mb-6 leading-tight
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Our Locations
              </h1>
              <p className="text-2xl font-medium
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Find Your Nearest Dental World Clinic
              </p>
            </div>
            
            <div className="space-y-12 mb-24">
              {clinics.map((clinic) => (
                <ClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>

            {/* Navigation Section */}
            <div className="mt-24">
              <h2 className="text-5xl font-bold text-center mb-16
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Explore More About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {navigationButtons.map((button, index) => {
                  const Icon = button.icon;
                  return (
                    <motion.button
                      key={button.path}
                      onClick={() => navigate(button.path)}
                      className="group relative flex flex-col items-center p-8 rounded-2xl
                               bg-white/10 backdrop-blur-md
                               border border-[#FFA833]/20
                               transition-all duration-300
                               hover:bg-gradient-to-br hover:from-[#FF6F3C]/10 hover:to-[#FFC76D]/10
                               hover:border-[#FFA833]/30"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                                    opacity-80 group-hover:opacity-100 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#FF6F3C]
                                   transition-colors duration-300">
                        {button.label}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700 text-center group-hover:text-gray-900
                                  transition-colors duration-300">
                        {button.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}