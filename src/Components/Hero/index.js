import React from 'react';
import VideoBackground from '../VideoBackground';

const Hero = () => {

  const video = "./img/oceanview.mp4";

  return (
    <div className="hero-section">
      <VideoBackground video={video} />
      <div className="hero-content">
        <h2>The first trip we planned <span>was our own</span>.</h2>

        <h3>Ever since, we&rsquo;ve been working to make travel<span>better for everyone</span>.</h3>
      </div>
    </div>
  )
}

export default Hero;
