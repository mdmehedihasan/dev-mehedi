import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaMapMarked, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_jzuyrjs', 'template_g2nzsub', form.current, 'coR-TTYtNRvbdwtVt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    return (
        <section className=' min-h-full row lg:mt-36 md:mt-20 sm:mt-109 xs:mt-6 px-4'>
            <h1 className='text-4xl text-left pb-10 text-sobuj' id='contact'>Leave A Message For Me</h1>
            <div className='grid lg:grid-cols-2 items-top justify-center gap-6'>
                <div>
                    <p className='text-2xl font-semi-bold text-left pb-4'>If you want to know more about anything. You can contact with me. You can also give me opinion about my page. My inbox is always open for you. I will try my best to reply all of your message</p>

                    <div className='flex items-center justify-left text-xl pt-2 '>
                        <label className='pr-2 text-sobuj'><FaMapMarked /></label>
                        <p>Mohammadpur, Dhaka , Bangladesh</p>
                    </div>
                    <div className='flex items-center justify-left text-xl '>
                        <label className='pr-2 text-sobuj'><FaEnvelope /></label>
                        <p>mehedicsebu@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-left text-xl '>
                        <label className='pr-2 text-sobuj'><FaPhone /></label>
                        <p>+880 1742851587</p>
                    </div>

                </div>
                <div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <input required className='input input-bordered border-sobuj input-primary w-full max-w-lg my-2' placeholder="Your Name" type="text" name="user_name" />
                            </div>

                            <div>
                                <input required className='input input-bordered border-sobuj w-full max-w-lg my-2' placeholder="Your Email" type="email" name="user_email" />
                            </div>

                            <div>
                                <textarea className='textarea textarea-bordered textarea-primary border-sobuj  w-full max-w-lg my-2' placeholder='Your Message' name="message" />
                            </div>

                            <div>
                                <input className='btn btn-outline btn-accent' type="submit" value="Send" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;