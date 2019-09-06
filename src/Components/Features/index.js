import React from 'react';
import './fetures.scss';

import ImageBackground from './../ImageBackground';

const Features = () => {
  return (
    <div className="features">

    <ImageBackground image={"./img/adult-ancient.jpg"} alt="My vacation."/>
      <div className="about-section__header center">
      <div className="features-heading margin-bottom-2">
          <i className="fas fa-star margin-bottom-3"></i>
          <h2>Our Services</h2>
        </div>
      </div>

      <div className="container padding-4">
        <div className="features-content content-container">
          <div className="features-content-item margin-bottom-2">
            <i className="fas fa-anchor margin-bottom-1" ></i>
            <h3 className="margin-bottom-1">Trip Planning</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illo distinctio error deleniti. Pariatur inventore dolorum necessi tatibus ducimus iste non? Perferendis ducimus sed maiores.</p>
          </div>

          <div className="features-content-item margin-bottom-2">
            <i className="fas fa-motorcycle margin-bottom-1"></i>
            <h3 className="margin-bottom-1">Daily Activities</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illo distinctio error deleniti accusantium. Pariatur inventore dolorum necessitatibus ducimus iste non? Perferendis ducimus sed maiores.</p>
          </div>

          <div className="features-content-item margin-bottom-2">
            <i className="fas fa-hiking margin-bottom-1"></i>
            <h3 className="margin-bottom-1">Surprise Adventure</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illo distinctio error deleniti accusantium. Pariatur inventore dolorum necessitatibus ducimus iste non? Perferendis ducimus sed maiores.</p>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Features;
