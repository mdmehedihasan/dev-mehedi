import React from 'react';

const Project = ({ project }) => {
    const { id, name, img, description } = project;
    return (

        <div>
            <div>
                <div class="img">
                    <a href="#" class="btn-visit">Visit</a>

                </div>
            </div>
            <div>
                <h2>{name}</h2>
                <p><small>{description}</small></p>
            </div>
        </div>

    );
};

export default Project;