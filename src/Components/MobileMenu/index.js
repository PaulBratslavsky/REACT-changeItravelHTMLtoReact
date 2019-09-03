import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = (props) => {
  const { showMobileNav, onClickCloseMenu } = props; 

  let visibility = 'hide';

  if (showMobileNav) {
    visibility = "show";
  }
 
  return (
    <nav className={`mobile-nav center ${visibility}`}>
      <div className="container">
        <div className="mobile-nav__item center">
          <Link onClick={onClickCloseMenu} to='/'>Home</Link>
          <Link onClick={onClickCloseMenu} to='/about'>About</Link>
          <Link onClick={onClickCloseMenu} to='/services'>Services</Link>
          <Link onClick={onClickCloseMenu} to='/testimonials'>Testimonials</Link>
          <Link onClick={onClickCloseMenu} to='/contact'>Contatct</Link>
        </div>
      </div>
    </nav>
  )
}

export default MobileMenu;
