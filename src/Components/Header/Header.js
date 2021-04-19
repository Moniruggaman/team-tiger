import React from 'react';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h2>Team-Tiger</h2>
        </div>
      
    );
};

export default Header;