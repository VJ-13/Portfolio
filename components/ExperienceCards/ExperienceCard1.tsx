import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Flutter from '../../public/images/Flutter.png'
import GSuite from '../../public/images/GSuite.png'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center spaces-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img 
            initial = {{opacity: 0, y: -100}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className='w-32 h-32 rounded-full object-cover'
            src="https://i.pinimg.com/originals/24/e1/45/24e145ec27df838da5cdfd1433048ebe.png" 
            alt="" 
        />

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Mobile App Developer</h4>
            <p className='font-bold text-2xl mt-1'>MacChangers</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full' src={Flutter} alt="" />
                <Image className='h-10 w-10 rounded-full' src={GSuite} alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Jan 2023 - May 2023</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>{"Collaborated with a team of 2 other students to develop a Flutter-based mobile app that offers comprehensive information about Hamilton\'s green spaces and conservation areas"}</li>
                <li>{"Successfully launched the app, resulting in a 40% increase in engagement among McMaster International Club members"}</li>
            </ul>
        </div>
    </article>
  )
}