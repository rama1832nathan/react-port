import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Replace with any icon library you prefer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or name (optional) */}
          {/* <div className="text-powder font-bold text-xl md:hidden">MyPortfolio</div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-powder font-semibold font-teko text-2xl justify-center w-full">
            <a href="#about" className="hover:text-white transition-all">About</a>
            <a href="#techstack" className="hover:text-white transition-all">Tech Stack</a>
            <a href="#experience" className="hover:text-white transition-all">Experience</a>
            <a href="#projects" className="hover:text-white transition-all">Projects</a>
            <a href="#contact" className="hover:text-white transition-all">Contact Me</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-powder focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t text-center border-gray-700 text-powder font-teko text-xl p-4 space-y-2">
          <a href="#about" className="block hover:text-white" onClick={toggleMenu}>About</a>
          <a href="#techstack" className="block hover:text-white" onClick={toggleMenu}>Tech Stack</a>
          <a href="#experience" className="block hover:text-white" onClick={toggleMenu}>Experience</a>
          <a href="#projects" className="block hover:text-white" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-white" onClick={toggleMenu}>Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
