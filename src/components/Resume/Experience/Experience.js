import React from "react";
import "./experience.css";

const Experience = () => (
  <div className="resumeExperienceContainer">
    <h1 className="resumeHeader">experience</h1>
    <div className="experienceItemWrap">
      <img
        className="companyLogo"
        src="https://s3-us-west-2.amazonaws.com/cslwebsite/skillsaiLight.png"
        alt="skillsai logo"
      />
      <div className="positionDateWrap">
        <p className="resumeExperienceDate">april 2017 - may 2018</p>
        <p className="resumeExperienceText">full stack developer</p>
      </div>
    </div>
    <div className="experienceItemWrap">
      <img
        className="companyLogo"
        src="https://s3-us-west-2.amazonaws.com/cslwebsite/transflection.png"
        alt="skillsai logo"
      />
      <div className="positionDateWrap">
        <p className="resumeExperienceDate">october 2016 - march 2017</p>
        <p className="resumeExperienceText">full stack developer</p>
      </div>
    </div>
  </div>
);

export default Experience;
