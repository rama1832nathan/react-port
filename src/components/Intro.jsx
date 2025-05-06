import React from 'react'
import Blur from '../blocks/BlurText/BlurText';
import RotatingText from '../blocks/RotatingText/RotatingText'
import { animate, motion } from 'framer-motion';


const Intro = () => {


  return (
    <div className='page-content flex flex-col items-center justify-center min-h-screen bg-navy font-teko'>
      <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{
          duration:0.4,
          scale:{type:"spring",visualDuartion:0.4,bounce:0.5},
        }}>
        <Blur 
          className='sm:text-3xl md:text-4xl lg:text-5xl text-powder font-bartomes'
          text='I am Ramanathan K'
          animateBy='words'
          delay={100}
          direction='top'
          rootMargin='0px'
          threshold={0.2}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <RotatingText
          texts={['Web Developer', 'Problem Solver', 'Tech Enthusiast']}
          mainClassName="px-4 sm:px-6 md:px-8 bg-powder border-2 text-charcoal overflow-hidden py-2 sm:py-3 md:py-4 justify-center rounded-lg mt-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          staggerFrom={"last"}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          staggerDuration={0.05}
          splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300,
            mass: 0.8,
            velocity: 2
          }}
          rotationInterval={3000}
        />
      </motion.div>

      {/* <motion.button
        onClick={() => navigate("/profile")}
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5,delay:1.2}}
        className="mt-8 px-8 py-3 font-avocado hover:cursor-pointer bg-powder text-charcoal rounded-full text-sm sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More →
      </motion.button> */}
    </div>
  )
}

export default Intro