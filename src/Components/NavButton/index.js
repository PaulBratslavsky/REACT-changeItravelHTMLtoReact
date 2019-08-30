import React from 'react';

const NavButton = (props) => {
  const { onClickToggleMenu } = props;

  //Button global style?

  const btnStyle = {
    border: 'none',
    background: 'none',
  } 

  const iconStyle = {
    fontSize: '1.6rem',
    color: '#fefefe'
  }

  return(
    <button style={btnStyle} onClick={onClickToggleMenu}>
      <i style={iconStyle} className="fas fa-bars"></i>
    </button>
  );
}

export default NavButton;