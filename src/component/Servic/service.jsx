import '../Servic/service.css';
import Design from '../../assets/Design.png'
import UI from '../../assets/UI.png'
import DEV from '../../assets/Developt.png'
function service(){
    return(
        <div>
        <div className='service caption'>
            <h1>MY SERVICE</h1>
        </div>
        <div className='Box-service'>
            <div className='box1'>
                <img src={Design}></img>
                <h4>Frontend Design</h4>
                <p>Skilled in crafting responsive, user-friendly interfaces using Figma, HTML, CSS, React and  CSS to deliver modern and engaging designs.</p>
            </div>
            <div className='box2'>
            <img src={UI}></img>
                <h4>UX/UI Design</h4>
                <p>Skilled in using Figma and Adobe XD to create intuitive and visually appealing user interfaces.</p>
            </div>
            <div className='box3'>
            <img src={DEV}></img>
                <h4>Backend Development</h4>
                <p>Proficient in building robust backend systems using PHP, Laravel, and MySQL, with a focus on scalability, performance, and secure data management.</p>
            </div>
        </div>
        </div>
    )
}
export default service;