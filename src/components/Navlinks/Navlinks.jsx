import React from "react";

import "../../styles/navlinks.css";
import { useNavigate } from "react-router-dom";

export default function NavLinks() {
    const navigate = useNavigate();

    return (
        <div className="navbar-container">
            
            <center><h1>Galactic Explorer</h1></center>
            <div className="navlinks">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/about')}>Mission</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
}
