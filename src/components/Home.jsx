import React from 'react';
import HeroImage from "../assets/rajesh.jpg";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
    return (
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-red to- black-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text'>
                        I'm a <b className='text-white'>Back End Developer</b>
                    </h2>
                    <p className='text-2xl text-white-500 py-4 max-w-md'>
                        <b>I am currently pursuing my <p className='text-white'>3rd year</p>at Vellore Institute Of Technology, Amaravati. I am passionate about problem solving and coding. Currently, I love to work on backend development and deploy the errors.</b>
                    </p>

                    <div>
                        <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black-500 to-white-500' >
                            Portfolio <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> </span>
                        </Link>
                    </div>
                </div>

                <div >
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-2/4'/>
                </div>
            </div>
        </div>
    )
}

export default Home
