import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "./Title";
import clock from "../assets/images/clock.png";
import login from "../assets/images/login.png";
import birth from "../assets/images/birth.png";
import enhancer from "../assets/images/enhancer.png";
import rps from "../assets/images/rps.png";
import checklist from "../assets/images/checklist.png";
import advice from "../assets/images/advice.png";
import weather from "../assets/images/weather.png";

const projects = [
  { 
    "name": "Digital Clock", 
    "link": "https://rama1832nathan.github.io/digital-clock/index2.html", 
    "color": "pink",
    "description": "A simple and stylish digital clock displaying real-time hours, minutes, and seconds.",
    "image": clock
  },
  { 
    "name": "Styled Login", 
    "link": "https://rama1832nathan.github.io/styled-login-JS/", 
    "color": "default",
    "description": "A visually appealing login page with smooth UI interactions.",
    "image": login
  },
  { 
    "name": "Age Calculator", 
    "link": "https://rama1832nathan.github.io/age-calaculator/", 
    "color": "blue",
    "description": "Calculates age based on the user's date of birth.",
    "image": birth
  },
  { 
    "name": "Enhancer", 
    "link": "https://rama1832nathan.github.io/enhancer/", 
    "color": "yellow",
    "description": "A tool designed to enhance images or text with customizable features.",
    "image": enhancer
  },
  { 
    "name": "RPS Game", 
    "link": "https://rama1832nathan.github.io/rpsgame/", 
    "color": "pink",
    "description": "A classic Rock-Paper-Scissors game with an interactive UI.",
    "image": rps
  },
  { 
    "name": "CheckList App", 
    "link": "https://check-karo.vercel.app/", 
    "color": "blue",
    "description": "A to-do list app to efficiently manage and check off tasks.",
    "image": checklist
  },
  { 
    "name": "Advice App", 
    "link": "https://salaahle.vercel.app/", 
    "color": "yellow",
    "description": "Generates random life advice with a single click.",
    "image": advice
  },
  { 
    "name": "Weather App", 
    "link": "https://climate-xi.vercel.app/", 
    "color": "yellow",
    "description": "Displays real-time weather conditions based on user location.",
    "image": weather
  }
];


const MyProjects = () => {
  return (
        <div id="projects" className="p-4 sm:p-8 relative">
            <Title name={"Projects"}/>

            <div className="min-h-screen p-8 flex flex-wrap gap-8 justify-center">
            {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  title={project.name}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                />
            ))}
            </div>
        </div>
  );
};

export default MyProjects;
