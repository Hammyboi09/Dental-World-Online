import React from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { GradientBackground } from '../components/about/GradientBackground';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Shield, Cookie } from 'lucide-react';

export function TermsOfServicePage() {
  const navigate = useNavigate();

  const navigationButtons = [
    {
      icon: Home,
      label: 'Home',
      path: '/',
      description: 'Return to homepage'
    },
    {
      icon: Shield,
      label: 'Privacy Policy',
      path: '/privacy-policy',
      description: 'View our privacy policy'
    },
    {
      icon: Cookie,
      label: 'Cookie Policy',
      path: '/cookie-policy',
      description: 'Learn about our cookie usage'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow">
        <GradientBackground />
        <NavBar />
        
        <main className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 mb-16
                          border border-white/20 shadow-lg">
              <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg prose-invert">
                <p className="text-white/90 mb-6">
                  Last updated: March 15, 2024
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-white/90">
                    By accessing and using Dental World's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
                  <p className="text-white/90 mb-4">
                    Dental World provides dental care services including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>General dentistry</li>
                    <li>Cosmetic dentistry</li>
                    <li>Dental implants</li>
                    <li>Orthodontic treatments</li>
                    <li>Emergency dental care</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Appointments and Cancellations</h2>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>24-hour notice required for cancellations</li>
                    <li>Late cancellations may incur a fee</li>
                    <li>Repeated no-shows may result in service denial</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>Payment is due at the time of service</li>
                    <li>We accept major credit cards and insurance</li>
                    <li>Payment plans available for eligible treatments</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Website Usage</h2>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>Content is for informational purposes only</li>
                    <li>No unauthorized use or reproduction of content</li>
                    <li>We reserve the right to modify the website</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Liability</h2>
                  <p className="text-white/90">
                    Dental World is not liable for:
                  </p>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>Website interruptions or errors</li>
                    <li>Third-party content or links</li>
                    <li>Indirect or consequential damages</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to Terms</h2>
                  <p className="text-white/90">
                    We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
                  <p className="text-white/90">
                    For questions about these Terms of Service, contact us at:<br />
                    Email: dentalworldonline@gmail.com<br />
                    Phone: +91-11-45083723
                  </p>
                </section>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-24">
              <h2 className="text-5xl font-bold text-center mb-16
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-gray-800 to-gray-600
                           drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                Explore More
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
      </div>

      <Footer />
    </div>
  );
}