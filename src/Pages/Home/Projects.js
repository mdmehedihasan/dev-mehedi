import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div>
            <div className='row'>
                <h1 className='text-4xl text-left pb-4r'>My Projects</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>

                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;