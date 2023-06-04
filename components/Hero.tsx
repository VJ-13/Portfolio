import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import VJLogo from '../public/images/VJLogo.png'

type Props = {}
export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ['Hello, My name is Virendra', 'Welcome-to-my-digital-world.tsx', '<Transforming ideas> </into digital reality>'],
        loop: 200,
        delaySpeed: 200,
    })
    
    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center
         overflow-hidden'>
            <BackgroundCircles />
            <Image className=' relative rounded-full h-36 w-36 mx-auto object-cover'
                src={VJLogo} alt="" />
            <div className='z-20'>
                <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> Computer Science Student </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'> {text} </span>
                    <Cursor cursorColor='#00B8EA' />
                </h1>

                <div className='pt-5 '>
                    <a href="#about">
                        <button className='heroButton'>About</button>
                    </a>
                    <a href="#experience">
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href="#skills">
                        <button className='heroButton'>Skills</button>
                    </a>
                    <a href="#projects">
                        <button className='heroButton'>Projects</button>
                    </a>
                </div>

            </div>

        </div>
    )
}