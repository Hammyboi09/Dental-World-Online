import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { menuItems } from '../menuItems';
import { aboutItems } from './mobileMenuData';

interface MobileMenuContentProps {
  onClose: () => void;
}

export function MobileMenuContent({ onClose }: MobileMenuContentProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.2 }
    })
  };

  return (
    <div className="py-2">
      <AnimatePresence mode="wait">
        {!activeSubmenu ? (
          <div className="space-y-1">
            {/* About Us Button */}
            <motion.button
              variants={itemVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              onClick={() => setActiveSubmenu('about')}
              className="flex items-center justify-between w-full px-4 py-2.5
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
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2.5 w-full
                           text-white hover:bg-white/10 transition-all duration-300"
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
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/blog"
                onClick={onClose}
                className="flex items-center px-4 py-2.5 w-full
                         text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-medium">Blog</span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              custom={menuItems.length + 2}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center px-4 py-2.5 w-full
                         text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-medium">Contact Us</span>
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-1">
            <motion.button
              variants={itemVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              onClick={() => setActiveSubmenu(null)}
              className="flex items-center space-x-2 w-full px-4 py-2.5
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
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2.5
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
    </div>
  );
}