import React from 'react';
import './style.css';
const ElevatedButton = ({ children, reduis, width, onClick }) => {
  return (
    <button className="elevated-button" style={{borderRadius: `${reduis}`, width: `${width}`}} onClick={onClick}>
      {children}
    </button>
  );
};

export default ElevatedButton;
