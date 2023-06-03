import React from 'react'

type Props = {}

function Projects({}: Props) {

    const projects = [
        {
            // To-do List
            id: 1,
            src: "https://user-images.githubusercontent.com/64769412/211819996-e0b3fb02-2e30-44ed-9350-f3e897033e00.png",
            name: "To-do List"
        },
        {
            // Document Scanner
            id: 2,
            src: "https://user-images.githubusercontent.com/64769412/239677691-7c6cc641-6aba-4af9-906b-9f093c7014f9.png",
            name: "Document Scanner"
        },
        {
            // AutoNote Taker
            id: 3,
            src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/803/644/datas/medium.jpg",
            name: "AutoNote Taker"
        },
        {
            // MacChanger Green Go
            id: 4,
            src: "https://previews.dropbox.com/p/thumb/AB5JJ6s6tFyCcO_6MHyNseX_qk9wtpmh-Jhrh2kH4aRtLQf3pweq1RI_zqRAOsfG2RE4mk84hB6AkxkioYXPRNcrw2BKRRQg9ggPgCoH8P5Y1UoNR7Vjfo7LI0LvdUScLFsRZJgG6FAEOcQ_kRSKu_KAfLkaW28ZeLkL-qwFQfi7ueTXzYcMlHt9tO-wqUB8sVQqN7S4ZwM_K8txFJRkh5K1UkhoxUMHfn6JcfibAT5ATkQBKC8hcteJAloPh-_csgYBrUQV3YxUUU7MBI7j6xWKaYy2tHYL4y90fjQF75IrpZUQAORZ3kseQhL44CCpSDo7YU16yTNjksMpZ3FM5Y-tk-NGG42-f_P3lQU1KXr3e9w-rAkkC5EcjLZqXKTQ1kg/p.png",
            name: "MacChanger Green Go"
        },
        {
            // Connect Four
            id: 5,
            src: "https://previews.dropbox.com/p/thumb/AB7VQTeofJk282OJlf7rH__nJG72dY56kYOFrPmkCP_YSLQ7UIb2nTBK6_mrkNEqwsbtWnRwsNOznt_gobAT07ER5fJDBsqr91EZDZ1aiyE72WlhFyu2QSgljk3eU1mODN4SGF76xkvvp9NfnyjN_ff9Ng6cCXpcmVMPWw0ojquInTYycCbPmpQ60V0ntOO3PAFZ1wTOUJGKcaAtDuJ-SdwMueKnqss7LYjr4mYYXE3c9eVz0mF-XuIIgAeez3NmFluTHtyuuNYtBjJQo6EIbvPe3fcuKLaV_PgbUtGhDjWHkmvz9syhozUcnviXKyaEzwProb2wnHamnWy3kkg41tUnG5oVUztaTNp_7piWgP4yLguxgFt0c3y6KGYfqORqNX0/p.png",
            name: "Connect Four"
        },
    ]


  return (
    <div className='h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full text-left justify-center mx-auto items-center z-0 p-4 '>

        {/* Title */}
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>Projects</h3>



        {/* Project Cards */}
        <div className='grid grid-row-5 sm:grid-cols-2  md:grid-cols-3 gap-8 pt-20 z-20 '>

            {
                projects.map(({id, src, name}) => (
                    <div key={id} className='shadow-lg shadow-[#F7AB0A]/20 rounded-lg h-61 object-cover w-80 h-82   '>
                        <img src={src} alt="" className='rounded-md duration-200 w-80 h-60 pb-2 '/>
                        <h6 className='uppercase font-medium text-center tracking-[1px] '>{name}</h6>
                        {/* <p className='text-sm text-center pt-2 '>
                            The To-Do App is a simple and user-friendly task management tool, developed using HTML, CSS, and JavaScript. 
                            The App allows users to create, edit, and delete tasks and view their progress at a glance.
                        </p> */}
                        <div className='flex items-center justify-center '>
                            <button className='w-1/2 px-6 m-4 heroButton z-20 text-white border border-white'>Demo</button>
                            <button className='w-1/2 px-6 m-4 heroButton z-20 text-white border border-white'>Code</button>
                        </div>
                </div>
                ))
            }
     
        </div>


        {/* Background */}
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-0' />
    </div>
  )
} 

export default Projects