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
            src="https://previews.dropbox.com/p/thumb/AB43ic-Y2BnA51ssJ1KZbxBUV1QvcfSryBWANLiDYubTUT_jhYIqTNtGBAlOo2iPJ73u7Me0y5VD3VFeYFBh6SP9QYf1JIcyoxwBT6JHzs46Ll6jtVzCixlPX65Y4dxeYOHLVkG_joqWJ6bkQqpY8VJbQluqd5bhglVPeX3RT_xTOdBePDaYubonqCCnYDPVK3tj-cmzziqi3rf53kgCp88MwlTfTF1T7PN_UXVXEhBbqoqtB0fWAMSNrpTvaInYoJasq-x2gZEna0fmjOv_pFkl2Bjp-ZCxj8yHvX661DMb7eKn5F_SZ5iuTrtIktX_Zynt6wXzS200ZzPilRqUS1sMFxzgv-76MhZC7d6ombo4czwErB5iYiEbZZa7y24Jjpo/p.png" 
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-30 xl:h-30 filter
                       group-hover:grayscale transition duration-300 ease-in-out bg-white'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>60%</p>
            </div>
        </div>
    </div>
  )
}