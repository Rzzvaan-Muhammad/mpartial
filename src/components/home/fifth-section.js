import React from "react";
import Title from "./title";

const FifthSection = () => {
  return (
    <>
      <div className="mpartial_section-5 ">
        <div className="container">
          <Title title="Waterfall Fee Structure" />
          <div className="slider css-8806o7-WaterFall">
            <div
              className="rangeslider rangeslider-horizontal"
              aria-valuemin="0"
              aria-valuemax="1000000"
              aria-valuenow="600000"
              aria-orientation="horizontal"
            >
              <div
                className="rangeslider__fill"
                //   style="width: 662.5px;"
              ></div>
              <div
                className="rangeslider__handle"
                tabindex="0"
                // style="left: 662.5px;"
              >
                <div className="rangeslider__handle-tooltip">
                  <span>
                    <div className="slider_tooltip_price">$600K</div>
                    <div className="slider_tooltip_text">
                      Estimate Grand Total
                    </div>
                  </span>
                </div>
                <div className="rangeslider__handle-label"></div>
              </div>
              <ul className="rangeslider__labels"></ul>
            </div>
            <ul className="css-wrrl2p-WaterFall">
              <li>$0</li>
              <li>$250,000</li>
              <li>$500,000</li>
              <li>$750,000</li>
              <li>$1M+</li>
            </ul>
          </div>
          <p class="section_title_description css-ulgnwk-WaterFall">
            Drag the slider around based on what you think it will cost to
            repair the property. <br />
            Move forward based on the estimated fee structure below.
          </p>
          <div className="mt-5 pt-5 mb-5">
            <div className="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-5">
                <div className="fee-box mobile-bottom">
                  <div class="header">
                    <div> Trial Plan</div>
                    <div>
                      <i class="info_popup">i</i>
                    </div>
                  </div>
                  <div className="body text-center">
                    <h4>7.22%</h4>
                    <div className="vsvsvsvs">
                      <div className="d-flex align-items-center mb-1">
                        <div
                          style={{
                            fontSize: "14px",
                            fontFamily: "Gilroy",
                            fontWeight: "600",
                            color: "#000",
                            opacity: "1",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{ width: "14px", height: "14px" }}
                            className="mr-2"
                            src="https://i.postimg.cc/9XpdkXy6/correct-5.png"
                          ></img>
                        </div>
                        <div> Fully access to mpartial engine</div>
                      </div>
                    </div>
                  </div>
                  <h4 style={{ fontSize: "30px" }}>Free</h4>
                  <div class="footer">[$750 Minimum]</div>
                </div>
              </div>
              <div class="col-lg-5">
                <div className="fee-box mobile-bottom">
                  <div
                    class="header"
                    style={{ background: "rgb(10, 81, 105)" }}
                  >
                    <div> Enterprise Plan </div>
                    <div>
                      <i class="info_popup">i</i>
                    </div>
                  </div>
                  <div className="body text-center">
                    <h4>6.38%</h4>
                    <div className="vsvsvsvs">
                      <div className="d-flex align-items-center mb-1">
                        <div
                          style={{
                            fontSize: "14px",
                            fontFamily: "Gilroy",
                            fontWeight: "600",
                            color: "#000",
                            opacity: "1",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{ width: "14px", height: "14px" }}
                            className="mr-2"
                            src="https://i.postimg.cc/9XpdkXy6/correct-5.png"
                          ></img>
                        </div>
                        <div> Discounted fee schedule</div>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <div
                          style={{
                            fontSize: "14px",
                            fontFamily: "Gilroy",
                            fontWeight: "600",
                            color: "#000",
                            opacity: "1",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{ width: "14px", height: "14px" }}
                            className="mr-2"
                            src="https://i.postimg.cc/9XpdkXy6/correct-5.png"
                          ></img>
                        </div>
                        <div> Unlimited collaborators </div>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <div
                          style={{
                            fontSize: "14px",
                            fontFamily: "Gilroy",
                            fontWeight: "600",
                            color: "#000",
                            opacity: "1",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{ width: "14px", height: "14px" }}
                            className="mr-2"
                            src="https://i.postimg.cc/9XpdkXy6/correct-5.png"
                          ></img>
                        </div>
                        <div> Dedicated account manager</div>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <div
                          style={{
                            fontSize: "14px",
                            fontFamily: "Gilroy",
                            fontWeight: "600",
                            color: "#000",
                            opacity: "1",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{ width: "14px", height: "14px" }}
                            className="mr-2"
                            src="https://i.postimg.cc/9XpdkXy6/correct-5.png"
                          ></img>
                        </div>
                        <div>Prioritized turnaround time</div>
                      </div>
                    </div>
                  </div>
                  <h4 style={{ fontSize: "30px" }}>$495/month</h4>
                  <div class="footer">[$750 Minimum]</div>
                </div>
              </div>
              <div class="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
