import React from 'react';
import './skill.css';
function TechSkill() {
  const skills = [
    { name: 'JavaScript', level: '70' },
    { name: 'React', level: '70' },
    { name: 'CSS & HTML', level: '70' },
    { name : 'PHP & C#' , level : '60'},
    { name : 'MY SQL' , level : '70'},
    { name: 'UX/UI(figma & adobe xd)', level : '70'},
    { name: 'Laravel', level : '50'},
    { name: 'Flutter(Dart)', level: '70'}
  ];

  return (
    <div>
      <h2>Technical Skills</h2>
      <div>
       {skills.map((skill, index)=>(
        <li className='skill-item'>
            <span key={index}>{skill.name}</span>
            <div className='skill-bar'>
                <div className='skill-fill' style={{width:`${skill.level}%`}}>
                    {skill.level}%
                </div>
            </div>
        </li>
       ))}
      </div>
    </div>
  );
}

export default TechSkill;
