import React from 'react';
import './fetures.scss';

const Features = () => {
  return (
    <div className="features top-55">
      <div className="container padding-4">

        <div className="features-heading margin-bottom-2">
          <i class="fas fa-star"></i>
          <h2>Our Features</h2>
        </div>

        <div className="features-content">
          <div className="features-content-item margin-bottom-2">
            <i class="fas fa-anchor"></i>
            <h3 className="margin-bottom-1">Feature One</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illo distinctio error deleniti. Pariatur inventore dolorum necessi tatibus ducimus iste non? Perferendis ducimus sed maiores.</p>
          </div>

          <div className="features-content-item margin-bottom-2">
            <i class="fas fa-motorcycle"></i>
            <h3 className="margin-bottom-1">Feature One</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illo distinctio error deleniti accusantium. Pariatur inventore dolorum necessitatibus ducimus iste non? Perferendis ducimus sed maiores.</p>
          </div>

          <div className="features-content-item margin-bottom-2">
            <i class="fas fa-hiking"></i>
            <h3 className="margin-bottom-1">Feature One</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illo distinctio error deleniti accusantium. Pariatur inventore dolorum necessitatibus ducimus iste non? Perferendis ducimus sed maiores.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
