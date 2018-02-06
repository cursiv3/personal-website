import React, { Component } from "react";
import "./resume.css";

class ResumePage extends Component {
  render() {
    const data = this.props.state.resume;
    return (
      <div className="sectionContainer">
        <div className="resumeImgDiv">
          <a href={data.resumeLink} target="_blank">
            <img
              src={data.resume}
              alt="Corey Lewis Resume"
              className="resumeImg"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ResumePage;
