import React from 'react';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../components/footer/Footer';
import { GradientBackground } from '../components/about/GradientBackground';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Shield, FileText } from 'lucide-react';

export function CookiePolicyPage() {
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
      icon: FileText,
      label: 'Terms of Service',
      path: '/terms-of-service',
      description: 'View our terms of service'
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
              <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
              
              <div className="prose prose-lg prose-invert">
                <p className="text-white/90 mb-6">
                  Last updated: March 15, 2024
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
                  <p className="text-white/90">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better website experience and understand how you use our site.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
                  
                  <h3 className="text-xl font-medium text-white mb-3">2.1 Essential Cookies</h3>
                  <p className="text-white/90 mb-4">
                    Required for basic website functionality:
                  </p>
                  <ul className="list-disc pl-6 text-white/90 mb-4">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Basic functionality</li>
                  </ul>

                  <h3 className="text-xl font-medium text-white mb-3">2.2 Analytics Cookies</h3>
                  <p className="text-white/90 mb-4">
                    Help us understand how visitors use our website:
                  </p>
                  <ul className="list-disc pl-6 text-white/90 mb-4">
                    <li>Page views and navigation</li>
                    <li>Time spent on pages</li>
                    <li>Error encounters</li>
                  </ul>

                  <h3 className="text-xl font-medium text-white mb-3">2.3 Functionality Cookies</h3>
                  <p className="text-white/90 mb-4">
                    Remember your preferences:
                  </p>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>Language settings</li>
                    <li>Login information</li>
                    <li>Customization options</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Cookie Management</h2>
                  <p className="text-white/90 mb-4">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>Block all cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Allow only essential cookies</li>
                    <li>Receive alerts about cookies</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
                  <p className="text-white/90 mb-4">
                    Some third-party services we use may place cookies:
                  </p>
                  <ul className="list-disc pl-6 text-white/90">
                    <li>Google Analytics</li>
                    <li>Social media plugins</li>
                    <li>Payment processors</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Updates to This Policy</h2>
                  <p className="text-white/90">
                    We may update this Cookie Policy periodically. Please check back regularly to stay informed about our use of cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
                  <p className="text-white/90">
                    If you have questions about our Cookie Policy, please contact us at:<br />
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