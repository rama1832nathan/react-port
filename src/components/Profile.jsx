import About from './About'
import Tech from './Technology'
import Experience from './Experience'
import Myprojects from './Myprojects'
import Review from './Review'
import Footer from './Footer'
import Intro from './Intro'
import Navbar from './Navbar'
import { useScroll,motion } from 'motion/react'

const Profile = () => {
  const {scrollYProgress} = useScroll();

  return (
    <>
    <motion.div
    id="scroll-indicator"
    style={{
      scaleX: scrollYProgress,
      position: "fixed",
      top: 65,
      left: 0,
      right: 0,
      height: 5,
      originX: 0,
      backgroundColor: "#ffff00",
      zIndex: 50, // Ensure it's above everything
    }}
  />
    <div className='page-content min-h-screen overflow-y-auto overflow-x-hidden bg-navy text-powder relative  '>
      <Navbar/>
      <Intro/>
      <About />
      {/* <About /> */}
      <Tech/>
      <Experience />
      <Myprojects />
      <Review/>
      <Footer />
    </div>
    </>
  )
}

export default Profile