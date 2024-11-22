import React, { useState } from 'react';
import picture from '../../assets/contact.jpg';
import { Link } from "react-scroll";
import List from './list.jsx';
import DropImage from '../../assets/download2.png';

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    const dropdownBTN = () => {
        setDropdown(prev => !prev);
    };

    return(
        <nav className='Navbar-fell'>
        <h1 className='name-logo'>NICH</h1>
        <nav className='Navbar'>
            <div className='dropdown-icon'>
                <img src={DropImage}></img>
            </div>
            <div className='Menu_navbar'>
                <Link 
                    className='Menu_navbarlist' 
                    to="home" 
                    smooth={true} 
                    duration={500}
                >
                    Home
                </Link>
                <Link 
                    className='Menu_navbarlist' 
                    to="about" 
                    smooth={true} 
                    duration={500}
                >
                    About
                </Link>
                <Link 
                    className='Menu_navbarlist' 
                    to="education" 
                    smooth={true} 
                    duration={500}
                >
                    Education
                </Link>
                <Link 
                    className='Menu_navbarlist' 
                    to="service" 
                    smooth={true} 
                    duration={500}
                >
                    Service
                </Link>
                <Link 
                    className='Menu_navbarlist' 
                    to="project" 
                    smooth={true} 
                    duration={500}
                >
                    Project
                </Link>
            </div>
        </nav>
        <nav className='Menu_navbar'>
        <button onClick={dropdownBTN}>
                <img src={picture} alt="Contact" className='menu_navbarimg' />
                Contact Me
            </button>
            {dropdown && (
                <div className='DropdownMenu'>
                    {List.map((item, index) => (
                        <div key={index}>
                            <h3>{item.Contact}</h3>
                        </div>
                    ))}
                </div>
            )}
        </nav>
        </nav>
    );
}

export default Navbar;
