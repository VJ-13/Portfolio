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
            src="https://i.pinimg.com/564x/1c/7e/4d/1c7e4db1dd8ad05154bb8b1f0dc4e2c0.jpg" 
            alt="" 
        />

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Mobile App Developer</h4>
            <p className='font-bold text-2xl mt-1'>McMaster Natural Resources Group</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full' src={Flutter} alt="" />
                <Image className='h-10 w-10 rounded-full' src={GSuite} alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>May 2023 - Present</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>{"Collaborated with a team of 2 other students to develop a Flutter-based mobile app that offers comprehensive information about Hamilton\'s green spaces and conservation areas"}</li>
                <li>{"Funded by the McMaster Natural Resources Group to build the app for the students at McMaster"}</li>
            </ul>
        </div>
    </article>
  )
}