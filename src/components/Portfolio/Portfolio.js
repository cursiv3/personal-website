import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    const data = this.props.state.portfolio;
    return (
      <div className="sectionContainer">
        <h1 className="sectionHead">a few things I've made</h1>
        <p>
          {this.props.state.portfolioIntro}
          <a href="https://github.com/cursiv3/personal-website">
            on my github.
          </a>
        </p>
        {data.map(d => (
          <iframe
            height="500"
            scrolling="no"
            title={d.title}
            src={"https:" + d.src}
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            style={{ width: "100%", display: "inline-block" }}
          />
        ))}
      </div>
    );
  }
}

export default Portfolio;
