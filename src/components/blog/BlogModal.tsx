import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { BlogPost } from './types';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Darker backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal with darker background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl 
                     shadow-2xl overflow-hidden mx-auto z-50 border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full 
                       bg-black/20 hover:bg-black/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white drop-shadow-lg" />
            </button>

            {/* Banner Image */}
            <div className="h-64 relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {post.title}
                </h2>
                <p className="text-white/90 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {post.readTime}
                </p>
              </div>
            </div>

            {/* Content with darker background */}
            <div className="p-8 bg-black/40 backdrop-blur-md max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="prose prose-lg max-w-none">
                <p className="text-white/90 leading-relaxed whitespace-pre-line text-lg
                           drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {post.content}
                </p>
              </div>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-3 rounded-lg
                         bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
                         text-white font-medium
                         hover:shadow-lg hover:shadow-[#FF6F3C]/20
                         transition-all duration-300
                         transform relative overflow-hidden
                         group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                             opacity-0 group-hover:opacity-100 
                             -translate-x-full group-hover:translate-x-full 
                             transition-all duration-700 ease-out" />
                <span className="relative z-10">Close</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}