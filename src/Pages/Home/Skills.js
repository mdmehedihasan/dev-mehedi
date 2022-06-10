import React from 'react';
import SkillBar from 'react-skillbars';


const Skills = () => {
    const skills = [
        { type: 'HTML5', level: 99 },
        { type: 'CSS3', level: 80 },
        { type: 'Tailwind', level: 90 },
        { type: 'Bootstrap', level: 80 },
        { type: 'React', level: 85 },
        { type: 'Javascript', level: 75 },
        { type: 'MongoDB', level: 60 },
        { type: 'Express', level: 50 },

    ];
    const colors = {
        bar: "rgb(74 222 128)",
        title: {
            text: "#f2f2f2",
            background: "#27ae60"
        }
    };

    return (
        <div className='row lg:mt-36 md:mt-20 sm:mt-109 xs:mt-6 px-4' id='skills'>
            <h1 className='text-4xl text-left pb-10 text-sobuj '>Skill Set</h1>
            <SkillBar skills={skills} colors={colors} />
        </div>
    );
};

export default Skills;