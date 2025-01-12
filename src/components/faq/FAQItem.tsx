import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden
                border border-white/20 hover:border-white/30 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-[#FF6F3C] transition-transform duration-300
                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
                     ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4"
          >
            <p className="text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}