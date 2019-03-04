import React, { Component } from "react";
import Carousel from "corousel";
import "./about.css";


class About extends Component {

  render() {
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
          <div className="aboutText">
            Hello! My name is Corey.
            <br />
            <br />
            <p>
              I graduated from Portland State University in 2014 with a B.S. in 
              Biological Science. I started learning to program in January of 2016 
              because I was unhappy with the field of Biology. A friend working as a 
              Senior Developer gave me some resources to use, and I began to complete 
              coding challenges on sites like HackerRank to gain experience using Python, 
              C++, C#, and Java.
            </p>
            <p>
              I began learning web development when I discovered FreeCodeCamp.  After
              completing much of their curriculum I was able to land an
              internship with a Portland, OR digital marketing startup called Transflection 
              (that has since gone under). After my internship I worked remotely for a year 
              with SkillsAI, a Salt Lake City, UT based start up.  As is common with start ups,
              they too went under.  I began attending code meetups in the Portland area and made
              many contacts, and was offered a position in July 2018 at Hello World Devs.
            </p>
            <p>
              Outside of code I coach and play soccer, I'm certified USSF Soccer referee,
              guitarist of 18 years, a snowboarder, dog lover, and PC gaming enthusiast.
            </p>
          </div>
          <div className="carouselWrap">
            <Carousel images={carouselArr} />
            <p>
              This is the <a href="https://github.com/cursiv3/corousel" target="_blank" rel="noopener noreferrer">corousel</a> package that I made (get it? it's like "carousel" but
              my name is Corey... so...).
              <br />
              Available on npm!
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
