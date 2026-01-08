'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Smooth scroll spring config
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

// 1. Parallax Section
export function ParallaxSection({ children, speed = 0.5 }: { children: ReactNode; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, springConfig);

  return (
    <motion.div ref={ref} style={{ y: smoothY }}>
      {children}
    </motion.div>
  );
}

// 2. Fade In View (optimized)
export function FadeInView({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 3. Scale In View
export function ScaleInView({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// 4. Slide In View
export function SlideInView({ children, direction = 'left', delay = 0 }: { children: ReactNode; direction?: 'left' | 'right' | 'up' | 'down'; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...variants[direction] }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 5. Magnetic Button
export function MagneticButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}

// 6. Hover Card
export function HoverCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

// 7. Stagger Container
export function StaggerContainer({ children, staggerDelay = 0.1 }: { children: ReactNode; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// 8. Stagger Item
export function StaggerItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// 9. Smooth Reveal Text
export function RevealText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// 10. Floating Element
export function FloatingElement({ children, duration = 3 }: { children: ReactNode; duration?: number }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
}

// 11. Gradient Text Animation
export function GradientText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: '200% 200%'
      }}
    >
      {children}
    </motion.span>
  );
}

// 12. Pulse Effect
export function PulseEffect({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// 13. Smooth Page Transition
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 14. Scroll Progress Circle
export function ScrollProgressCircle() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, springConfig);

  return (
    <svg className="fixed top-24 right-6 w-12 h-12 z-50" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#e5e7eb"
        strokeWidth="8"
        fill="none"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="#2563eb"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        style={{
          pathLength,
          rotate: -90,
          transformOrigin: "50% 50%"
        }}
        strokeDasharray="0 1"
      />
    </svg>
  );
}

// 15. Ripple Effect Button
export function RippleButton({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
      {children}
    </motion.button>
  );
}

// Export all
export {
  springConfig
};
