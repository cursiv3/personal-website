import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    const data = this.props.db.portfolio;
    return (
      <div className="sectionContainer">
        <h1 className="sectionHead">a few things I've made</h1>
        <p>
          {this.props.db.portfolioIntro}
          <a href="https://github.com/cursiv3/personal-website">
            on my github.
          </a>
        </p>
        {data.map(d => (
          <div key={d.id} className="folioImgDiv">
            <a href={d.link} target="_blank">
              <div
                className="folioImg"
                style={{ backgroundImage: "url(" + d.img + ")" }}
              />
            </a>
            <p className="folioText">{d.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
