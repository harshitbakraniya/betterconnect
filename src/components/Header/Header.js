import React from 'react'
import { Link as RouterLink } from 'react-router-dom'; 
import { Link } from 'react-scroll';
import './Header.css';
import {HiMenuAlt3} from 'react-icons/hi';
import Logo from '../../assets/images/logo.svg';

const Header = ({backColor}) => {
  return (
    <header className='header' style={{backgroundColor:backColor}}>
        <nav className='navigation d-flex align-items-center justify-content-between'>
            <ul className='list d-flex align-items-center'>
                <li className='list-item'>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
                </li>
                {/* <li className='list-item'>
                    <Link to='/teacher'>Teacher</Link>
                </li> */}
                <li className='list-item'>
                    <Link to="impact" spy={true} smooth={true} offset={0} duration={500}>Impact</Link>
                </li>
                <li className='list-item'>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact Us</Link>
                </li>
            </ul>
            <div className='logo d-flex align-items-center'>
                <RouterLink to='/'><img src={Logo} alt='logo' /></RouterLink>
            </div>
            <div className='register-btn'>
                <RouterLink to="/teacher"><button className='btn'>Register as teacher</button></RouterLink>
            </div>
            <HiMenuAlt3 className='menu-btn'/>
        </nav>
    </header>
  )
}

export default Header