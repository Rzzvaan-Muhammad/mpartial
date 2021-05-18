import React, { useState } from "react";
import Img1 from "../../images/com_img_1.jpg";
import Img2 from "../../images/com_img_2.jpg";
import Controler from "../../images/controler.png";

// controler;
const ThirdSection = () => {
  const [index, setIndex] = useState(300);
  return (
    <>
      <div className="compare_images_section">
        <div
          className="compare_images_section_inner"
          onClick={(e) => setIndex(e.pageX)}
        >
          <img
            className="compare_image_1"
            style={{ clip: `rect(auto, auto, auto, ${index}px)` }}
            src={Img1}
          ></img>
          <img
            className="compare_image_2"
            style={{ clip: `rect(auto, ${index}px, auto, auto)` }}
            src={Img2}
          ></img>
          <div className="handle_stick" style={{ left: `${index - 20}px` }}>
            <div className="handle_stick_inner"></div>
            <div className="handle_stick_controler">
              <img
                className="controler-img"
                src={Controler}
                onClick={(e) => setIndex(e.pageX)}
              ></img>
            </div>
            <div className="controler-div"></div>
          </div>
          <div dir="ltr" className="dir_upper_div">
            <div class="resize-sensor-expand">
              <div className="resize-sensor-expend-inner"></div>
            </div>
            <div class="resize-sensor-shrink">
              <div className="resize-sensor-shrink-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
