import React, { Component } from "react";
import "./portfolio.css";
import TweenMax from "gsap";

class Portfolio extends Component {
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
    const data = this.props.db.portfolio;
    return (
      <div className="sectionContainer" ref={s => (this.section = s)}>
        <h1 className="sectionHead">a few things I've made</h1>
        <div>
          <p>
            {this.props.db.portfolioIntro}
            <a href="https://github.com/cursiv3/personal-website">
              on my github.
            </a>
          </p>
        </div>
        {data.map(d => (
          <div key={d.id} className="folioText">
            <a href={d.link} target="_blank">
              <div
                className="folioImg"
                style={{ backgroundImage: "url(" + d.img + ")" }}
              />
            </a>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
