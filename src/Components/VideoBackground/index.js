import React from 'react';
import './videobackground.scss';;

const VideoBackground = (props) => {
  return (
    <div className="video-container">
       <video className="video" autoPlay="true" loop>
        <source src={props.video} type="video/mp4" />
      </video>   
    </div>
  )
  
}

export default VideoBackground;
