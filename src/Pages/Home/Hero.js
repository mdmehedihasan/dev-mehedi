import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <>

            <div className="bg-cover min-h-screen flex flex-col items-center justify-center bg-[url('/src/assets/hero-back.jpg')] ">
                <p className='text-3xl py-4'>Hi, I am</p>
                <div className='text-center'>
                    <h2 className='text-6xl font-bold py-6'>Md Mehedi Hasan</h2>
                </div>
                <div className='flex flex-direction-col items-center justify-center'>
                    <div className='text-2xl'>
                        <p className='pr-2'>I am </p>
                    </div>

                    <div className='text-2xl py-4'>
                        <Typewriter
                            options={{
                                strings: ['<strong><span style="color: #27ae60;"> PROGRAMMAR</span> </strong>', '<strong><span style="color: #27ae60;"> MERN STACK DEVELOPER</span> </strong>'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Hero;