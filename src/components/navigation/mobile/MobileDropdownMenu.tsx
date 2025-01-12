import React, { useState } from 'react';
import { Sling } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenuContent } from './MobileMenuContent';

export function MobileDropdownMenu({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

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
      
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-72 z-50
                     bg-gray-900/95 backdrop-blur-md rounded-xl shadow-xl
                     border border-white/10"
          >
            <MobileMenuContent onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}