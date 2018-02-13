import React from "react";
import "./education.css";

const Education = () => (
  <div className="resumeEducationContainer">
    <h1 className="resumeHeader">education</h1>
    <div className="educationItemWrap">
      <p className="educationTextRight">june 2014</p>
      <p className="educationTextLeft">
        <b>portland state university</b>
      </p>
      <p className="educationTextLeft">
        bachelor of science, organismal biology
      </p>
    </div>
    <div className="educationItemWrap">
      <p className="educationTextRight">february 2018</p>
      <p className="educationTextLeft">
        <b>freecodecamp</b>
      </p>
      <p className="educationTextLeft">
        front-end developer certificate
      </p>
    </div>
  </div>
);

export default Education;
