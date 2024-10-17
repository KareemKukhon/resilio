import React from 'react'
import ElevatedButton from '../../components/elevatedButton'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './style.css'
import ContactIcon from '../../icons/contact-icon'
import { useNavigate } from 'react-router-dom';

export default function Introduction() {
  const navigate = useNavigate();
  return (
    <div className="curvy-section">
      <h1 className='title'>Welcome to, <span>Resilio</span></h1>
      <p className='title-description'>Resilio was founded with a vision to provide cutting-edge IT development and consulting services. While we may be new to the market, our team members have extensive experience and a strong background in technology, having worked on various successful projects in different capacities.</p>
      <ElevatedButton onClick={()=>navigate('/contact')} >
        Contact Us 
        <ContactIcon/>
        </ElevatedButton>

        <div className="social-media-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
    </div>

    </div>
  )
}
