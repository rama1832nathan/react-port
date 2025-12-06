import { motion } from "framer-motion";
import EnterAnimation from "../animation/EnterAnimation";
import html from "../assets/images/html.png";
import mongo from "../assets/images/mongo.png";
import express from "../assets/images/expresss.png";
import react from "../assets/images/react.png";
import py from '../assets/images/python.webp'
import java from '../assets/images/java.png';
import Title from "./Title";

const Experience = () => {

    const images = [
        { id: 1, img: html },
        { id: 2, img: mongo },
        { id: 3, img: express },
        { id: 4, img: react },
        { id: 5, img: py },
        { id: 6, img: java },
    ];

    const borderStyle = "border-4 border-navy rounded-2xl";

return (
    <div id="techstack" className='h-[80vh] items-center p-4 sm:p-8 relative'>
        <Title name={"Technology known"} />
        <div className="mt-40 mb-40 flex flex-wrap justify-center gap-10">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col items-center gap-4 group">
                    <motion.div
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-navy/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl flex items-center justify-center p-4 shadow-lg group-hover:border-lorange/50 group-hover:shadow-lorange/20 transition-all duration-300"
                        initial={{
                            rotate: image.id % 2 === 0 ? -5 : 5,
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.1 },
                            cursor: "pointer",
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        <img
                            src={image.img}
                            alt={`Technology ${image.id}`}
                            className="w-full h-full object-contain filter drop-shadow-md"
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Experience;
