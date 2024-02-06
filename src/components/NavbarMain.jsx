import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


const NavbarMain = () => {
    return (
        <>

            <div className='nav-main'>
                <div className='logo'><img src="https://www.sawindia.com/wp-content/uploads/2020/11/darklogo.png" alt="logo" /></div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li className='active'><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/service'>Service</Link></li>
                        <li><Link to='/production'>Production</Link> </li>
                        <li><Link to='/contact'>Contact</Link> </li>
                        <li><Link to='/Careers'>Careers</Link> </li>
                        <span
                            style={{
                                background: "linear-gradient(to right,#54047e,#c2096c)",
                                padding: "10px 20px",
                                lineHeight: "40px",
                                fontWeight: "800",
                                color: "#ffffff",
                                marginLeft: "10px",
                                transition: ".2s linear",
                                cursor: "pointer",
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = "scale(1.1)";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                            }}
                        >
                            Get a call back!
                        </span>
                    </ul>

                </nav>




            </div>
        </>
    )
}

export default NavbarMain
