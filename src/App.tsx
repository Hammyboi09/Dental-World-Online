import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navigation/NavBar';
import { Hero } from './components/Hero';
import { Services } from './components/services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/footer/Footer';
import { TeamPage } from './pages/TeamPage';
import { IdeologyPage } from './pages/IdeologyPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ServicesPage } from './pages/ServicesPage';
import { CostPage } from './pages/CostPage';
import { ClinicLocationsPage } from './pages/ClinicLocationsPage';
import { FAQPage } from './pages/FAQPage';
import { AIConsultationPage } from './pages/AIConsultationPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { FloatingChatbot } from './components/chat/FloatingChatbot/FloatingChatbot';
import { AudioPlayer } from './components/audio/AudioPlayer';
import { PartnersSection } from './components/partners/PartnersSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="relative">
        <section id="hero" className="relative">
          <Hero />
        </section>

        <section id="services" className="relative">
          <Services />
        </section>

        {/* Combined background for testimonials and partners with reduced gap */}
        <div className="relative">
          {/* Background with radial gradient */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
              background: `radial-gradient(circle at top left,
                               #a6c8f0 0%,
                               #fefefe 40%,
                               #fefefe 60%,
                               #ffc4b3 100%),
                             #fefefe`,
            }}
          />

          <section id="testimonials" className="relative pb-0"> {/* Removed bottom padding */}
            <Testimonials />
          </section>

          <section id="partners" className="relative pb-12"> {/* Removed top padding */}
            <PartnersSection />
          </section>
        </div>

        <section id="contact" className="relative">
          <Footer />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/ideology" element={<IdeologyPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cost" element={<CostPage />} />
        <Route path="/locations" element={<ClinicLocationsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ai-consultation" element={<AIConsultationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
      <FloatingChatbot />
      <AudioPlayer />
    </Router>
  );
}

export default App;