import { motion } from "framer-motion";
import Title from "./Title";
import EnterAnimation from "../animation/EnterAnimation";
import TiltedCard from "../blocks/TiltedCard/TiltedCard";
import Myphoto from "../assets/images/Rama.webp";

const About = () => {
  return (
    <div id="about" className="h-[100vh] bg-navy px-4 sm:px-8 py-8">
      <Title name={"About Me"} />

      <EnterAnimation>
        <div
          
          className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-10 mt-6"
        >
          {/* Profile Photo */}
          <div className="w-full sm:w-auto flex justify-center">
            <TiltedCard
              imageSrc={Myphoto}
              altText="MyPhoto"
              captionText="Ramanathan K"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              
            />
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2 px-2 sm:px-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-justify font-aldrich leading-relaxed">
              I am a detail-oriented student who prioritizes efficient task execution.
              I approach problem-solving by first developing a brute-force solution and
              then refining it for optimal efficiency and performance. My mind is like a
              dynamic ArrayList, adapting to store and process everything a human
              perceives and responds to. I prioritize conceptual learning over rote
              memorization.
            </p>
          </div>
        </div>
      </EnterAnimation>
    </div>
  );
};

export default About;
