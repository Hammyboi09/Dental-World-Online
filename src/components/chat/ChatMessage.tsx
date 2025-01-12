import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '../../types/chat';
import { CommandButton } from './CommandButton';
import { chatCommands } from '../../lib/chatCommands';

interface ChatMessageProps {
  message: ChatMessageType;
  onCommandClick?: (command: string) => void;
}

export function ChatMessage({ message, onCommandClick }: ChatMessageProps) {
  const isFirstMessage = message.type === 'bot' && message.isFirstMessage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`
        flex items-start space-x-2 max-w-[80%]
        ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}
      `}>
        <div className={`
          p-2 rounded-full
          ${message.type === 'user' ? 'bg-[#FF6F3C]/20' : 'bg-violet-500/20'}
        `}>
          {message.type === 'user' 
            ? <MessageSquare className="w-5 h-5 text-[#FF6F3C]" />
            : <Bot className="w-5 h-5 text-violet-400" />
          }
        </div>
        
        <div className="space-y-4">
          <div className={`
            p-4 rounded-2xl backdrop-blur-sm
            ${message.type === 'user'
              ? 'bg-[#FF6F3C]/10 text-white'
              : 'bg-violet-500/10 text-white'
            }
          `}>
            <div className="whitespace-pre-wrap">{message.content}</div>
          </div>

          {isFirstMessage && onCommandClick && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {chatCommands.map((cmd) => (
                <CommandButton
                  key={cmd.command}
                  command={cmd.command}
                  description={cmd.description}
                  onClick={() => onCommandClick(cmd.command)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}