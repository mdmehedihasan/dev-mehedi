import React from 'react';


const About = () => {
    return (
        <section>

            <div className='bg-base-300 p-12 min-h-full'>
                <h1 className='text-4xl text-left pb-4'>About Me</h1>
                <div className='grid grid-cols-2 gap-10 items-center justify-center '>
                    <div>
                        <div>
                            <img className='object-right' src="https://rock-tyre.web.app/static/media/profile-1.0eab64be881f4976d04f.png" alt='name' />
                        </div>
                    </div>
                    <div>
                        <p class="py-6 text-justify text-2xl font-semi-bold">I am a WEB Developer. I am working with React, Node.js, and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).</p>
                        <p class="py-6 text-justify text-2xl font-semi-bold">I am a WEB Developer. I am working with React, Node.js, and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;