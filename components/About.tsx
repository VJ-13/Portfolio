import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto xl:top-24 lg:top-20 md:top-12 sm:top-12 '>About</h3>
        <motion.img
            initial = {{x: -200, opacity: 0}}
            transition={{duration: 1.5}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            src="https://i.pinimg.com/564x/18/5a/77/185a77e61245a6192221afce9a2b7f15.jpg"
            className='relative -mb-20 md:mb-50 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-700px]] sm:p-3'
        />
        <div className=' px-0 md:px-10'>
            <h4 className='text-4xl font-semibold xl:p-7 md:p-2 sm:p-2 '>Here is a <span className='underline decoration-[#00B8EA]/50'>little</span> background about me</h4>
            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"Hello! I\'m Virendra, a fourth-year computer science student at McMaster University. I\'m passionate about technology and its potential to make a positive impact."} 
            </p>
            
            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"Throughout my academic journey, I\'ve developed strong programming skills and tackled complex challenges. At TC Energy, I improved data processing and streamlined workflows for the Project Systems & Tools team. My work at DorsalAI involved deploying a React-based website to facilitate 10K and 10Q report searches, enhancing my technical expertise. As a Teaching Assistant for Python, I supported students and optimized grading, contributing to a more effective learning environment."}
            </p>

            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"Beyond the realm of computer science, I have a strong passion for supporting and mentoring children. I have served as a swimming instructor, a tutor during pandemic, and a camp counselor."}
            </p>

            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"I am currently seeking a new grad position where I can apply my skills and enthusiasm to drive meaningful contributions. Feel free to reach out to me via email - I look forward to connecting!"}
            </p>
        </div>
        
    </motion.div>
  )
}