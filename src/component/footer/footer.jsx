import './footer.css';
import Phone from '../../assets/phone.png';
import Telegram from '../../assets/blue_telegram.png';
import Email from '../../assets/Emailpng.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-info">
                <h4>Contact Me</h4>
                <div className="contact-item">
                    <img src={Phone} alt="Phone" className="contact-icon" />
                    <span>+855 968681842</span>
                </div>
                <div className="contact-item">
                    <img src={Telegram} alt="Telegram" className="contact-icon" />
                    <span>0968681842</span>
                </div>
                <div className="contact-item">
                    <img src={Email} alt="Email" className="contact-icon" />
                    <span>sreynichny220@gmail.com</span>
                </div>
            </div>
            <div className='Thanks'>
                <p>Thanks you !</p>
            </div>
        </div>
    );
}

export default Footer;
