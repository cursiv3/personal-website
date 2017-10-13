import React, { Component } from "react";
import "./about.css";
import TweenMax from "gsap";
import stateFile from "../stateFile";

class About extends Component {
  constructor(props) {
    super(props);
  }
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
    const data = this.props.db.about;

    return (
      <div className="sectionContainer" ref={s => (this.section = s)}>
        <h1 className="sectionHead">allow myself to introduce.... myself</h1>
        <div className="portraitBackground">
          <img src={data.coreyPortrait} alt={"me"} className="aboutPortrait" />
        </div>
        <p className="pageText">
          My name is Corey Lewis, I graduated from Portland State University in
          2014 with a B.S. in Biological Science.
        </p>
        <p className="pageText">
          I am a self taught programmer currently working as a Junior Web App
          Developer with{" "}
          <a href="https://www.skillsai.com/" target="_blank">
            SkillsAI
          </a>. I spent the past six months completing an internship with{" "}
          <a href="https://www.transflection.com" target="_blank">
            Transflection
          </a>, a Portland, OR based digital marketing startup. This was an
          amazing experience for two reasons: I worked directly under their lead
          engineer, and this was the first time I'd worked on a real project. We
          worked with JavaScript, jQuery, Bootstrap, Node, Express/Koa, MongoDB.
          I finished the internship using ReactJS with Redux.
        </p>
        <p className="pageText">
          I have been enjoying using React. I built this site with the library
          and the repo with the code
          <a href="https://github.com/cursiv3/personal-website" target="_blank">
            can be found here
          </a>.
        </p>
        <p className="pageText">
          I started learning programming in January of 2016 as my search for
          employment in the field of Biology was not yielding results. A friend
          recommended "Learn Python the Hard Way" by Zed. A. Shaw. I began to
          complete coding challenges on sites like HackerRank.com to gain
          experience using Python, and I ended up dipping my toes in the waters
          of C++, C#, Java, SQL.
        </p>
        <p className="pageText">
          I didn't believe I could actually get work as a programmer without a
          C.S. degree, but I enjoyed working with the languages so much that I
          simply kept at it, and in October of 2016 I landed a web dev
          internship with only a few months exposure to JavaScript.
        </p>
        <p className="pageText">
          I am also a soccer coach, a certified USSF Soccer referee, guitarist
          of 17 years and counting, and a video game enthusiast.
        </p>
        <div>
          <div>
            <img
              src={data.coreySoccerImg}
              alt={"me"}
              className="aboutImg img-responsive"
            />
          </div>
          <div>
            <img
              src={data.coreyChewieImg}
              alt={"me"}
              className="aboutImg img-responsive"
            />
          </div>
          <div>
            <img
              src={data.coreyMascotImg}
              alt={"me"}
              className="aboutImg img-responsive"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
