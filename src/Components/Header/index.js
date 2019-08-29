import React from 'react';
import LogoContainer from './../LogoContainer';
import NavContainer from './../NavContainer';

const Header = (props) => {
  const { onClickToggleMenu } = props;
  return (
    <header className="main-header center">
      <div className="container flex-row-between">
        <LogoContainer />
        <NavContainer onClickToggleMenu={onClickToggleMenu}/>
      </div>
    </header>
  )
}

export default Header;
