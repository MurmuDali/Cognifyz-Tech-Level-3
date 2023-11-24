import React from 'react';
import './Header.css';
//import Logo from './logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        
        <div className="nav-header">
         <h2 className='nav-title'>Cognifyz Technologies</h2>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item"><a href='#home'>HOME</a></li>
            <li className="nav-item"><a href="#about">ABOUT</a></li>
            <li className="nav-item"><a href="#details">DETAILS</a></li>
            <li className="nav-item"><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    
    </header>
  )
}

export default Header