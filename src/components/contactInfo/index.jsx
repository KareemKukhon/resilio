import React from 'react'
import HomeIcon from '../../icons/home-icon'
import theme from '../../config/themes/websiteTheme'

export default function 
ContactInfo({title, Icon}) {
  return (
    <div style={{display: 'flex', gap: "20px", alignItems: 'center'}}>
      <Icon color={theme.light.primary} />
      <p style={{fontSize: "18px"}}>{title}</p>
    </div>
  )
}
