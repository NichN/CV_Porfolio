import './about.css';
import React, { useState } from 'react';
import image from '../../assets/profile.jpg';
import TechSkill from '../skill/Tech_skill';
import SoftSkill from '../skill/soft-skill';
import Persional_data from '../skill/personal_data';
import Language from '../skill/language';

function About() {
  const [select_skill, set_skill] = useState(null);

  const handleClick = (skill) => {
    set_skill(skill);
  };
  const Active_persionall=(skill) =>{
     return select_skill === skill || select_skill===null ? 'active' :'';
  }
  const Active =(skill) =>{
    return select_skill === skill ? 'active' :'';
  }

  return (
    <>
      <h1>My Information</h1>
      <div className="about_content">
        <div className="about">
          <img src={image} alt="Profile" />
        </div>
        <div className="about">
          <h3>About Me</h3>
          <p>
            I am a fourth-year Software Development major at Norton University, seeking an internship opportunity
            to further develop my technical skills. I am eager to apply my knowledge and contribute to real-world
            projects while continuing to learn and grow professionally.
          </p>
          <div className="list_about">
            <ul>
              <li onClick={()=>handleClick('Personal Data')} className={Active_persionall('Personal Data')}>Personal Data</li>
              <li onClick={() => handleClick('Technical Skill')} className={Active('Technical Skill')}>Technical Skill</li>
              <li onClick={() => handleClick('Soft Skill')} className={Active('Soft Skill')}>Soft Skill</li>
              <li onClick={() => handleClick('Language')} className={Active('Language')}>Language</li>
            </ul>
            {select_skill === null && <Persional_data/>}
            {select_skill === 'Technical Skill' && <TechSkill />}
            {select_skill === 'Soft Skill' && <SoftSkill />}
            {select_skill === 'Language' && <Language />}
            {select_skill === 'Personal Data' &&  <Persional_data/>} 
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
