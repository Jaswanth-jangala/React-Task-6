import React from 'react'

const Contact = () => {
    return (
        <div name="Contact" className='h-screen w-full bg-gradient-to-b from-white via-white to-gray-500'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>CONTACT</p>
                    <p className='text-2xl py-6'>Get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/f3547da1-0127-4af0-a3a8-95da3d02da57" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'/>
                        <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none' />
                        <textarea name="message" rows="10" placeholder='Enter Message:'className=' p-2 bg-transparent border-2  border-black rounded-md text-black focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-black-500 to-black-500 px-6 py-4 my-8 mx-auto flex items-center rounded-md text-black hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
