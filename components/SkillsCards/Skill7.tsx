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
            src="https://previews.dropbox.com/p/thumb/AB7wZZgKV02t5fo2cGIF_cqQLH0s63_aJH42220URbvzqLaZnb_KupRbofsUG8bZlTnFhjiNPlbQf6qb4-FYhMAmPBOEhtcNoDc0x0rV4YrqoOpXtf5s7qRZKii3kSpe80noPHvnBOxA2hBsrYC2bA6xovqeuyyWSnEWgp0qa_chW6jaT2BQWUN2QsCnZ90XGPoh1Kn_9q6A01S4_gd3HE5hiQHuauWvrYYjVf5bGtPx2_Tlf1GTXCRTwNetHHB9ad1znG0oubKyIv9mvWtpahCosHs4MXmlLW7Ao6pl4fmTGIKeXOzx8xMzW4nR9wKcq7z4EtFzCYR28Fut1lbkFJvHbpxiNfzsUfXSnpw5k2TOpz2bzXSTHiD3aLMSLX539o0/p.png" 
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