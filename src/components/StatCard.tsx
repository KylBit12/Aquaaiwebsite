import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedNumber({ value, duration = 2, suffix = '', prefix = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix, prefix]);

  return <span ref={ref}>0</span>;
}

interface StatCardProps {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

export function StatCard({ number, label, suffix, prefix, icon, gradient, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden group`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Icon */}
      <motion.div
        className="relative mb-6"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
      </motion.div>

      {/* Number */}
      <div className="relative text-5xl md:text-6xl mb-3 font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
        <AnimatedNumber value={number} suffix={suffix} prefix={prefix} />
      </div>

      {/* Label */}
      <div className="relative text-gray-400 text-sm md:text-base">{label}</div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
