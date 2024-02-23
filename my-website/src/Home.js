import React from 'react'

const Home = () => {
  return (
    <div className="home" id='home'>
      <p className='name-title'> Paul Pham</p>     
      <p className='title-description'>Full-stack developer, tech-ethusiast, and a great passion for coding</p>
      
      <div className="home-button">
        <button className='button-a'>
          <a 
          href='https://drive.google.com/file/d/192GgJMA8BKgrMK1228AXJoTHfdlqFq5B/view?usp=sharing' 
          target="_blank" 
          rel="noopener noreferrer">
          View CV</a></button>
        <button className='button-b'><a href='#Contact'>Contact me</a></button>
      </div>
    </div>   
    
  )
}

export default Home