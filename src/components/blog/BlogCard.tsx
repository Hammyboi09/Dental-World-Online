import React from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from './types';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden 
                 shadow-lg hover:shadow-[#FF6F3C]/10 border border-white/20
                 transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col h-[calc(100%-192px)] bg-white/5 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{post.readTime}</span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF6F3C] via-[#FFA833] to-[#FFC76D]
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
            <span className="relative z-10">Read</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}