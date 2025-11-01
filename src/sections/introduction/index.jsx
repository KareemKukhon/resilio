import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './style.css';

export default function Introduction() {
  return (
    <div className="curvy-section">
      <h1 className="title">
        SBF.com & SBF.com.sa <span>are for sale</span>
      </h1>

      <p className="title-description">
        Own <strong>SBF.com</strong> and <strong>SBF.com.sa</strong> — ultra-short, premium, and brand-ready domain names 
        perfectly aligned with Saudi Arabia’s digital transformation and government initiatives.
      </p>

      {/* <div className="cta-buttons">
        <a
          href="mailto:offers@sbf.com?subject=Offer%20for%20SBF.com"
          className="elevated-button"
        >
          <FaEnvelope style={{ marginRight: '8px' }} />
          Inquire About Price
        </a>

        <a
          href="https://wa.me/9665XXXXXXX?text=I’m%20interested%20in%20SBF.com"
          className="elevated-button outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp style={{ marginRight: '8px' }} />
          Contact via WhatsApp
        </a>
      </div> */}

      <p className="title-description small-note">
        Serious offers only. Ownership verified. Escrow supported.
      </p>
    </div>
  );
}
