import React from 'react';
import './videobackground.scss';;

const VideoBackground = (props) => {
  return (
    <div className="video-container">
        <div className="video-overlay"></div>
       <video className="video" autoPlay loop muted>
        <source src={props.video} type="video/mp4" />
      </video>   
    </div>
  )
  
}

export default VideoBackground;
