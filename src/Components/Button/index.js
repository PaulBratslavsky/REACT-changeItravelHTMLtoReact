import React from 'react';

const Button = (props) => {
  const { text, backgroundColor, color } = props;
  
  const buttonStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    textTransform: 'capitalize',
    color: color,
    background: backgroundColor,
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '3px'
  }
  
  return (
    <button style={buttonStyle}>{text}</button>
  )
}

export default Button;
