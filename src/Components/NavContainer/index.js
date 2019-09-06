import React from 'react';
import NavButton from './../NavButton';
import MainNav from './../MainNav';

const NavContainer = (props) => {
  const { onClickToggleMenu } = props;
  return (
    <React.Fragment>
      <NavButton onClickToggleMenu={onClickToggleMenu} />
      <MainNav /> 
    </React.Fragment>
  );
}

export default NavContainer;
