import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { TeamMember } from './types';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

export function TeamModal({ isOpen, onClose, member }: TeamModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl mx-auto z-50 
                     rounded-2xl shadow-2xl overflow-hidden
                     max-h-[90vh] sm:max-h-[95vh] flex flex-col"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 p-3 rounded-full 
                       bg-black/20 hover:bg-black/30
                       backdrop-blur-md border border-white/10
                       transition-all duration-300 z-10
                       group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white transition-transform duration-300
                          group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
            </motion.button>

            {/* Content Container */}
            <div className="flex flex-col sm:flex-row h-full max-h-full overflow-hidden">
              {/* Image Section */}
              <div className="h-64 sm:h-auto sm:w-[400px] relative shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                
                {/* Name and Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-lg font-medium bg-gradient-to-r from-sky-400 to-orange-400 
                              bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Content Section with Scrollable Area */}
              <div className="flex-grow bg-black/40 backdrop-blur-md overflow-hidden">
                <div className="h-full overflow-y-auto">
                  <div className="p-8 space-y-8 max-h-[80vh] sm:max-h-[85vh] overflow-y-auto">
                    {/* Qualification Section */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        Qualification
                      </h4>
                      <p className="text-white/90 font-medium leading-relaxed
                                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                        {member.qualificationFull}
                      </p>
                    </div>
                    
                    {/* About Section */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        About
                      </h4>
                      <p className="text-white/90 leading-relaxed whitespace-pre-wrap
                                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                        {member.about}
                      </p>
                    </div>

                    {/* Additional Spacing for Mobile Scroll */}
                    <div className="h-6 sm:h-0" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
