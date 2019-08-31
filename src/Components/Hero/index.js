import React from 'react';
import VideoBackground from '../VideoBackground';
import './hero.scss';
import Button from '../Button';

const Hero = () => {

  const video = "./img/oceanview.mp4";

  return (
    <div className="hero-section center">
      <VideoBackground video={video} />
      <div className="hero-content">
        <h2 className="margin-bottom-2">Your clarity is one trip away.</h2>

        <h3 className="margin-bottom-2">We create soul restoring journeys that inspire you to be you.</h3>

        <Button backgroundColor="#FFA500" color="white" text="Plan Your Getaway"/>
      </div>
    </div>
  )
}

export default Hero;
