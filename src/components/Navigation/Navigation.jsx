import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav >
            <ul >
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
                <li><Link to={'/service'} className="nav-link">Service</Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/production'} className="nav-link">Production</Link></li>


            </ul>
        </nav>
    )
}

export default Navigation
