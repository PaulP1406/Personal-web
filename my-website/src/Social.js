import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className='Social'>
        <div className="icon-container">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        
    </div>
  )
}

export default Social