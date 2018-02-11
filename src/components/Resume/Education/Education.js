import React from "react";
import "./education.css";

const Education = () => (
  <div className="resumeEducationContainer">
    <h1 className="resumeEducationHeader">Education</h1>
    <div className="educationItemWrap">
      <h3 className="educationDate">June 2014</h3>
      <h3>
        <b>Portland State University</b>
      </h3>
      <h3>
        <i>Bachelor of Science, Organismal Biology</i>
      </h3>
    </div>
    <div className="educationItemWrap">
      <h3 className="educationDate">Februrary 2018</h3>
      <h3>
        <b>FreeCodeCamp</b>
      </h3>
      <h3>
        <i>Front-End Developer Certificate</i>
      </h3>
    </div>
  </div>
);

export default Education;
