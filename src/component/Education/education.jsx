import './education.css'
import arrowanimation from'../../assets/Arrow2.jpg';

function Education(){
  
    return(
        <div className='education-list'>
        <h1>MY EDUCATION</h1>
        <div className="Education-info">
            <div className="Education-Text">
                <div className='edu-column1'>
                <div className="Education-box1">
                   <h4>2019-2021</h4>
                   <p>Graduated Bacll from Preah Andoung High School.</p>
                </div>
                <div className="Education-box2">
                   <h4>2021(3month)</h4>
                   <p>Learning C, C++ language course at ETEC Center.</p>
                </div>
                </div>
                <div className='edu-column2'>
                <div className="Education-box3">
                   <h4>2022-Present</h4>
                   <p> Study at Norton University (Software Development)</p>
                </div>
                <div className="Education-box4">
                   <h4>Event</h4>
                   <p>Join event as visitor of event second national day of science technology
                    and navigation 2024 at Hall Koh Pich.
                   </p>
                </div>
                </div>
                   
            </div>
            </div>
        </div>
    );
}
export default Education;