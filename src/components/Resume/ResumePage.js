import React, { Component } from "react";
import "./resume.css";

class ResumePage extends Component {
  render() {
    const data = this.props.db.resume;
    return (
      <div className="sectionContainer">
        <div className="resumeImgDiv">
          <h3>Visual Resume</h3>
          <a
            href="/static/media/CoreyLewisResumeVisual.e1e7d5a4.png"
            target="_blank"
          >
            <img
              src={data.visResume}
              alt="Corey Lewis Visual Resume"
              className="img-responsive resumeImg"
            />
          </a>
          <a
            download="CoreyLewisResumeVisual.e1e7d5a4.png"
            href="/static/media/CoreyLewisResumeVisual.e1e7d5a4.png"
          >
            <button className="resumeBtn">download</button>
          </a>
        </div>
        <div className="resumeImgDiv">
          <h3>Text Resume</h3>
          <a
            href="https://drive.google.com/file/d/0Bw92SM4ozWAJLTRDeGJyX1ZQcjQ/view?usp=sharing"
            target="_blank"
          >
            <img
              src={data.typeResume}
              alt="Corey Lewis Text Resume"
              className="img-responsive resumeImg"
            />
          </a>
          <a href="https://drive.google.com/uc?export=download&id=0Bw92SM4ozWAJLTRDeGJyX1ZQcjQ">
            <button className="resumeBtn">download</button>
          </a>
        </div>
      </div>
    );
  }
}

export default ResumePage;
