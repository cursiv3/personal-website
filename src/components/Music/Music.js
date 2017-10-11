import React, { Component } from "react";
import "./music.css";
import TweenMax from "gsap";

class Music extends Component {
  componentWillMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  componentWillEnter(callback) {
    const box = this.section;
    TweenMax.fromTo(
      box,
      0.5,
      { opacity: 0 },
      { delay: 0.7, opacity: 1, onComplete: callback }
    );
  }

  componentWillLeave(callback) {
    const box = this.section;
    TweenMax.fromTo(
      box,
      0.5,
      { opacity: 1 },
      { opacity: 0, onComplete: callback }
    );
  }

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
