import React from "react";
import "./experience.css";

const Experience = () => (
  <div className="resumeExperienceContainer">
    <h1 className="resumeHeader">experience</h1>
    <div className="experienceItemWrap">
    <img
        className="companyLogo"
        src="https://s3-us-west-2.amazonaws.com/cslwebsite/hwdevs.png"
        alt="hello world devs logo"
      />
      <div className="positionDateWrap">
        <p className="resumeExperienceDate">july 2018 - Present</p>
        <p className="resumeExperienceText">web developer</p>
      </div>
    </div>
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
    <div className="experienceItemWrap">
      <img
        className="companyLogo"
        src={require("./cslLogoNew.ico")}
        alt="CSL designs logo"
      />
      <div className="positionDateWrap">
        <p className="resumeExperienceDate">october 2015 - october 2016</p>
        <p className="resumeExperienceText">it freelancer</p>
      </div>
    </div>
  </div>
);

export default Experience;
