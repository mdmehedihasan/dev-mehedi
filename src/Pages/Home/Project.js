import React from 'react';
import './Project.css'
import { FaGithub, FaMapMarked, FaPhone, FaEnvelope } from 'react-icons/fa'

const Project = ({ project }) => {
    const { link, name, img, description, technology } = project;
    return (

        <div>
            <div>
                <div style={{ backgroundImage: `url(${img})` }} className='img'>
                    <a href={link} class="btn-visit">Visit</a>

                </div>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <div className='p-2 text-3xl'>
                        <a href={link}> <FaGithub /> </a>
                    </div>
                    <div className='p-2 text-3xl'>
                        <a href={link}> <FaGithub /> </a>
                    </div>

                </div>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <p className='text-xl text-justify py-4'>{description}</p>
                <p className='text-xl font-semibold text-justify py-4'>{technology}</p>
            </div>
        </div>

    );
};

export default Project;