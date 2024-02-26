import React from 'react'
import logo from './logo.png';
import logoAlter from  './logo_alter.png';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsNavExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // You can adjust the number as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (    
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={scrolled ? logoAlter : logo} alt='Logo' />
      </div>
      <button
        className="icon-menu"
        onClick={toggleNav}
      >        
        ☰
      </button>
      <ul className={`nav-content ${isNavExpanded ? 'expanded' : ''}`}>
        <li><a href="#home" onClick={handleNavClick} >Home</a></li>
        <li><a href="#about" onClick={handleNavClick} >About Me</a></li>
        {/*<li><a href="#work" onClick={handleNavClick} >Work</a></li> */}
        <li><a href="#contact" onClick={handleNavClick} >Contact</a></li>
        {isNavExpanded && (
          <button className="close-nav" onClick={toggleNav}>
            &times; 
          </button>
        )}
      </ul>
    </nav>
  )
}

export default Nav