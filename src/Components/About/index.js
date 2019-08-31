import React from 'react';
import './about.scss';
import ImageBackground from '../ImageBackground';

const About = () => {
  return (
    <div className="about-section">

      <ImageBackground image={"./img/beachandfun.jpg"} alt="My image on vacation."/>
      <div className="about-section__header center">
        <h2 className="margin-bottom-2">The first trip we planned was our own.</h2>
        <h3>Ever since, we’ve been working to make travel 
better for everyone.</h3>
      </div>

      <div className="about-section__content margin-3">
        <div className="container">
          <h2 className="margin-bottom-2">Here’s how we got started…</h2>

          <p className="margin-bottom-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p className="margin-bottom-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <p className="margin-bottom-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum velit esse cillum dolore eu fugiat.</p>

        </div>
      </div>
    </div>
  )
}

export default About;
