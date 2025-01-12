import React, { useState } from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { GalleryBackground } from '../components/gallery/GalleryBackground';
import { GalleryModal } from '../components/gallery/GalleryModal';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, UserCircle } from 'lucide-react';
import type { GalleryImage } from '../components/gallery/types';

// Gallery sections with their images
const galleryImages: Record<string, GalleryImage[]> = {
  clinic: [
    { id: 1, src: "elements/gallery/Clinic Facilities/1.png", title: "Waiting Area" },
    { id: 2, src: "elements/gallery/Clinic Facilities/2.png", title: "Comfortable Waiting Room" },
    { id: 3, src: "elements/gallery/Clinic Facilities/3.png", title: "Advanced Treatment Room 1" },
    { id: 4, src: "elements/gallery/Clinic Facilities/4.png", title: "Advanced Treatment Room 2" },
    { id: 5, src: "elements/gallery/Clinic Facilities/5.png", title: "Sterilization Center" },
    { id: 6, src: "elements/gallery/Clinic Facilities/6.png", title: "Consultation Room" },
    { id: 7, src: "elements/gallery/Clinic Facilities/7.png", title: "Modern Reception Area" },
    { id: 8, src: "elements/gallery/Clinic Facilities/8.png", title: "Comfortable Waiting Room" },
    { id: 9, src: "elements/gallery/Clinic Facilities/9.png", title: "Advanced Treatment Room 1" },
    { id: 10, src: "elements/gallery/Clinic Facilities/10.png", title: "Advanced Treatment Room 2" },
    { id: 11, src: "elements/gallery/Clinic Facilities/11.png", title: "Sterilization Center" },
    { id: 12, src: "Add-Relative-Path", title: "Consultation Room" },
    { id: 13, src: "Add-Relative-Path", title: "Advanced Treatment Room 2" },
    { id: 14, src: "Add-Relative-Path", title: "Sterilization Center" },
    { id: 15, src: "Add-Relative-Path", title: "Consultation Room" }
  ],
  equipment: [
    { id: 16, src: "elements/gallery/Equiptments/1.png", title: "Modern Dental Chair" },
    { id: 17, src: "elements/gallery/Equiptments/2.png", title: "Digital X-Ray System" },
    { id: 18, src: "elements/gallery/Equiptments/3.png", title: "Dental Microscope" },
    { id: 19, src: "Add-Relative-Path", title: "3D Scanner" },
    { id: 20, src: "Add-Relative-Path", title: "Dental Laser System" },
    { id: 21, src: "Add-Relative-Path", title: "Modern Dental Chair" },
    { id: 22, src: "Add-Relative-Path", title: "Digital X-Ray System" },
    { id: 23, src: "Add-Relative-Path", title: "Dental Microscope" },
    { id: 24, src: "Add-Relative-Path", title: "3D Scanner" },
    { id: 25, src: "Add-Relative-Path", title: "Dental Laser System" }
  ],
  transformations: [
    { id: 26, src: "elements/gallery/Smile Transformations/composite-restoration.png", title: "Dental Implant Case 1" },
    { id: 27, src: "elements/gallery/Smile Transformations/crowns-n-bridges.png", title: "Dental Implant Case 2" },
    { id: 28, src: "elements/gallery/Smile Transformations/crowns-n-bridges2.png", title: "Smile Makeover 1" },
    { id: 29, src: "elements/gallery/Smile Transformations/dental-veneers.png", title: "Smile Makeover 2" },
    { id: 30, src: "Add-Relative-Path", title: "Orthodontic Case 1" },
    { id: 31, src: "Add-Relative-Path", title: "Orthodontic Case 2" },
    { id: 32, src: "Add-Relative-Path", title: "Dental Implant Case 1" },
    { id: 33, src: "Add-Relative-Path", title: "Dental Implant Case 2" },
    { id: 34, src: "Add-Relative-Path", title: "Smile Makeover 1" },
    { id: 35, src: "Add-Relative-Path", title: "Smile Makeover 2" },
    { id: 36, src: "Add-Relative-Path", title: "Orthodontic Case 1" },
    { id: 37, src: "Add-Relative-Path", title: "Orthodontic Case 2" },
    { id: 38, src: "Add-Relative-Path", title: "Smile Makeover 1" },
    { id: 39, src: "Add-Relative-Path", title: "Smile Makeover 2" },
    { id: 40, src: "Add-Relative-Path", title: "Orthodontic Case 1" }
  ],
  team: [
    { id: 41, src: "elements/gallery/Team Pics/4.png", title: "Team Meeting" },
    { id: 42, src: "elements/gallery/Team Pics/2.png", title: "Staff Training" },
    { id: 43, src: "elements/gallery/Team Pics/5.png", title: "Community Event" },
    { id: 44, src: "elements/gallery/Team Pics/1.png", title: "Awards Ceremony" },
    { id: 45, src: "elements/gallery/Team Pics/3.png", title: "Team Meeting" },
    { id: 46, src: "Add-Relative-Path", title: "Staff Training" },
    { id: 47, src: "Add-Relative-Path", title: "Community Event" },
    { id: 48, src: "Add-Relative-Path", title: "Awards Ceremony" },
    { id: 49, src: "Add-Relative-Path", title: "Community Event" },
    { id: 50, src: "Add-Relative-Path", title: "Awards Ceremony" }
  ]
};

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
    icon: UserCircle,
    label: 'Our Team',
    path: '/team',
    description: 'Meet our experts'
  }
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow">
        <GalleryBackground />
        <NavBar />
        
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <div className="text-center mb-16 relative z-10">
              <h1 className="text-6xl font-bold mb-6 leading-tight
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600">
                Our Gallery
              </h1>
              <p className="text-2xl font-medium
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600">
                Explore Our State-of-the-Art Facilities and Success Stories
              </p>
            </div>

            {/* Gallery Sections */}
            <div className="space-y-16 mb-24">
              {/* Clinic Facilities */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Clinic Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.clinic.map((image, index) => (
                    <GalleryItem
                      key={image.id}
                      image={image}
                      index={index}
                      onClick={() => {
                        setSelectedImage(image);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              </section>

              {/* Advanced Equipment */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Advanced Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.equipment.map((image, index) => (
                    <GalleryItem
                      key={image.id}
                      image={image}
                      index={index}
                      onClick={() => {
                        setSelectedImage(image);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              </section>

              {/* Smile Transformations */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Smile Transformations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.transformations.map((image, index) => (
                    <GalleryItem
                      key={image.id}
                      image={image}
                      index={index}
                      onClick={() => {
                        setSelectedImage(image);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              </section>

              {/* Team & Events */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Team & Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.team.map((image, index) => (
                    <GalleryItem
                      key={image.id}
                      image={image}
                      index={index}
                      onClick={() => {
                        setSelectedImage(image);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Navigation Section */}
            <div className="mt-24">
              <h2 className="text-5xl font-bold text-center mb-16
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600">
                Explore More About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {navigationButtons.map((button, index) => (
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
                      <button.icon className="w-8 h-8 text-white" />
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
                ))}
              </div>
            </div>
          </div>
        </main>

        <GalleryModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <Footer />
    </div>
  );
}

function GalleryItem({ image, index, onClick }: { 
  image: GalleryImage; 
  index: number; 
  onClick: () => void; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="aspect-square relative overflow-hidden rounded-xl cursor-pointer
                 bg-black/40 backdrop-blur-md border border-white/20
                 group hover:border-white/30 transition-all duration-300"
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-300
                   group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white font-medium text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {image.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}