import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact-section'>
         <h2>Contact Us</h2>
         <div className='icon-section'>
         <a href='' target='_blank' >
          <FontAwesomeIcon icon = {faLinkedin} className='icon' />
           <div className='tooltip'>LinkedIn: @cognifyz-Technologies</div>
         </a>
         <a href='https://www.instagram.com/' target='_blank' >
           <FontAwesomeIcon icon = {faInstagram} className='icon' />
           <div className='tooltip'>Instagram: @cognifyz_tech</div>
         </a>
         </div>
         
    </div>
  )
}

export default Contact