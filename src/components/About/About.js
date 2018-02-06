import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    const data = this.props.state.about;

    return (
      <div className="sectionContainer">
        <div className="portraitDiv">
          <div className="aboutPortraitBacking" />
          <img src={data.coreyPortrait} alt={"me"} className="aboutPortrait" />
        </div>
        <h1 className="sectionHead">allow myself to introduce.... myself</h1>
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
          I have really been enjoying using React and am starting to also work
          with Angular 5. I built this site with the React library and the repo
          with the code
          <a href="https://github.com/cursiv3/personal-website" target="_blank">
            {" "}
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
          I am also a soccer coach, a certified USSF Soccer referee, guitarist
          of 17 years and counting, and a video game enthusiast.
        </p>
        <div className="aboutImg">
          <img src={data.coreySoccerImg} alt={"me"} />
          <img src={data.coreyChewieImg} alt={"me"} />
          <img src={data.coreyMascotImg} alt={"me"} />
        </div>
      </div>
    );
  }
}

export default About;
