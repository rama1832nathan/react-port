import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ title, subtitle, date, description, link }) => {
  return (
    <motion.div 
      className="relative w-full max-w-2xl bg-navy/60 backdrop-blur-md border border-saphire/30 rounded-lg p-8 pl-12 shadow-lg group hover:border-saphire/60 transition-colors duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      {/* Decorative Left Border/Timeline indicator */}
      <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-saphire to-navy rounded-l-lg" />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
        <div>
           <h3 className="text-2xl font-teko text-white tracking-wide">{title}</h3>
           <p className="text-md text-saphire font-semibold uppercase tracking-wider mt-1">{subtitle}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="inline-block px-3 py-1 bg-navy border border-gray-700 rounded-full text-xs text-ice font-mono shadow-inner">
            {date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <p className="text-gray-300 font-poppins text-sm leading-7 text-justify font-light">
          {description}
        </p>
      </div>

      {/* Link (Optional) */}
      {link && (
        <div className="mt-6 flex justify-end">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-powder hover:text-white flex items-center gap-1 transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-0.5"
            >
              View Reference ↗
            </a>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
