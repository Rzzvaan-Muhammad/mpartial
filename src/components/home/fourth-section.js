import React from "react";

const FourthSection = () => {
  return (
    <>
      <div className="mpartial_section howitworks">
        <div className="container">
          <div className="title center">
            <div className="row">
              <div className="col">
                <h2 className="section_title_text">How It Works</h2>
              </div>
            </div>
          </div>
          <div className="data_points">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_1 col-md-4 col-sm-12">
                    1
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <a href="https://www.getinsights.org/matterport-standards/?__hstc=6037484.89f0a86667a3d65e455d25ec30c1febc.1621229812890.1621347931292.1621408055565.14&amp;__hssc=6037484.2.1621408055565&amp;__hsfp=3989235780">
                      Perform pre-mitigation and post-mitigation scans with a
                      Matterport Pro Series camera.
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_2 col-md-4 col-sm-12">
                    2
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <span>
                      Submit the Matterport scans via the mpartial portal and
                      then go back to what you do great.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_3 col-md-4 col-sm-12">
                    3
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <span>
                      Receive a well-formatted, fully documented Xactimate PDF,
                      ESX &amp; Matterport TruePlan SKX.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="try_now_btn">
            <a href="/login">
              <button className="btn">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
