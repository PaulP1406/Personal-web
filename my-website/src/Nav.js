import React from 'react'
import logo from './logo.png';
import { useState } from 'react';

const About = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };;
  return (    
    <nav>
      <div className="logo">
        <img src={logo} alt='Logo' />
      </div>
      <button
        className="icon-menu"
        onClick={toggleNav}
      >        
        ☰
      </button>
      <ul className={`nav-content ${isNavExpanded ? 'expanded' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
        {isNavExpanded && (
          <button className="close-nav" onClick={toggleNav}>
            &times; 
          </button>
        )}
      </ul>
    </nav>
  )
}

export default About