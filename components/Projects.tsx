import React from 'react'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {
            // MacChanger Green Go
            id: 1,
            src: "https://i.pinimg.com/564x/f0/20/a1/f020a1d16c02dc238f91bab51eb11cdd.jpg",
            name: "MacChanger Green Go",
            description: "This is mobile app that is developed using Flutter. The app provides detailed information on the location, amenities, and accessibility of nearby green spaces and conservation areas in Hamilton, making it easier for students to plan their visits. It includes features like recommending a green space based on the user input such as activities and type of the place (like forest or lake), transportation method and how crowded is the place.",
            codeLink: "https://github.com/VJ-13/MacChanger",
            demoLink: "https://youtu.be/ntGuCeRGGv4?t=31"
        },
        {
            // Document Scanner
            id: 2,
            src: "https://i.pinimg.com/564x/35/4a/c2/354ac210d8fe73d160298d021d0b2905.jpg",
            name: "Document Scanner",
            description: "This project utilizes OpenCV to implement a document-scanning application. It includes various image processing techniques such as thresholding and edge detection to identify the document boundaries accurately. The code captures images from a webcam or loads an image from a file, and then applies image processing operations to detect and extract the document. The user can save the image and use the OCR feature to extract text from the document.",
            codeLink: "https://github.com/VJ-13/DocumentScanner",
            demoLink: "https://github.com/VJ-13/DocumentScanner"
        },
        {
            // To-do List
            id: 3,
            src: "https://i.pinimg.com/564x/34/ce/fe/34cefedb49ff226f1d6b669f278c919e.jpg",
            name: "To-do List",
            description: "The To-Do App is a simple and user-friendly task management tool, developed using HTML, CSS, and JavaScript. The App allows users to create, edit, and delete tasks. Users can also mark tasks as complete and view their progress at a glance. One of the key features of the App is the use of LocalStorage. LocalStorage allows the App to store data locally within the user's browser, rather than on a server.",
            codeLink: "https://github.com/VJ-13/ToDoApp",
            demoLink: "https://to-do-app-vj-13.vercel.app/"
        },
        {
            // AutoNote Taker
            id: 4,
            src: "https://i.pinimg.com/564x/99/36/84/993684723f380faebb08e61133e30a30.jpg",
            name: "AutoNote Taker",
            description: "AutoNoteTaker is a speech to text program that transcribes all your lectures (and any other videos) for you automatically! You put in an mp4/mp3 file of your lecture, specify where you want your notes to go, and it returns a Word document there with all your notes. More specifically, this program uploads the file to AssemblyAI, a powerful speech transcription API that uses natural language processing (NLP) to figure out what is being said in the recording, and the key points and moments.",
            codeLink: "https://github.com/VJ-13/AutoNoteTaker",
            demoLink: "https://youtu.be/X7_8bwkP9rY?t=182"
        },
        {
            // Connect Four
            id: 5,
            src: "https://i.pinimg.com/564x/ba/f6/1d/baf61dbcb12861fce5d343ac521ec81c.jpg",
            name: "Connect Four",
            description: "The Connect Four game was created using Java and object-oriented programming principles. In addition to the traditional two-player game mode, an AI player was also implemented. The AI player has the ability to both defend against the player's potential wins and also make strategic moves to try and win the game. The AI player's decision making process was implemented using a combination of logical statements and randomization. ",
            codeLink: "https://github.com/VJ-13/ConnectFour",
            demoLink: "https://github.com/VJ-13/ConnectFour"
        },
    ]


  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left justify-evenly md:flex-row max-w-full mx-auto items-center z-0 '>

        {/* Title */}
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>Projects</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Scroll for more projects </h3>

        <div className=' w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00B8EA]/80'>
            {/* Project Cards */}
            {
                projects.map(({id, src, name, description, codeLink, demoLink}) => (
                    <div key={id} className='w-screen flex-shrink-0 snap-center flex flex-col spaces-y-5 items-center justify-center p-20 md:p-50 sm:p-5  max-h-screen '>
                    <motion.img 
                        initial = {{y: -300, opacity: 0}}
                        transition={{duration: 1.5}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        src={src} alt="" className='h-60 w-120 shadow-lg shadow-[#00B8EA]/20 rounded-lg'/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl p-5 '>
                        <h4 className='text-4xl font-medium text-center pt-2  '>{name}</h4>
                        <p className='text-lg text-center sm:text-left md:text-left'> {description} </p>
                    </div>

                    <div className='flex items-center justify-center '>
                        <Button href={demoLink} variant="outlined" className='w-60 px-16 m-8 heroButton z-20 text-white border border-white'>Demo</Button>
                        <Button href={codeLink} variant="outlined" className='w-60 px-16 m-8 heroButton z-20 text-white border border-white'>Code</Button>
                    </div>


                </div>
                ))
            }
            
        </div>


        {/* Background */}
        <div className='w-full absolute top-[30%] bg-[#00B8EA]/5 left-0 h-[500px] -skew-y-12 ' />
    </motion.div>
  )
} 

export default Projects