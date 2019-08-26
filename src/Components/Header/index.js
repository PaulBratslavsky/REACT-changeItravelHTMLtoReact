import React from 'react';
import LogoContainer from './../LogoContainer';
import NavContainer from './../NavContainer';

const Header = () => {
  return (
    <header className="main-header center">
      <div className="container flex-row-between">
        <LogoContainer />
        <NavContainer />
      </div>
    </header>
  )
}

export default Header;
