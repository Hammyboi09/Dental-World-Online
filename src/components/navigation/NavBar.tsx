import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { AboutDropdown } from './AboutDropdown';
import { MenuDropdown } from './MenuDropdown';
import { MobileDropdownMenu } from './mobile/MobileDropdownMenu';
import { useNavigation } from './hooks/useNavigation';

export function NavBar() {
  const { isScrolled } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 safe-padding-top"
      role="banner"
    >
      <nav
        className={`
          max-w-7xl mx-auto rounded-3xl px-4 sm:px-6 lg:px-8 py-4
          transition-all duration-500 ease-in-out
          backdrop-blur-md border border-white/10
          ${isScrolled 
            ? 'bg-white/10 shadow-lg' 
            : 'bg-white/5'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <AboutDropdown />
            
            <a 
              href="/blog"
              className="text-white hover:text-sky-400
                       px-4 py-2 rounded-lg transition-all duration-300
                       min-h-[44px] min-w-[44px] flex items-center"
            >
              Blog
            </a>
            
            <a 
              href="/contact"
              className="text-white hover:text-sky-400
                       px-4 py-2 rounded-lg transition-all duration-300
                       min-h-[44px] min-w-[44px] flex items-center"
            >
              Contact Us
            </a>

            <MenuDropdown />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileDropdownMenu 
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}