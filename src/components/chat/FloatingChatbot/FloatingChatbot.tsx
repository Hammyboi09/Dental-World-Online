import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-12 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-4"
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                 p-1 rounded-full shadow-lg hover:shadow-xl
                 transition-shadow duration-300 relative"
      >

        
{isOpen ? (
          <div className="bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D] p-1 rounded-full">
            <X className="w-12 h-12 text-white" />
          </div>
        ) : (
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden"> 
            <img 
              src="/elements/chatbot/flossy.gif"
              alt="Flossy AI Assistant"
              className="w-full h-full object-contain scale-100 transform -translate-y-1" 
            />
          </div>
        )}
      </motion.button>
    </div>
  );
}

