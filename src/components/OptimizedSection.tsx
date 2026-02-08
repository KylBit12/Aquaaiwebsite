import React, { memo } from 'react';
import { motion } from 'motion/react';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const OptimizedSection = memo(({ children, className = '', delay = 0 }: OptimizedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
});

OptimizedSection.displayName = 'OptimizedSection';
