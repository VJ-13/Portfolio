import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Python from '../../public/images/Python.png'
import Arduino from '../../public/images/Arduino.png'

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
            className='w-32 h-32 rounded-full object-contain bg-white'
            src="https://i.pinimg.com/564x/d3/de/06/d3de062159d33f1986ec8dab4abb21ef.jpg" 
            alt="" 
        />

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Programmer</h4>
            <p className='font-bold text-2xl mt-1'>McMaster SumBot Club</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full bg-white' src={Python} alt="" />
                <Image className='h-10 w-10 rounded-full bg-white' src={Arduino} alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Oct 2021 - Jan 2022</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>{"Successfully led a team of 4 computer science students in the development of an autonomous robot"}</li>
                <li>{"Designed and built the robot\'s software using Python, Arduino, and ultrasonic sensors"}</li>
            </ul>
        </div>
    </article>
  )
}