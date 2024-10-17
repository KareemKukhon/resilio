import React from 'react'
import ServiceCard from '../../components/service_card'

export default function OurServices() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Our Service</h1>
      <p style={{fontSize: "22px", color: "#7D7D7D"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae nesciunt, aperiam est dolor et libero nam dignissimos quos? Dolores consectetur rem hic! Ducimus, assumenda! Quae eos officiis enim sit!
      </p>
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "25px",
    }}>
      <ServiceCard
      title="Web Development" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae nesciunt, aperiam est dolor et libero nam dignissimos quos? Dolores consectetur rem hic! Ducimus, assumenda! Quae eos officiis enim sit!" 
      color="black" 
      image={`${process.env.PUBLIC_URL}/webDevelopment.png`} 
      altText="Resilio company web development logo" 
      />
      <ServiceCard
      title="mobile Development" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae nesciunt, aperiam est dolor et libero nam dignissimos quos? Dolores consectetur rem hic! Ducimus, assumenda! Quae eos officiis enim sit!" 
      color="black" 
      image={`${process.env.PUBLIC_URL}/webDevelopment.png`} 
      altText="Resilio company web development logo" 
      />
    </div>
    </div>
    
  )
}
