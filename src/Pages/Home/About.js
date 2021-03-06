import React from 'react';


const About = () => {
    return (

        <div className='bg-base-300 p-4'>
            <div className='grid lg:grid-cols-2 items-center justify-center  min-h-screen' id='about'>
                <div className='flex items-center justify-center'>
                    <img className=' lg:h-96 w-46' src="https://i.ibb.co/MZYzQJZ/mehedidev.jpg" alt='name' />
                </div>
                <div className='pr-4'>
                    <h1 className='text-4xl text-left pb-4r text-sobuj'>About Me</h1>
                    <p class="py-6 text-justify text-2xl font-semi-bold">I am a WEB Developer. I am working with React, Node.js, and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).</p>
                    <p class="py-6 text-justify text-2xl font-semi-bold">I love my job since it allows me to collaborate and develop something
                        fresh. All I want to do is learn more about myself as a software developer.</p>

                </div>
            </div>
        </div>

    );
};

export default About;