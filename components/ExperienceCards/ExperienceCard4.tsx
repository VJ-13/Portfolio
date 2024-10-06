import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Python from '../../public/images/Python.png'
import ReactImg from '../../public/images/React.png'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center spaces-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <div className="p-6">
            <motion.img 
                initial = {{opacity: 0, y: -100}}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className='w-32 h-32 rounded-full object-cover'
                src="https://i.pinimg.com/originals/b6/d2/66/b6d266438f38297de1a7e7b547e038c6.png" 
                alt="" 
            />
        </div>

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Software Engineer Intern </h4>
            <p className='font-bold text-2xl mt-1'>DorsalAI</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full bg-white' src={ReactImg} alt="" />
                <Image className='h-10 w-10 rounded-full bg-white' src={Python} alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>May 2023 - Aug 2023</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>{"Successfully created and deployed a React-based website enabling users to search through the company's 10K and 10Q reports for informed investment analysis."}</li>
                <li>{"Facilitated prompt engineering to optimize OpenAI responses, ensuring the AI bot provides the most relevant advice based on user queries and leading to a 15% improvement in response relevance."}</li>
            </ul>
        </div>
    </article>
  )
}