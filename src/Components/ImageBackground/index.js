import React from 'react';
import './imagebackground.scss';

const ImageBackground = (props) => {
  const { image, alt } = props;
  return (
    <div className="image-container">
        <div className="image-overlay"></div>
        <img className="image" src={image} alt={alt}/>

    </div>
  )
  
}

export default ImageBackground;
