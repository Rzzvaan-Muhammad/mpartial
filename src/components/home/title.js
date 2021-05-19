import React from "react";

const Title = ({ title }) => {
  return (
    <div className="title center">
      <div className="row">
        <div className="col">
          <h2 className="section_title_text">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
