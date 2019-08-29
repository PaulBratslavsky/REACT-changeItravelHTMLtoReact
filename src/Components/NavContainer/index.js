import React from 'react';
import NavButton from './../NavButton';

const NavContainer = (props) => {
  const { onClickToggleMenu } = props;
  return (
    <NavButton onClickToggleMenu={onClickToggleMenu} />
  );
}

export default NavContainer;
