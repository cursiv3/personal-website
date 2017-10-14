import React, { Component } from "react";
import "./resume.css";
import TweenMax from "gsap";

class ResumePage extends Component {
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
      { delay: 0.5, opacity: 1, onComplete: callback }
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
    const data = this.props.db.resume;
    return (
      <div ref={s => (this.section = s)} className="sectionContainer">
        <div>
          <div>
            <h3 className="text-center">Visual Resume</h3>
            <a
              href="/static/media/CoreyLewisResumeVisual.e1e7d5a4.png"
              target="_blank"
              classID
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
          <div>
            <h3 className="text-center">Text Resume</h3>
            <a
              href="https://drive.google.com/file/d/0Bw92SM4ozWAJLTRDeGJyX1ZQcjQ/view?usp=sharing"
              target="_blank"
            >
              <img src={data.typeResume} className="img-responsive resumeImg" />
            </a>
            <a href="https://drive.google.com/uc?export=download&id=0Bw92SM4ozWAJLTRDeGJyX1ZQcjQ">
              <button className="resumeBtn">download</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
