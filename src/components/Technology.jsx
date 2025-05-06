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
    <div id="techstack" className='h-[80vh] items-center bg-navy p-4 sm:p-8 relative'>
        <Title name={"Technology known"} />
        <div className="mt-40 mb-40 flex flex-wrap justify-center gap-10">
            {images.map((image) => (
                <motion.img
                    key={image.id}
                    src={image.img}
                    alt={`Technology ${image.id}`}
                    className="w-20 h-20 lg:h-40 lg:w-40 md:w-30 md:h-30 rounded-2xl"
                    initial={{
                        rotate: image.id % 2 === 0 ? -15 : 15,
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        transition: { duration: 0.3 },
                        cursor: "pointer",
                    }}
                    whileTap={{
                        scale: 0.9,
                        rotate: image.id % 2 === 0 ? -15 : 15,
                    }}
                />
            ))}
        </div>
    </div>
);
};

export default Experience;
