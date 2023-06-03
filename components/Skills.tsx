import React from 'react'
import { motion } from 'framer-motion'
import Skill1 from './SkillsCards/Skill1'
import Skill2 from './SkillsCards/Skill2'
import Skill3 from './SkillsCards/Skill3'
import Skill4 from './SkillsCards/Skill4'
import Skill5 from './SkillsCards/Skill5'
import Skill6 from './SkillsCards/Skill6'
import Skill7 from './SkillsCards/Skill7'
import Skill8 from './SkillsCards/Skill8'
import Skill9 from './SkillsCards/Skill9'
import Skill10 from './SkillsCards/Skill10'
import Skill11 from './SkillsCards/Skill11'
import Skill12 from './SkillsCards/Skill12'
import Skill13 from './SkillsCards/Skill13'
import Skill14 from './SkillsCards/Skill14'
import Skill15 from './SkillsCards/Skill15'
import Skill16 from './SkillsCards/Skill16'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
            {/* Python */}
            <Skill1 />

            {/* Java */}
            <Skill2 />

            {/* C */}
            <Skill3 />

            {/* HTML */}
            <Skill4 />

            {/* CSS */}
            <Skill5 />    

            {/* JavaScript */}
            <Skill6 />     

            {/* Flutter */}
            <Skill8 /> 

            {/* SQL */}
            <Skill7 /> 

            {/* C++ */}
            <Skill10 directionLeft /> 

            {/* Elm*/}
            <Skill11 directionLeft/> 

            {/* Haskell */}
            <Skill12 directionLeft/> 

            {/* Git */}
            <Skill14 directionLeft/>   

            {/* Android Studio */}
            <Skill13 directionLeft/>           

            {/* React */}
            <Skill9 directionLeft/> 

            {/* NextJS */}
            <Skill15 directionLeft/> 

            {/* Figma */}
            <Skill16 directionLeft/> 
        </div>
    </motion.div>
  )
}