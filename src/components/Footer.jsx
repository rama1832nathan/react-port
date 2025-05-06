import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
 
        <div className="text-2xl font-extrabold text-amber-500 font-lucky text-stroke">
          Ramanathan   K
        </div>
        {/* <div style="font-size: 2xl; font-weight: 800; color: #f59e0b; font-family: 'Lucky'; -webkit-text-stroke: 2px black;">
  Ramanathan K
</div> */}


        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="https://www.linkedin.com/in/ramanathan-k-908a2322a" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300 ease-in-out">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/rama1832nathan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300 ease-in-out">
            <FaGithub size={28} />
          </a>
          <a href="https://www.instagram.com/raman_1832" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300 ease-in-out">
            <FaInstagram size={28} />
          </a>
          
        </div>
      </div>


      <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4 ">
        &copy; {new Date().getFullYear()} <span className="text-teal-400 font-medium">Ramanathan K</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
