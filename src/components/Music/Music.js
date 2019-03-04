import React, { Component } from "react";
import "./music.css";

class Music extends Component {
  render() {
    return (
      <div className="musicContainer">
        <div className="musicSectionWrap">
          <div className="videoWrapper">
            <iframe
            name="corey youtube video"
            title="no more plans"
              src="https://www.youtube.com/embed/qqytoS_1OLo"
              allowFullScreen
            />
          </div>
          <p>Original tune "No More Plans"</p>
        </div>
      </div>
    );
  }
}

export default Music;
