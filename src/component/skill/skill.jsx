import './skill.css';
import React, { useState } from 'react';
import animationskill from '../../assets/Show.gif';
import TechSkill from './Tech_skill'; 
import SoftSkill from './soft-skill';
import Language from './language';

function Skill() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };
    

    return (
        <div>
            <div className='skill-info'>
                <div className='header'>
                    <h1>My Expertise</h1>
                </div>
            </div>
        </div>
    );
}

export default Skill;
