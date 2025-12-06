import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ModernCard = ({ title, subtitle, date, description, link, image }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-tr from-gray-900 to-black px-8 py-16 shadow-2xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {image && (
             <div className="mb-6 h-40 w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50">
                <img src={image} alt={title} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
             </div>
        )}

        <h3 className="mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-teko text-3xl font-bold text-transparent">
          {title}
        </h3>
        
        {subtitle && (
            <p className="mb-1 text-sm font-semibold text-lorange tracking-widest uppercase">
            {subtitle}
            </p>
        )}
        
        {date && (
            <p className="mb-4 text-xs font-mono text-gray-500">
            {date}
            </p>
        )}

        <p className="mb-8 text-sm leading-relaxed text-gray-400 font-poppins flex-grow">
          {description}
        </p>

        {link && (
            <a
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-lorange"
            >
            Visit Project
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover/link:translate-x-1"
            >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
            </a>
        )}
      </div>
    </motion.div>
  );
};

export default ModernCard;

