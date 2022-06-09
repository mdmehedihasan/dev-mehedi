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
        bar: "#3498db",
        title: {
            text: "#f2f2f2",
            background: "#2980b9"
        }
    };

    return (
        <div className='my-10'>
            <h1 className='text-4xl text-left py-4 '>Skill Set</h1>
            <SkillBar skills={skills} colors={colors} />
        </div>
    );
};

export default Skills;