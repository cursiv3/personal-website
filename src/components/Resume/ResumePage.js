import React, { Component } from "react";
import "./resume.css";

class ResumePage extends Component {
  render() {
    const data = this.props.db.resume;
    return (
      <div className="sectionContainer">
        <div className="resumeImgDiv">
          <a
            href="https://drive.google.com/open?id=0Bw92SM4ozWAJbWxzcHFVZ0JvVFE"
            target="_blank"
          >
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
