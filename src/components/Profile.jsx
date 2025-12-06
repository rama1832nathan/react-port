import About from './About'
import Tech from './Technology'
import Experience from './Experience'
import Myprojects from './Myprojects'
import Review from './Review'
import Footer from './Footer'
import Intro from './Intro'
import Navbar from './Navbar'
import { motion } from 'motion/react'
import GalaxyBackground from './GalaxyBackground'


const Profile = () => {
  return (
    <>

    <div className='page-content min-h-screen overflow-y-auto overflow-x-hidden bg-navy text-powder relative'>
      <Navbar/>
      
      {/* Group 1: Blue Galaxy */}
      <div className="relative w-full">
        <GalaxyBackground variant="blue" />
        <div className="relative z-10">
          <Intro/>
          <About />
        </div>
      </div>

      {/* Group 2: Black & White Galaxy */}
      <div className="relative w-full">
        <GalaxyBackground variant="gray" />
        <div className="relative z-10">
          <Tech/>
          <Experience />
        </div>
      </div>

      {/* Group 3: Blue Galaxy */}
      <div className="relative w-full">
        <GalaxyBackground variant="blue" />
        <div className="relative z-10">
          <Myprojects />
          <Review/>
        </div>
      </div>

      <Footer />
    </div>
    </>
  )
}

export default Profile