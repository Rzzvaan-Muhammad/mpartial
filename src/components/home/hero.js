import React from "react";
// import { Link } from "gatsby";
// import sourse from "../../images/homepage.mp4";

const Hero = () => {
  return (
    <div className="home_video_background">
      <div className="lazyload-wrapper">
        <div className="BackgroundVideo">
          <video
            className="BackgroundVideo-main"
            src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4"
            preload="auto"
            autoPlay
            loop
            playsInLine
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
