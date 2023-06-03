import React from 'react'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {
            // To-do List
            id: 1,
            src: "https://previews.dropbox.com/p/thumb/AB5bX0xDvbR-aZMoJ8T0Mj-RB-UI2EZA2Dl3Tk6AcDhD8WqTjxUJc1h4TrOBVNPtgmq1qu3uYs-R5A0JSjXfypmRRW5tmQ4AZ7Z3NuSlO0-nWnJk675wHxo3y1Ti38pxEyy7U3d0RPAOXnuJ76JRJ1fSSRVHCHwLELrULggoVmJaR0qyES8aXu5bfKwPDtdeIGrYfPFpY0ZWR8FqihXm2pbCGC410xuDdRlngkah7wfHrGyag9xYc7RXlwIwu9JFzLNkYwD5cOK1EJ9LNMRqL1-2VaEhX2M7Cnt4nghUpqrz9Qv08ABEvco8sfg_fDClGjUpXgZG_7T6N4Ez8P7_Ih5Ho0KmwBRZM6eUzTB6KDX0bWP26z1jG0_ge6a2DzPoXgI/p.png",
            name: "To-do List",
            description: "The To-Do App is a simple and user-friendly task management tool, developed using HTML, CSS, and JavaScript. The App allows users to create, edit, and delete tasks. Users can also mark tasks as complete and view their progress at a glance. One of the key features of the App is the use of LocalStorage. LocalStorage allows the App to store data locally within the user's browser, rather than on a server.",
            codeLink: "https://github.com/VJ-13/ToDoApp",
            demoLink: "https://github.com/VJ-13/ToDoApp"
        },
        {
            // Document Scanner
            id: 2,
            src: "https://previews.dropbox.com/p/thumb/AB7bGNB7j0eEd3sI6EKRgFXaPRqm0q0d4gIS-y8WL4VZnzR6IXHkKkEXyzaN1Jbo3agxnktMC1rZJKVHU68oZarZW_Sq7F6OuEixs-PH4WhwZ-Q_l5xzIbQetZQs9dO9Rlg0yJd-crDDX87xjbcToxUnwuuzQXC2wmnMu4xihuBt8LeipsCIckQAB_zFIpfu_yF2VuQRF1ZW4r7J1UX4MsQHijolg7hVgsOjxJeDF5THhMZ2zzDU7zM2j81f2pCBb881g8OfaCUsKR9vL101qFXdMzlZb9tSzR1_HOu51R_zCK-7mAAKDiY3KZJ_0XvFIWwAtBuUs3MxMg9Sz8m6WK5igsQjcINRqbCrMf-kOijVJAbjh43UtCFNpIkc9qMwiCY/p.png",
            name: "Document Scanner",
            description: "This project utilizes OpenCV to implement a document-scanning application. It includes various image processing techniques such as thresholding and edge detection to identify the document boundaries accurately. The code captures images from a webcam or loads an image from a file, and then applies image processing operations to detect and extract the document. The user can save the image and use the OCR feature to extract text from the document.",
            codeLink: "https://github.com/VJ-13/DocumentScanner",
            demoLink: "https://github.com/VJ-13/DocumentScanner"
        },
        {
            // AutoNote Taker
            id: 3,
            src: "https://previews.dropbox.com/p/thumb/AB4isKpQrSqN6RKrwUjCFxftpe1g4iMa95cHvWTeBq-JdGbN-uecWIi_OplicCj_q-KYC0RX8N31Q8wqokwyRF9Yn4KFjBhkA35YzJB33E7Ah6jKnRtW5ByLqIpgVRjRuS53n2mx2Rwip8crDnvuUONwLadOZtInpIa55ePjE1wNKRe8i5d7GsvA7Kp2q1EUnfLE1rVkWt1eF5h3eWprq5FSurkHpw9U4yQfkneOdR02Elbjaetjsh4y7iNjwsvchW4jVHMO5SstSwgPczj70iPldXDoCfGBD3DvWIvpRUnXYi7Bb-z35-f6ANsJ6zlTvf6FxboBsKQSTpiB1Lzi4LonJONzm1cVYVMLlOgDmdFDVWRPDzn0offYf3atXjqBhAk/p.png",
            name: "AutoNote Taker",
            description: "AutoNoteTaker is a speech to text program that transcribes all your lectures (and any other videos) for you automatically! You put in an mp4/mp3 file of your lecture, specify where you want your notes to go, and it returns a Word document there with all your notes. More specifically, this program uploads the file to AssemblyAI, a powerful speech transcription API that uses natural language processing (NLP) to figure out what is being said in the recording, and the key points and moments.",
            codeLink: "https://github.com/VJ-13/AutoNoteTaker",
            demoLink: "https://youtu.be/X7_8bwkP9rY?t=182"
        },
        {
            // MacChanger Green Go
            id: 4,
            src: "https://previews.dropbox.com/p/thumb/AB5JJ6s6tFyCcO_6MHyNseX_qk9wtpmh-Jhrh2kH4aRtLQf3pweq1RI_zqRAOsfG2RE4mk84hB6AkxkioYXPRNcrw2BKRRQg9ggPgCoH8P5Y1UoNR7Vjfo7LI0LvdUScLFsRZJgG6FAEOcQ_kRSKu_KAfLkaW28ZeLkL-qwFQfi7ueTXzYcMlHt9tO-wqUB8sVQqN7S4ZwM_K8txFJRkh5K1UkhoxUMHfn6JcfibAT5ATkQBKC8hcteJAloPh-_csgYBrUQV3YxUUU7MBI7j6xWKaYy2tHYL4y90fjQF75IrpZUQAORZ3kseQhL44CCpSDo7YU16yTNjksMpZ3FM5Y-tk-NGG42-f_P3lQU1KXr3e9w-rAkkC5EcjLZqXKTQ1kg/p.png",
            name: "MacChanger Green Go",
            description: "This is mobile app that is developed using Flutter. The app provides detailed information on the location, amenities, and accessibility of nearby green spaces and conservation areas in Hamilton, making it easier for students to plan their visits. It includes features like recommending a green space based on the user input such as activities and type of the place (like forest or lake), transportation method and how crowded is the place.",
            codeLink: "https://github.com/VJ-13/MacChanger",
            demoLink: "https://youtu.be/ntGuCeRGGv4?t=31"
        },
        {
            // Connect Four
            id: 5,
            src: "https://previews.dropbox.com/p/thumb/AB7VQTeofJk282OJlf7rH__nJG72dY56kYOFrPmkCP_YSLQ7UIb2nTBK6_mrkNEqwsbtWnRwsNOznt_gobAT07ER5fJDBsqr91EZDZ1aiyE72WlhFyu2QSgljk3eU1mODN4SGF76xkvvp9NfnyjN_ff9Ng6cCXpcmVMPWw0ojquInTYycCbPmpQ60V0ntOO3PAFZ1wTOUJGKcaAtDuJ-SdwMueKnqss7LYjr4mYYXE3c9eVz0mF-XuIIgAeez3NmFluTHtyuuNYtBjJQo6EIbvPe3fcuKLaV_PgbUtGhDjWHkmvz9syhozUcnviXKyaEzwProb2wnHamnWy3kkg41tUnG5oVUztaTNp_7piWgP4yLguxgFt0c3y6KGYfqORqNX0/p.png",
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
                        <Button href={demoLink} variant="outlined" className=' inherit w-60 px-16 m-8 heroButton z-20 text-white border border-white'>Demo</Button>
                        <Button href={codeLink} variant="outlined" className=' inherit w-60 px-16 m-8 heroButton z-20 text-white border border-white'>Code</Button>
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