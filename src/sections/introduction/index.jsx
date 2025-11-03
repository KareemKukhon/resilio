import React from 'react';
import { Helmet } from 'react-helmet';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './style.css';

export default function Introduction() {
  // JSON-LD structured data (Product/Offer)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SBF.com & SBF.com.sa",
    "description": "Premium 3-letter domain pair for sale — short, memorable, and ideal for Saudi brands or government digital initiatives.",
    "brand": { "@type": "Brand", "name": "SBF Domains" },
    "sku": "SBF-DOMAIN-PAIR",
    "offers": {
      "@type": "Offer",
      "url": "https://sbf.com/",
      "priceCurrency": "USD",
      "price": "0",                     // POA (Price on Ask)
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Person", "name": "Owner" }
    }
  };

  return (
    <div className="curvy-section">
      {/* SEO HEAD */}
      <Helmet>
        {/* === Primary Meta === */}
        <title>Buy SBF.com & SBF.com.sa | Premium 3-Letter Domain Pair For Sale</title>
        <meta
          name="description"
          content="Own SBF.com & SBF.com.sa — ultra-short, brandable, and perfect for Saudi digital/government initiatives. Serious offers only."
        />
        {/* لو بدك تعتبر sbf.com هو الأساسي */}
        <link rel="canonical" href="https://sbf.com/" />

        {/* === Language/Region alternates (مهم لنسخة .sa) === */}
        <link rel="alternate" href="https://sbf.com/" hrefLang="en" />
        <link rel="alternate" href="https://sbf.com.sa/" hrefLang="ar-SA" />
        <link rel="alternate" href="https://sbf.com/" hrefLang="x-default" />

        {/* === Open Graph (Facebook/WhatsApp) === */}
        <meta property="og:title" content="Buy SBF.com & SBF.com.sa | Premium 3-Letter Domain Pair For Sale" />
        <meta
          property="og:description"
          content="Own SBF.com & SBF.com.sa — short, memorable, and ideal for Saudi digital and financial initiatives."
        />
        <meta property="og:url" content="https://sbf.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sbf.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* === Twitter Card === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SBF.com & SBF.com.sa — Premium Domain Pair For Sale" />
        <meta name="twitter:description" content="Exclusive 3-letter domains perfectly suited for Saudi digital initiatives." />
        <meta name="twitter:image" content="https://sbf.com/og-image.jpg" />

        {/* === Robots === */}
        <meta name="robots" content="index, follow" />

        {/* === JSON-LD Structured Data === */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* CONTENT */}
      <h1 className="title">
        SBF.com & SBF.com.sa <span>are for sale</span>
      </h1>

      <p className="title-description">
        Own <strong>SBF.com</strong> and <strong>SBF.com.sa</strong> — ultra-short, premium, and brand-ready domain names
        perfectly aligned with Saudi Arabia’s digital transformation and government initiatives.
      </p>

      {/* CTA (اختياري ترجع تفعّلها) */}
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
