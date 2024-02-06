import React from 'react';
import "./footer.css";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

// const regions = [
//     {
//         name: 'NORTH',
//         cities: ['Delhi', 'Noida', 'Gurgaon', 'Chandigarh', 'Jaipur', 'Kanpur', 'Lucknow'],
//     },
//     {
//         name: 'SOUTH',
//         cities: ['Bangalore', 'Vishakapatnam', 'Vijaywada'],
//     },
//     {
//         name: 'WEST',
//         cities: ['Pune', 'Mumbai', 'Nagpur', 'Sangli', 'Kolhapur', 'Ahmedabad', 'Vadodara', 'Surat'],
//     },
//     {
//         name: 'EAST',
//         cities: ['Guwahati', 'Bhubaneswar'],
//     },
// ];
const Footer = () => {
    return (
        < >
            <div className='Footer'>
                <div className='first'>
                    <img style={{ width: "400px", margin: "60px" }} src='https://www.sawindia.com/wp-content/uploads/2020/11/LOGO-HD-2.png' />

                </div>
                <div>
                    <h2>Quick Links</h2>
                    <li>Blogs</li>
                    <li>Events</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>Privacy Policy</li>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <li>Blogs</li>
                    <li>Events</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>Privacy Policy</li>
                </div>
                <div className='lastDiv'>
                    <h2>Quick Links</h2>
                    <ul className='details'>
                        <li><span><FaFacebookF /></span></li>
                        <li><span><FaYoutube /></span></li>
                        <li><span><FaLinkedin /></span></li>
                    </ul>
                    <div>
                        <li className='phone'><span><FaPhoneVolume />(+91) 730 3030 000</span></li>
                        <li><span><IoIosMailOpen />saurabhpankaj@gmail.com</span></li>
                        <li><span><FaLocationDot />#3, Magnum Opus, Shantinagar, Vakola, Santacruz(E),<br /> Mumbai - 400 055, Maharashtra, India</span></li>
                    </div>
                </div>
            </div>
            <div className='SubFooter'>
                <h3>© 2024 WOODMIZER@Work (India) P. Ltd. All rights reserved.</h3>
            </div>
        </ >
    )
}

export default Footer
