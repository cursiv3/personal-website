import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    const data = this.props.state.about;

    return (
      <div className="aboutSectionContainer">
        <p className="aboutQuote">I hope to fail often, for that is where growth begins.</p>
        <div className="aboutSectionWrap">
          <div className="portraitDiv">
            <img
              src={data.coreyMascotImg}
              alt={"me"}
              className="aboutPortrait"
            />
          </div>
          <p className="pageText">
            Hello! My name is Corey. I graduated from Portland State University
            in 2014 with a B.S. in Biological Science. I am a self taught
            programmer currently working as a Junior Web App Developer with{" "}
            <a href="https://www.skillsai.com/" target="_blank">
              SkillsAI
            </a>. Before that I completed a six month internship with{" "}
            <a href="https://www.transflection.com" target="_blank">
              Transflection
            </a>, a Portland, OR based digital marketing startup.  In my internship
            I worked directly under their lead engineer. We worked with JavaScript,
            jQuery, Bootstrap, Node, Express/Koa, MongoDB. I finished the internship
            migrating pages to React JS. I built this site with the React library and
            the repo with the code can be found
            <a
              href="https://github.com/cursiv3/personal-website"
              target="_blank"
            >
              {" "}here
            </a>.
          </p>
          <p className="pageText">
            I started learning programming in January of 2016 after becoming
            unhappy in Biology field. A friend working as a Senior Developer gave
            me some resources to learn programming, and I began to complete coding
            challenges on sites like HackerRank to gain experience using Python, and
            ended up learning syntax of C++, C#, and Java as well.
          </p>
          <p className="pageText">
            Outside of code I coach and play soccer, I'm certified USSF Soccer referee,
            guitarist of 18 years, a snowboard, dog lover, and PC gaming enthusiast.
          </p>
          <div>
            <img src={data.coreySoccerImg} alt={"me"} />
          </div>
          <div>
            <img src={data.coreyChewieImg} alt={"me"} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
