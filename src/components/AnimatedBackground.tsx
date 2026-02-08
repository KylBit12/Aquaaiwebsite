import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ParticleProps {
  index: number;
}

function Particle({ index }: ParticleProps) {
  const [position, setPosition] = useState({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }, 5000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        ease: 'easeInOut',
      }}
      style={{
        boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
      }}
    />
  );
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(30)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}

export function FloatingIcons() {
  const icons = ['🎤', '💬', '🚀', '⚡', '🌟', '💻'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-10"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}