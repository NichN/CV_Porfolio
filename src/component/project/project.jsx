import '../project/project.css';
import IMGUI from '../../assets/figma.jpg';
import Laravel from '../../assets/laravel.jpg';
import Flutter from '../../assets/FLUTTER.jpg';
import Linkicon from '../../assets/Link_icon.png';
import Footer from '../footer/footer.jsx';

function Project() {
    return (
        <>
            <div className='Project'>
                <h1>MY WORK</h1>
                <div className='Project_fill'>
                    <div className='Project_box'>
                        <img src={IMGUI} alt="UX/UI Project" />
                        <div className='Link'>
                            <a href="https://www.figma.com/design/CbY9jFHpPIk8dd5ZHnnVzR/Library_for_admin_UI?node-id=0-1&t=lZHZM5f6PJcS3dyY-1" target="_blank" rel="noopener noreferrer">
                                <img src={Linkicon} alt="Link Icon" />
                            </a>
                        </div>
                        <p>UX/UI Project</p>
                        <p>Using Figma for Design</p>
                    </div>
                    <div className='Project_box'>
                        <img src={Laravel} alt="LIST CRUD Project" />
                        <div className='Link'>
                            <a href="https://github.com/NichN/Laravel-CRUD-list" target="_blank" rel="noopener noreferrer">
                                <img src={Linkicon} alt="Link Icon" />
                            </a>
                        </div>
                        <h4>LIST CRUD</h4>
                        <p>Using Laravel and PHP</p>
                    </div>
                    <div className='Project_box'>
                        <img src={Flutter} alt="Mobile UI Project" />
                        <div className='Link'>
                            <a href="https://github.com/your-username/flutter-ui-project" target="_blank" rel="noopener noreferrer">
                                <img src={Linkicon} alt="Link Icon" />
                            </a>
                        </div>
                        <h4>Mobile UI Project</h4>
                        <p>Using Flutter (Dart)</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Project;
