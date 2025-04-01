import { motion } from "framer-motion";
import EnterAnimation from "../animation/EnterAnimation";
import Stack from "../blocks/Stack/Stack"
import html from "../assets/images/html.png";
import mongo from "../assets/images/mongo.png";
import express from "../assets/images/expresss.png";
import react from "../assets/images/react.png";
import py from '../assets/images/python.webp'
import java from '../assets/images/java.png';
import Title from "./Title";

const Experience = () => {

    const images =[
        {id:1,img:html},
        {id:2,img:mongo},
        {id:3,img:express},
        {id:4,img:react},
        {id:5,img:py},
        {id:6,img:java},

    ]

  return (
    <div className='h-[100vh] items-center bg-navy p-4 sm:p-8 relative'>
    <Title name={"Technology known"}/>
    
    <EnterAnimation>
        <div className='flex flex-col md:flex-row h-[50vh] items-center justify-center gap-8 md:gap-12 mt-8 sm:mt-10'>
            <div className='w-full md:w-auto flex justify-center'>
            <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 200, height: 200 }}
                cardsData={images}
            />
            </div>
        </div>
    </EnterAnimation>
    </div>
  );
};

export default Experience;
