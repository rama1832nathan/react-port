import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="relative max-w-4xl w-full bg-navy/80 backdrop-blur-md shadow-lg border border-gray-700 rounded-full px-6 py-3 overflow-hidden">
        
        {/* Scroll Progress Bar attached to Navbar */}
        <motion.div
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "0%",
            }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-lorange z-50"
        />

        <div className="flex items-center justify-between h-10">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-powder font-semibold font-teko text-xl justify-center w-full">
            <a href="#about" className="hover:text-lorange transition-all">About</a>
            <a href="#techstack" className="hover:text-lorange transition-all">Tech Stack</a>
            <a href="#experience" className="hover:text-lorange transition-all">Experience</a>
            <a href="#projects" className="hover:text-lorange transition-all">Projects</a>
            <a href="#contact" className="hover:text-lorange transition-all">Contact Me</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden w-full flex justify-end">
            <button onClick={toggleMenu} className="text-powder focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-navy/95 backdrop-blur-md border border-gray-700 rounded-2xl p-4 space-y-4 shadow-xl z-50 text-center">
            <a href="#about" className="block text-powder hover:text-lorange font-teko text-xl" onClick={toggleMenu}>About</a>
            <a href="#techstack" className="block text-powder hover:text-lorange font-teko text-xl" onClick={toggleMenu}>Tech Stack</a>
            <a href="#experience" className="block text-powder hover:text-lorange font-teko text-xl" onClick={toggleMenu}>Experience</a>
            <a href="#projects" className="block text-powder hover:text-lorange font-teko text-xl" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="block text-powder hover:text-lorange font-teko text-xl" onClick={toggleMenu}>Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
