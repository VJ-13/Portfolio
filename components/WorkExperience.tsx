import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard1 from './ExperienceCards/ExperienceCard1'
import ExperienceCard2 from './ExperienceCards/ExperienceCard2'
import ExperienceCard3 from './ExperienceCards/ExperienceCard3'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#00B8EA]/80 scrollbar-thin'>
            {/* ExperienceCards */}
            <ExperienceCard1 />
            <ExperienceCard2 />
            <ExperienceCard3 />
        </div>
    </motion.div>
  )
}