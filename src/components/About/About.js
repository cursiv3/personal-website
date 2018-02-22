import React, { Component } from "react";
import Carousel from "corousel";
import "./about.css";


class About extends Component {

  render() {
    var data = this.props.db.about;

    var imageNames = [
      "corey-chewie",
      "corey-george",
      "corey-soccer2",
      "corey-hawaii",
      "corey-snowboard3",
      "corey-snowboard2",
      "corey-soccer1",
      "corey-soccer-goal",
      "corey-team",
      "corey-windsurf",
      "corey-snowboard4",
      "psu-soccer-coach",
      "psu-soccer1",
    ]

    var carouselArr = imageNames.map((name) => {
      return `https:/d3thzr4bekqfnr.cloudfront.net/carousel/${name}.jpg`
    });

    return (
      <div className="aboutSectionContainer">
        <p className="aboutQuote">
          I hope to fail often, for that is where growth begins.
        </p>
        <div className="aboutSectionWrap">
          <p className="aboutText">
            Hello! My name is Corey.
            <br />
            <br />
            {data.p1}
            <br />
            <br />
            {data.p2}
            {" "}
            <a href="https://www.transflection.com" target="_blank">
              Transflection
              </a>
            {data.p3}
            {" "}
            <a
              href="https://github.com/cursiv3/personal-website"
              target="_blank"
            >
              here
            </a>.
            <br />
            <br />
            After my internship I began working as a Junior Web App Developer with
            {" "}
            <a href="https://www.skillsai.com/" target="_blank">
              SkillsAI
            </a>, another Portland, OR startup doing machine learning and business analytics utilizing the Amazon
            Alexa service.
            <br />
            <br />
            {data.p4}
          </p>
          <div className="carouselWrap">
            <Carousel images={carouselArr} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
