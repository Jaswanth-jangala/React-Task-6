import React from 'react'

const About = () => {
    return (
        <div name="About" className='h-screen w-full bg-gradient-to-b from-white via-white to-gray-500'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-2xl mt-20 max-sm:mt-10'>
                    Hello, I am <b>Jaswanth</b> pursuing my BTech in VIT-AP in the stream of Computer Science and Engineering. I am passionate about coding and problem solving and found my interest in back end development & <b>Artificial Intelligence.</b> I have prior knowledge on back end and front end web technologies like <b>Front end languages:</b> HTML, CSS, JS and  <b>Back end languages:</b> Java, C, Python .
                </p>
                <p  className='text-2xl mt-20 max-sm:mt-10'>While coming to my academics, I have an aggregate CGPA of <b>9.16</b> for my whole 2years of engineering. I am also a team player where I have worked as member for the technical TEAM for an entire academic year in a CLUB called <b>CSI-VIT AP</b> in our university.</p>
                
            </div>
        </div>
    )
}

export default About
