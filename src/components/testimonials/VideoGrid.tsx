import React from 'react';
import { motion } from 'framer-motion';

// YouTube video IDs from Dental World's channel
const videoIds = [
  'N7T75vlhwt8', '-2Aw4L-VWSs', 'N3UbkPFfuaY', 'nKpyNsYI10c',
  'J5orEeeEyL4', 'FoHVPbLSXsU', '240pCZZl9JU', 'bVTZ2b3hGaI',
  'RH3X9xSh7YY', 'FL7iALLoO5o', 'j51kVlRuJL8', 'QwxSoSBPArM',
  '2bN8atU4B_U', 'GwbrDtxFWhM', 'jYe8gmwEtqA', 'p9oqEPcS0cE',
  'nhHQq4AUSXM', 'ChdLFboYBcY', 'v4qW_Gw3z-A', 'er-BdCZgvAo',
  'r3k018LJt0c', 'sfmBzEyQdes', 'aj6g8G97oIM', 'o3NMxaVXf18',
  'C5o4V71q464', 'VUNeA-nd89E', 's-ySEIrG5q4', '2s3v2vk9H9I',
  'VzKbr48OjSg', 'JB7GIkOdIEQ', 'z-LctwzXeoY', 'umGdLJ3dWS0',
  '_z8r7flC5mw', 'bew5AuXdpsI', 'EtZjd04s8Oc', 'Nf6X0cbNMmE',
  'yz1cFhxNQFA', 'oIyQSStTm1U', 'cmRNQoOT7ms', 'p36mL-xbOuw',
  'Astg55AqFw8', 'hUHkC11JB1I', '_pkdCl_VuCw'
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videoIds.map((videoId, index) => (
        <motion.div
          key={`${videoId}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="aspect-video relative group"
        >
          {/* Glassmorphic Container */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl 
                       border border-white/20 overflow-hidden
                       group-hover:bg-black/50 group-hover:border-white/30 
                       transition-all duration-300 shadow-lg">
            {/* YouTube Iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Patient Testimonial ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}