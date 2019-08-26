import React from 'react';
import LogoContainer from './../LogoContainer';
import NavContainer from './../NavContainer';

const Header = () => {
  return (
    <header>
      <div className="container">
        <LogoContainer />
        <NavContainer />
      </div>
    </header>
  )
}

export default Header;
