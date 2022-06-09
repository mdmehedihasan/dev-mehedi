import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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

        <section>
            <h1 className='text-4xl text-center py-4'>Leave A Message For Me</h1>
            <div className='grid grid-cols-2 items-center justify-center gap-6'>
                <div>
                    <p className='text-2xl font-semi-bold text-left'>If you want to know more about anything. You can contact with me. You can also give me opinion about my page. My inbox is always open for you. I will try my best to reply all of your message</p>
                    <li>Address</li>
                    <li>Address</li>
                    <li>Address</li>
                </div>
                <div>
                    <div className="card  max-w-full   bg-base-100">
                        <div class="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <input className='input input-bordered input-primary w-full max-w-lg my-2' placeholder="Your Name" type="text" name="user_name" />
                                </div>

                                <div>
                                    <input className='input input-bordered input-primary w-full max-w-lg my-2' placeholder="Your Email" type="email" name="user_email" />
                                </div>

                                <div>
                                    <textarea className='textarea textarea-bordered textarea-primary  w-full max-w-lg my-2' placeholder='Your Message' name="message" />
                                </div>

                                <div>
                                    <input className='btn btn-outline btn-accent' type="submit" value="Send" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;