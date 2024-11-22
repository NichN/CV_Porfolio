import React from "react";
import './intro.css';
import Image from'../../assets/pofoliopf.jpg';
import CV from '../../assets/NY_SREYNICH_CV.pdf';
function intro(){
    return(
        <section id="section-intro">
            <div className="intronContent">
                <span className="hello">Dear Sir/Madam</span>
                <span className="Name">I'm NY Sreynich</span>
                <span className="position">Web developer</span>
                <p className="paragreph"> I am a fourth-year Software Development major at Norton University,<br></br>
                    actively seeking an internship to apply my technical skills and knowledge.</p>
                <a href="path-to-your-CV-file.pdf" download="NY_SREYNICH_CV.pdf">
                <button className="btn download-btn">
                <span className="btn-icon">📄</span> Download CV
                </button>
                </a>

            </div>
            <img src={Image} alt="" className="profile-img"></img>
        </section>
    );
}
export default intro;