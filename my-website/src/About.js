import React from 'react'
import myImage from './profilePic.jpg';
import logo from './about-logo.png';

const About = () => {
  return (
    <div className="about" id='about'>
      <p className='about-title'> About <img src = {logo} alt='logo'></img></p>
      <div className="about-main"> 
        <p className='about-description'>
          Hello! I'm Paul Pham, a full-stack developer with a passion for technology, currently in my third year of Computer
          Science at Simon Fraser University. I have over a year of experience in the ReactJS, JS, Java, C/C++ and more! I am 
          currently looking for a co-op opportunity for the Summer 2024 term. My hobbies are software developing and 
          learning new technology every day! Outside of coding, I'm an avid F1, football and chess fan.
        </p>
        <img src= {myImage} alt="Profile picture"></img>
      </div>
      
      
    </div>
  )
}

export default About