import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link, image }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm h-80 bg-navy border border-gray-800 rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-lorange/10 transition-shadow duration-300"
      whileHover={{ y: -8 }}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 207, 255, 0.15), transparent 40%)`,
        }}
      />

      {/* Background Image & Overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 scale-100 group-hover:scale-110" />
        </div>
      )}
      <div className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/${image ? '40' : '90'} z-0`} />
      
      {/* Decorative Circle (Background Art) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-lorange/10 rounded-full blur-2xl group-hover:bg-lorange/20 transition-all duration-500 z-0" />

      {/* Content Container */}
      <div className="relative z-20 h-full p-6 flex flex-col justify-end">
        
        {/* Title */}
        <h3 className="text-3xl font-teko font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>

        {/* Description (Revealed/Expanded on Hover mostly, but visible) */}
        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
             <p className="text-gray-300 font-poppins text-sm mb-4 line-clamp-4 leading-relaxed">
                {description}
             </p>
             
             {/* Button */}
             <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-lorange text-lorange font-teko text-lg rounded hover:bg-lorange hover:text-black transition-colors duration-300"
             >
                VISIT WEBSITE
             </a>
        </div>

        {/* Initial concise view (hidden on hover to make room? or kept? Let's keep a teaser) */}
        <div className="group-hover:hidden transition-opacity duration-300">
            <div className="w-12 h-1 bg-lorange rounded-full mb-2"></div>
            <p className="text-gray-400 text-xs uppercase tracking-widest font-aldrich">Hover to explore</p>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
