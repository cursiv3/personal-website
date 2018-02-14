import React, { Component } from "react";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import "./resume.css";
import "./resumeMediaQueries.css";

class ResumePage extends Component {
  render() {
    const data = this.props.state.resume;
    return (
      <div className="resumeContainer">
        <Experience />
        <Skills />
        <div className="verticalStyleLine" />
        <Education />
        <div className="resumeOther" />
      </div>
    );
  }
}

export default ResumePage;
