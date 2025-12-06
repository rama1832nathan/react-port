import React from 'react'
import EnterAnimation from '../animation/EnterAnimation'
import TN from "../assets/images/TN.jpg";
import LF from "../assets/images/LF.jpg";
import Title from './Title';
import ExperienceCard from './ExperienceCard';


const Experience = () => {
  return (
    <div id="experience" className='min-h-screen items-center justify-center p-4 sm:p-8 relative'>

      <Title name={"Experience"}/>
    

    <EnterAnimation>
        <div className='flex flex-col items-center gap-8 mt-10 sm:mt-10 px-4'>
             {/* Using new ExperienceCard */}
            
            <ExperienceCard 
                title="Software Engineer Intern" 
                subtitle="P&D Dept. of TN Govt." 
                date="May 2024 - Aug 2024"
                description="I’ve completed an SDG Dashboard using Streamlit, Plotly, and Pandas to visualize data and generate reports (PDF, DOCX, PPT). My role was handling data processing, creating visualizations, and ensuring smooth report generation for cloud deployment."
                link="https://sdgdashboardtn.streamlit.app/"
            />

            <ExperienceCard 
                title="Software Engineer Intern" 
                subtitle="Leaflix E business private limited" 
                date="Jan 2025 - Mar 2025"
                description="I worked as the backend developer for the e-commerce clothing website, handling user authentication, product management, and cart functionality using MongoDB, Express.js, and Node.js, ensuring seamless integration with the frontend." 
                link="http://ecomm-frontend-brown.vercel.app/"
            />
        </div>
    </EnterAnimation>
    </div>
  )
}

export default Experience