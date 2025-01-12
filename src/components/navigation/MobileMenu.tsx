import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling } from 'hamburger-react';
import { menuItems } from './menuItems';
import { ChevronRight, Users, Lightbulb, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutItems = [
  { href: '/team', label: 'Our Team', icon: Users, description: 'Meet our expert professionals' },
  { href: '/ideology', label: 'Our Ideology', icon: Lightbulb, description: 'Our values and mission' },
  { href: '/certifications', label: 'Certifications', icon: Award, description: 'Our achievements' }
];

export function MobileMenu({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: { type: 'tween', duration: 0.3 }
    },
    open: {
      x: 0,
      transition: { type: 'tween', duration: 0.3 }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <div className={`relative ${className}`}>
      {/* Menu Button */}
      <button 
        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <Sling 
          toggled={isOpen} 
          toggle={setIsOpen}
          duration={0.3}
          color="white"
          size={24}
          distance="sm"
        />
      </button>
      
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>
      
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-[300px] z-50
                     bg-gray-900/95 backdrop-blur-md shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full 
                       bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <nav className="h-full overflow-y-auto pt-20 pb-6 px-4">
              {/* Main Menu */}
              <AnimatePresence mode="wait">
                {!activeSubmenu ? (
                  <div className="space-y-2">
                    {/* About Us Button */}
                    <motion.button
                      variants={itemVariants}
                      custom={0}
                      initial="closed"
                      animate="open"
                      onClick={() => setActiveSubmenu('about')}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg
                               text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-base font-medium">About Us</span>
                      <ChevronRight className="h-5 w-5" />
                    </motion.button>
                    
                    {/* Main Menu Items */}
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        custom={index + 1}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          to={item.href}
                          onClick={handleClose}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg
                                   text-white hover:bg-white/10 transition-all duration-300 w-full"
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Additional Links */}
                    <motion.div
                      variants={itemVariants}
                      custom={menuItems.length + 1}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to="/blog"
                        onClick={handleClose}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg
                                 text-white hover:bg-white/10 transition-all duration-300 w-full"
                      >
                        <span className="font-medium">Blog</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      custom={menuItems.length + 2}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to="/contact"
                        onClick={handleClose}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg
                                 text-white hover:bg-white/10 transition-all duration-300 w-full"
                      >
                        <span className="font-medium">Contact Us</span>
                      </Link>
                    </motion.div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <motion.button
                      variants={itemVariants}
                      custom={0}
                      initial="closed"
                      animate="open"
                      onClick={() => setActiveSubmenu(null)}
                      className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg
                               text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <ChevronRight className="h-5 w-5 rotate-180" />
                      <span className="font-medium">Back to Menu</span>
                    </motion.button>
                    
                    {aboutItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        custom={index + 1}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          to={item.href}
                          onClick={handleClose}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg
                                   text-white hover:bg-white/10 transition-all duration-300 w-full"
                        >
                          <item.icon className="h-5 w-5" />
                          <div>
                            <span className="font-medium block">{item.label}</span>
                            <span className="text-sm text-white/70">{item.description}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}