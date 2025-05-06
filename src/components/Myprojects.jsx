import React from "react";
import PixelCard from "../blocks/PixelCard/PixelCard";
import Title from "./Title";
import photo from "../assets/images/clock.png";

const projects = [
  { 
    "name": "Digital Clock", 
    "link": "https://rama1832nathan.github.io/digital-clock/index2.html", 
    "color": "pink",
    "description": "A simple and stylish digital clock displaying real-time hours, minutes, and seconds."
  },
  { 
    "name": "Styled Login", 
    "link": "https://rama1832nathan.github.io/styled-login-JS/", 
    "color": "default",
    "description": "A visually appealing login page with smooth UI interactions."
  },
  { 
    "name": "Age Calculator", 
    "link": "https://rama1832nathan.github.io/age-calaculator/", 
    "color": "blue",
    "description": "Calculates age based on the user's date of birth."
  },
  { 
    "name": "Enhancer", 
    "link": "https://rama1832nathan.github.io/enhancer/", 
    "color": "yellow",
    "description": "A tool designed to enhance images or text with customizable features."
  },
  { 
    "name": "RPS Game", 
    "link": "https://rama1832nathan.github.io/rpsgame/", 
    "color": "pink",
    "description": "A classic Rock-Paper-Scissors game with an interactive UI."
  },
  { 
    "name": "CheckList App", 
    "link": "https://check-karo.vercel.app/", 
    "color": "blue",
    "description": "A to-do list app to efficiently manage and check off tasks."
  },
  { 
    "name": "Advice App", 
    "link": "https://salaahle.vercel.app/", 
    "color": "yellow",
    "description": "Generates random life advice with a single click."
  },
  { 
    "name": "Weather App", 
    "link": "https://climate-xi.vercel.app/", 
    "color": "yellow",
    "description": "Displays real-time weather conditions based on user location."
  }
];


const MyProjects = () => {
  return (
        <div id="projects" className="p-4 sm:p-8 relative">
            <Title name={"Projects"}/>

            <div className="bg-navy min-h-screen p-8 flex flex-wrap gap-6 justify-center">
            {projects.map((project, index) => (
                <PixelCard key={index} variant={project.color} gap={6} className="hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out border-2  bg-charcoal border-lorange">
                {/* <img src={photo} className="h-5/6"/> */}
                <div className="absolute top-4 text-lg text-lorange font-bold font-aldrich capitalize">{project.name}</div>
                <div className="absolute text-sm text-center text-justify p-5 text-white font-bold font-poppins capitalize">{project.description}</div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 bg-navy border-powder border-2 text-white px-4 py-2 rounded-lg text-sm hover:bg-lorange hover:text-black font-poppins hover:font-semibold transition-all duration-500 ease-in-out"
                >
                    View Website
                </a>
                </PixelCard>
            ))}
            </div>
        </div>
  );
};

export default MyProjects;
