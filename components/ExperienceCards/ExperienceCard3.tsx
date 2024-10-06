import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Python from '../../public/images/Python.png'
import PowerApps from '../../public/images/PowerApps.png'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center spaces-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <div className="p-6">
            <motion.img 
                initial = {{opacity: 0, y: -100}}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className='w-32 h-32 rounded-full object-contain bg-white p-2'
                src="https://i.pinimg.com/originals/86/50/0a/86500afad9b28d55e399f2c9945aab31.png" 
                alt="" 
            />
        </div>

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Project Systems & Tools Intern</h4>
            <p className='font-bold text-2xl mt-1'>TC Energy</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full bg-white' src={PowerApps} alt="" />
                <Image className='h-10 w-10 rounded-full bg-white' src={Python} alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>May 2024 - Aug 2024</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>{"Improved data processing efficiency by 30% through the use of Omega PIMS, VintriCORE, and Microsoft Power Suite for streamlined project tracking and reporting."}</li>
                <li>{"Actively contributed to team projects by sharing insights and coordinating efforts with colleagues, resulting in enhanced team cohesion and more efficient problem-solving approaches."}</li>
            </ul>
        </div>
    </article>
  )
}