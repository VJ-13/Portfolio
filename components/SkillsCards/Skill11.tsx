import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img 
            initial = {{x: directionLeft ? -200 : 200, opacity: 0}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/elm_original_wordmark_logo_icon_146537.png" 
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-30 xl:h-30 filter
                       group-hover:grayscale transition duration-300 ease-in-out bg-white'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>50%</p>
            </div>
        </div>
    </div>
  )
}