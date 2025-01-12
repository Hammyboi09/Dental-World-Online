import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className={styles.progressBar.container}>
      <motion.div 
        className={styles.progressBar.fill}
        style={{ height: `${progress}%` }}
      >
        {/* Gradient Glow */}
        <div className={styles.progressBar.glow} />
        
        {/* Shimmer Effect */}
        <motion.div
          className={styles.progressBar.shimmer}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </motion.div>
    </div>
  );
}