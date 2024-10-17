import React from 'react'
import './style.css'

export default function AboutUs() {
  
  return (
    <div style={{color: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "100px", padding: "20px",}}>
      <div>
      <h1 style={{color: "black"}}>
        About us
      </h1>
    </div>
    <div className='aboutUs' >
      <div>
      <h1>Introduction</h1>
      <p>
      Resilio was founded with a vision to provide cutting-edge IT development and consulting services. While we may be new to the market, our team members have extensive experience and a strong background in technology, having worked on various successful projects in different capacities.
      </p>
      <h1>
      Objectives
      </h1>
      <p>The primary objectives of our engagement with you are:</p>
        <ol>
          <li>To provide you with a high-quality IT solution that meets your business needs.</li>
          <li>To provide you with a team of experienced IT professionals that can help you achieve your IT goals.</li>
          <li>To provide you with a cost-effective and timely IT solution.</li>
        </ol>
        <h1>
        Why Choose Us?
      </h1>
        <ol>
          <li>Passionate Team: Our team is driven by a passion for technology and innovation.</li>
          <li>Client-Centric Approach: We prioritize your business needs and deliver solutions that add value.</li>
          <li> Flexible and Adaptive: We are agile and can quickly adapt to changing requirements and technologies.</li>
          <li>Commitment to Quality: Despite being a startup, we adhere to the highest standards of quality and best practices, including compliance with UK and Swedish IT standards and regulations such as GDPR and ISO/IEC 27001.</li>
        </ol>
      </div>
      
      <img className='responsive-image' src={`${process.env.PUBLIC_URL}/aboutUs.jpg`} alt="" />
    </div>
    
    </div>
    )
}
