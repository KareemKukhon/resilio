import React from 'react'
import "./style.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
      <h1>
        Resilio
      </h1>
      <div className='navigate'>
        <a href="">
            Home
        </a>
        <a href="">About us</a>
        <a href="">Our Service</a>
        <a href="/contact">Contact us</a>
      </div>
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
    <p style={{color: "#7D7D7D"}}>
    Copyright © Resilio. All rights reserved. 2024
    </p>
    </div>
  )
}
