import React, { Component } from "react";
import "./resume.css";

class ResumePage extends Component {
  render() {
    const data = this.props.state.resume;
    return (
      <div className="resumeContainer">
        <div className="resumePageDiv">
          <div className="resumeExperience">
            <h1>Experience</h1>
            <hr />
            <img className="resumeImage" src="https://skillsai-images.s3.amazonaws.com/Identity/logos/logo-with-tagline.png" alt="skillsai logo" />
            <h3 className="resumeExperienceDate">April 2017 - Present</h3>
            <img className="resumeImage" src="./txfxnlogo.png" alt="skillsai logo" />
          </div>
          <div className="resumeSkills"></div>
          <div className="resumeEducation"></div>
          <div className="resumeOther"></div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
