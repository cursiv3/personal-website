import React, { Component } from "react";
import "./music.css";

class Music extends Component {
  render() {
    return (
      <div className="sectionContainer" ref={s => (this.section = s)}>
        <h1 className="sectionHead">poor sound quality youtube videos!</h1>
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/qqytoS_1OLo"
            allowFullScreen
          />
        </div>
        <p>Original tune "No More Plans"</p>
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/UKYtxamVuic"
            allowFullScreen
          />
        </div>
        <p>"7-14" by Andy McKee</p>
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/Oda9Qoh7-4Y"
            allowFullScreen
          />
        </div>
        <p>"Ebon Coast" by Andy McKee</p>
      </div>
    );
  }
}

export default Music;
