import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { ChatMessage } from '../ChatMessage';
import { motion } from 'framer-motion';
import type { Message } from './types';
import { getChatResponse } from '../../../lib/gemini';
import { chatCommands } from '../../../lib/chatCommands';

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content:
        "Hi! I'm Flossy, your dental care assistant. You can ask me any dental or dentistry-related questions, or use the command buttons below for quick access to information.",
      isFirstMessage: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId] = useState(`session-${Date.now()}`);

  // Dynamic dimensions based on screen size
  const [dimensions, setDimensions] = useState({
    width: '90vw',
    height: 'auto',
    maxWidth: '450px',
    maxHeight: '80vh',
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        // Mobile
        setDimensions({
          width: '75vw',
          height: 'auto',
          maxWidth: '75vw',
          maxHeight: '70vh',
        });
      } else if (width <= 1024) {
        // Tablet
        setDimensions({
          width: '400px',
          height: 'auto',
          maxWidth: '90vw',
          maxHeight: '80vh',
        });
      } else {
        // Desktop
        setDimensions({
          width: '450px',
          height: 'auto',
          maxWidth: '450px',
          maxHeight: '80vh',
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCommand = async (command: string) => {
    const cmd = chatCommands.find((c) => c.command === command);
    if (cmd) {
      setInput('');
      setMessages((prev) => [...prev, { type: 'user', content: command }]);
      setIsTyping(true);
      try {
        const response = await cmd.action();
        setMessages((prev) => [...prev, { type: 'bot', content: response }]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            content:
              "I apologize, but I'm having trouble processing your request. Please try again.",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { type: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      let response: string;
      if (userMessage.startsWith('/')) {
        const [command, ...args] = userMessage.split(' ');
        const cmd = chatCommands.find((c) => c.command === command);
        response = cmd
          ? await cmd.action(args.join(' '))
          : 'Unknown command. Use /help to see available commands.';
      } else {
        response = await getChatResponse(userMessage);
      }
      setMessages((prev) => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          content:
            "I apologize, but I'm having trouble processing your request. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className="fixed bottom-32 right-8 z-50"
      style={{
        width: dimensions.width,
        maxWidth: dimensions.maxWidth,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-gray-900 rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col"
        style={{
          height: dimensions.height,
          maxHeight: dimensions.maxHeight,
        }}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D] relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="/elements/chatbot/flossyimg.gif"
                  alt="Flossy AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold">
                Flossy - Your Dental Assistant
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/30 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={`${sessionId}-${index}`}
              message={message}
              onCommandClick={handleCommand}
            />
          ))}
          {isTyping && (
            <div className="text-white/50 text-sm">Flossy is typing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message or use a command..."
              className="flex-1 bg-white/5 text-white placeholder-white/40
                       rounded-xl px-4 py-2 focus:outline-none focus:ring-2
                       focus:ring-[#FFA833]/50 border border-white/10"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2 bg-gradient-to-r from-[#FF6F3C] to-[#FFA833]
                       rounded-xl text-white disabled:opacity-50
                       disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}