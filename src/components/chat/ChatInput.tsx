import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, isLoading, onInputChange, onSubmit }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t border-white/10">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Type your dental question here..."
          className="flex-1 bg-white/5 text-white placeholder-white/40
                   rounded-xl px-4 py-3 focus:outline-none focus:ring-2
                   focus:ring-violet-500/50 border border-white/10"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="bg-gradient-to-r from-violet-600 to-indigo-600
                   hover:from-violet-500 hover:to-indigo-500
                   text-white px-6 py-3 rounded-xl
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 hover:shadow-lg
                   hover:shadow-violet-500/25"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}