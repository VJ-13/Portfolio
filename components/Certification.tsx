import React from 'react'
import { motion } from 'framer-motion'
import Certification1 from './CertificationCards/Certification1'
import Certification2 from './CertificationCards/Certification2'
import Certification3 from './CertificationCards/Certification3'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto xl:top-24 lg:top-24 md:top-24 sm:top-15 '>Certification</h3>

        <div className='grid grid-cols-3 gap-5 '>
            {/* Python */}
            <Certification2 />

            {/* Java */}
            <Certification1 />

            {/* C */}
            <Certification3 />
        </div>
    </motion.div>
  )
}