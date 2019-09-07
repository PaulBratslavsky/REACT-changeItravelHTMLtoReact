import React from 'react';
import { Link } from 'react-router-dom';

import './mainnav.scss';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
      <Link to='/testimonials'>Testimonials</Link>
      <Link  to='/contact'>Contatct</Link>
    </nav>
  )
}

export default MainNav;
