import About from './About'
import Tech from './Technology'
import Experience from './Experience'
import BackButton from './BackButton'
import Myprojects from './Myprojects'
import Review from './Review'
import Footer from './Footer'
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
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      originX: 0,
      backgroundColor: "#ff0088",
      zIndex: 50, // Ensure it's above everything
    }}
  />
    <div className='page-content min-h-screen overflow-y-auto overflow-x-hidden bg-navy text-powder relative  '>
      <BackButton/>
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