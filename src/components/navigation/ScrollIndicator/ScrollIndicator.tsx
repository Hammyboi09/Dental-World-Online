import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { SectionButton } from './SectionButton';
import { ProgressBar } from './ProgressBar';
import { sections } from './sections';
import { styles } from './styles';

export function ScrollIndicator() {
  const { activeSection, progress, scrollToSection } = useScrollProgress();

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={styles.wrapper}>
        {/* Progress Bar */}
        <ProgressBar progress={progress} />

        {/* Section Buttons */}
        <div className={styles.sectionList}>
          <AnimatePresence>
            {sections.map((section, index) => (
              <SectionButton
                key={section.id}
                section={section}
                isActive={section.id === activeSection}
                progress={progress}
                index={index}
                onClick={() => scrollToSection(section.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}