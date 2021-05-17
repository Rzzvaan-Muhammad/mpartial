import React from "react";
// import { Link } from "gatsby";
import sourse from "../../images/homepage.mp4";

const Hero = () => {
  return (
    <div className="home_video_background">
      <div className="lazyload-wrapper">
        <div className="BackgroundVideo">
          <video
            className="BackgroundVideo-main"
            // src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4"
            src={sourse}
            preload="true"
            autoPlay
            loop
            playsInLine
            muted
          />
        </div>
        <div className="slider_down">
          <div className="slider_down_btn"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
