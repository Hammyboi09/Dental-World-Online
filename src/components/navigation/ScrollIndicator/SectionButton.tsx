import React from 'react';
import { motion } from 'framer-motion';
import { sectionIcons } from './icons';
import { styles } from './styles';
import { sections } from './sections';

interface SectionButtonProps {
  section: {
    id: string;
    label: string;
  };
  isActive: boolean;
  progress: number;
  index: number;
  onClick: () => void;
}

export function SectionButton({ section, isActive, progress, index, onClick }: SectionButtonProps) {
  const Icon = sectionIcons[section.id];
  const isInView = progress >= (index / sections.length) * 100;

  return (
    <motion.button
      onClick={onClick}
      className={styles.sectionButton}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Label */}
      <motion.span 
        className={styles.sectionLabel}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
        transition={{ duration: 0.2 }}
      >
        {section.label}
      </motion.span>

      {/* Icon Container */}
      <motion.div
        className={`
          ${styles.iconContainer.base}
          ${isActive ? styles.iconContainer.active : ''}
          ${isInView ? styles.iconContainer.inView : ''}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Metallic Gradient Effect for Active State */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
        )}

        {/* Icon */}
        <Icon className={`
          ${styles.icon.base}
          ${isActive ? styles.icon.active : ''}
          ${isInView ? styles.icon.inView : ''}
        `} />
      </motion.div>
    </motion.button>
  );
}