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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>About</h3>
        <motion.img
            initial = {{x: -200, opacity: 0}}
            transition={{duration: 1.5}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            src="https://previews.dropbox.com/p/thumb/AB6wC14gki_nezC1pmsQ_2W0htAYmGfNUWn3i3VDSOPZcgrMmFqzbunt0EBsv7vS0axieUa7Gs1ezs08LgCerQfSNYtYcV5XV5vPTaPPYTcJ4e23NzP61BZdq55016piHjoBF4rt7WeByB2NRIzOU4z2z4J2X8g3QLdr5JA4K0YcbLl9SGVrC-9RWemIcCY4fAv7BUCSTp_pvHzxw5voft9kjzNDTswECJn1MV8jOWPl_2xkl9A3EBubW7rq9HX4YvbnnD_ab0wnV37vWta58kJXu8jlwJhC8HyHJuDdJpXvQPD1vKcFAn29iNDW-C9YlwMxihaDJmCL2shhQhJsIbT4vrkuMrTlWwhli-rvQopmDUrkdXG8R1Stl9jNAP1CjZo/p.jpeg"
            className='relative -mb-20 md:mb-50 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-700px]] sm:p-3'
        />
        <div className=' px-0 md:px-10'>
            <h4 className='text-4xl font-semibold xl:p-7 md:p-2 sm:p-2 '>Here is a <span className='underline decoration-[#00B8EA]/50'>little</span> background about me</h4>
            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"Hello! I\'m Virendra, a third-year computer science student at McMaster University. I\'m passionate about technology and its potential to make a positive impact."} 
            </p>
            
            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"Throughout my academic journey, I have explored various programming languages and concepts, constantly challenging myself to expand my critical thinking and programming skills. Additionally, I interned at GAOTek, where I contributed to the development of a BLE beacon detection app. Currently, I am engaged in a part-time endeavor funded by the McMaster Natural Resources Group, providing information on green spaces and conservation areas in Hamilton."}
            </p>

            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"Beyond the realm of computer science, I have a strong passion for supporting and mentoring children. I have been a swimming instructor, a tutor during Covid-19, and a camp counselor."}
            </p>

            <p className='xl:p-3 md:p-2 sm:p-1 sm:text-left'>
              {"I am currently seeking a co-op position for Fall 2023. If you are interested in working with me, please feel free to reach out to me via email or LinkedIn. I look forward to connecting with you!"}
            </p>
        </div>
        
    </motion.div>
  )
}