import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex flex-col cursor-pointer items-center justify-center '>
      <motion.img 
            initial = {{y: -300, opacity: 0}}
            transition={{duration: 1.5}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            className='rounded-full border border-gray-500 object-cover w-32 h-32 md:w-48 md:h-48 xl:w-48 xl:h-48 ease-in-out bg-white' 
            src="https://i.pinimg.com/564x/1a/cc/52/1acc520efc79caba447d85ac3930ed80.jpg" alt="" />
      <div className='space-x-10 px-0 md:px-10 max-w-6xl p-5'>
        <h4 className='text-2xl font-medium text-center pt-2 text-[#00B8EA] '>{"Lyft Back-End Engineering Virtual Experience Program"}</h4>
      </div>
    </div>
    
  )
}