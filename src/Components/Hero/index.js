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
        <h2 className="margin-bottom-2">The first trip we planned <span>was our own</span>.</h2>

        <h3 className="margin-bottom-2">Ever since, we&rsquo;ve been working to make travel<span>better for everyone</span>.</h3>

        <Button backgroundColor="#FFA500" color="white" text="Plan Your Getaway"/>
      </div>
    </div>
  )
}

export default Hero;
