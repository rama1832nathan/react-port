import React from 'react';
import { motion } from 'framer-motion';

const GalaxyBackground = ({ variant = 'blue' }) => {
  // Generate random stars for a static but twinkling effect
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  const isBlue = variant === 'blue';

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Deep Space Gradient Base */}
      <div className={`absolute inset-0 bg-gradient-to-b ${isBlue ? 'from-transparent via-[#020c2b] to-transparent' : 'from-transparent via-black to-transparent'}`} />

      {/* Nebula / Galaxy Clouds */}
      <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full mix-blend-screen animate-pulse ${isBlue ? 'bg-purple-900/20' : 'bg-gray-700/20'}`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full mix-blend-screen animate-pulse ${isBlue ? 'bg-blue-900/20' : 'bg-gray-600/20'}`} style={{ animationDelay: '2s' }} />
      <div className={`absolute top-[40%] left-[30%] w-[40%] h-[40%] blur-[100px] rounded-full mix-blend-screen ${isBlue ? 'bg-indigo-900/10' : 'bg-gray-800/10'}`} />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-0"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Optional: Shooting Star (Pure CSS or Framer Motion) */}
      <div className="absolute top-0 left-[20%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 rotate-45 animate-shooting-star" />
    </div>
  );
};

export default GalaxyBackground;
