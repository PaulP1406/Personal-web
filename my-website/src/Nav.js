import React from 'react'

const About = () => {
  return (
    <nav>
      <div className="logo">
        <img src='logo.svg' alt='logo' />
      </div>
      <ul className='nav-content'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default About