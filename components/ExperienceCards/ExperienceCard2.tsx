import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Java from '../../public/images/Java.png'
import AndroidStudio from '../../public/images/AndroidStudio.png'

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
            src="https://i.pinimg.com/564x/b8/cb/eb/b8cbeb33dcfc4db5624500d19309923b.jpg" 
            alt="" 
        />

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Software Development Intern</h4>
            <p className='font-bold text-2xl mt-1'>GAOTek</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full bg-white' src={Java} alt="" />
                <Image className='h-10 w-10 rounded-full bg-white' src={AndroidStudio} alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>July 2022 - Aug 2022</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Collaborated with a team of developers using Java in Android Studio, to create a BLE beacon detection app</li>
                <li>Contributed to software design through TortoiseSVN as part of a 50-member group</li>
            </ul>
        </div>
    </article>
  )
}