import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';
import { Tooltip, IconButton } from '@mui/material'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { grey } from '@mui/material/colors';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{ opacity: 0, x: -500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <Tooltip title="Linkedin" arrow enterDelay={500} leaveDelay={200}>
                    <IconButton>
                        <SocialIcon url="https://www.linkedin.com/in/virendra-jethra" fgColor='gray' bgColor='transparent'  className='hover:scale-105' target="_blank" rel="noopener noreferrer"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Github" arrow enterDelay={500} leaveDelay={200}>
                    <IconButton>
                        <SocialIcon url="https://github.com/VJ-13" fgColor='gray' bgColor='transparent' className='hover:scale-105' target="_blank" rel="noopener noreferrer"/>
                    </IconButton>
                </Tooltip>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className="cursor-pointer hover:scale-105"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                    url="#contact"
                />
                <a href="#contact">
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:scale-105"> Get In Touch </p>
                </a>
            </motion.div>
        </header>
    );
}