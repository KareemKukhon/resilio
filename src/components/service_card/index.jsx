import React from 'react'
import './style.css'
export default function ServiceCard(
    {
        title = "no title found in this card",
        description = "no text found in this card",
        image = `${process.env.PUBLIC_URL}/webDevelopment.png`,
        altText = "Resilio company logo"
    }
) {
  return (
    <div className='service_card'>
      <div style={{display: 'flex', justifyContent: "inline", alignItems: "center", gap: "10px"}} >
        <div style={{width: "50px",height: '50px' , backgroundColor: "black", borderRadius: "100%", alignContent: "center", justifyItems: "center",}}>
        <img src={`${image}`} alt= {altText} className='logo'style={{width: "50%"}} />
        </div>
        <h2>
            {title}
        </h2>
        
      </div>
      <div>
          <p style={{
            textAlign: "justify",
            fontSize: "16px",
            textAlign: "left",
            color: "#37474FB8",
          }}>
            {description}
          </p>
        </div>
        <div>
          <a href="" style={{textDecoration: "none"}}>
            <div style={{alignContent: "center", justifyItems: "center", display: "flex", gap: "10px", alignItems: "end"}}>
              <span style={{color:"#348DCD", fontSize: "17px", fontWeight: "bold" }}>
                Learn More
              </span>
              <img src={`${process.env.PUBLIC_URL}/arrow.svg`} alt="" />
            </div>
          </a>
        </div>
    </div>
  )
}
