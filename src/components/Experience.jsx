import React from 'react';
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import php from "../assets/php.jpeg";
import java from "../assets/java.png";
import python from "../assets/python.png";
import C from "../assets/C.png";


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: python, 
            title: 'Python',
            style: 'shadow-blue-800'
        },
        {
            id: 5,
            src: C, 
            title: 'C',
            style: 'shadow-blue-800'
        },
        {
            id: 6,
            src: java, 
            title: 'JAVA',
            style: 'shadow-orange-800'
        }
    ]

    return (
        <div name="Experience" className='h-screen w-full bg-gradient-to-b from-gray-500 via-white to-black-500'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                <div className='pb-8'>
                    <p className='text-4xl text-black font-bold inline border-b-4 border-gray-500'>Experience</p>
                </div>
                    <p className='text-2xl text-black py-6 max-sm:py-1'>The technologies which I am familiar with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={
                                `shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
                            }>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Experience
