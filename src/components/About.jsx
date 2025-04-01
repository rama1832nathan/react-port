import { motion } from "framer-motion";
import Title from "./Title";
import EnterAnimation from '../animation/EnterAnimation'
import TiltedCard from '../blocks/TiltedCard/TiltedCard'
import Myphoto from '../assets/images/Rama.jpg';
const About = () => {
  return (
    <div className='h-[100vh] items-center bg-navy p-4 sm:p-8 relative'>

      <Title name={"About Me"}/>


<EnterAnimation>
      <div id="about" className='flex flex-col md:flex-row h-[70vh] items-center w-full justify-center gap-8 md:gap-12 mt-15 sm:mt-10'>
        <div className='w-full md:w-auto flex justify-center'>
          <TiltedCard
            imageSrc={Myphoto}
            altText="MyPhoto"
            captionText="Ramanathan K"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>
      
        <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-8'>
          <p className='text-md text-justify font-aldrich sm:text-xl md:text-2xl lg:text-2xl leading-relaxed md:text-left'>
            I am a detail-oriented student who prioritizes efficient task execution. 
            I approach problem-solving by first developing a brute-force solution and then refining it for optimal efficiency and performance.
            My mind is like a dynamic ArrayList, adapting to store and process everything a human perceives and responds to.
            I prioritize conceptual learning over rote memorization.
          </p>
        </div>
      </div>
      </EnterAnimation>
    </div>
  );
};

export default About;
