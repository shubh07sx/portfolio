import React from 'react';
import video from '../images/video1.mp4';
import '../VideoBackground.css';


//Not Used
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;