import React from 'react'
import './navbar.css'
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

const NavbarTop = () => {
    return (
        <div className='nav-top'>
            <div className='nav-top-left'>
                <span>saurabhpankaj@gmail.com</span>
                <span className='phone'>(+91) 730 3030 000</span>
            </div>
            <div className='nav-top-right'>
                <div className='nav-top-icon-hover'><FaFacebookF /></div>
                <div className='nav-top-icon-hover'><FaYoutube /></div>
                <div className='nav-top-icon-hover'><FaLinkedin /></div>
            </div>
        </div>
    )
}

export default NavbarTop