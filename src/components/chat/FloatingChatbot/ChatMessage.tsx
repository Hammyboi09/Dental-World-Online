import React from 'react';
import { motion } from 'framer-motion';
import type { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`
          max-w-[80%] p-3 rounded-2xl
          ${isBot
            ? 'bg-violet-500/10 text-white rounded-tl-none'
            : 'bg-[#FF6F3C]/10 text-white rounded-tr-none'
          }
        `}
      >
        {message.content}
      </div>
    </motion.div>
  );
}