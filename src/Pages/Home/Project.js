import React from 'react';
import './Project.css'
import { FaGithub } from 'react-icons/fa'

const Project = ({ project }) => {
    const { live_link, name, img, description, technology, client_side, server_side } = project;
    return (

        <div className='px-4'>
            <div>
                <div style={{ backgroundImage: `url(${img})` }} className='img'>
                    <a href={live_link} class="btn-visit">Visit</a>

                </div>
            </div>
            <div className='bg-slate-100 p-2'>
                <div className='flex items-center justify-center'>
                    <div className='p-2 text-3xl'>
                        <a href={client_side}> <FaGithub /> </a>
                    </div>
                    <div className='p-2 text-3xl'>
                        <a href={server_side}> <FaGithub /> </a>
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