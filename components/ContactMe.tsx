import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:vsjethra13@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left pt-20 max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>Contact</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>{"I have got what you need."} {" "} <span className='decoration-[#00B8EA]/50 underline'> {"Let\'s Talk."}</span> </h4>
        </div>

        <div className='space-y-8 '>
            <div className='flex items-center space-x-5 justify-center '>
                <EnvelopeIcon className='text-[#00B8EA] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>vsjethra13@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center '>
                <MapPinIcon className='text-[#00B8EA] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>Brampton, ON</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#00B8EA] py-5 px-10 rounded-md text-black font-bold text-lg hover:text-white'>Submit</button>
            </form>

        </div>


    </div>
  )
}

export default ContactMe