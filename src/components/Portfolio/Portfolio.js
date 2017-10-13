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
    return (
      <div className="sectionContainer" ref={s => (this.section = s)}>
        <h1 className="col-sm-12 sectionHead">a few things I've made</h1>
        <div sm={12}>
          <p>
            {this.props.data.portfolioIntro}
            <a href="https://github.com/cursiv3/personal-website">
              on my github.
            </a>
          </p>
        </div>
        {this.props.data.portfolio.map(data => (
          <div sm={6} key={data.id} className="folioText">
            <a href={data.link} target="_blank">
              <div
                className="folioImg"
                style={{ backgroundImage: "url(" + data.img + ")" }}
              />
            </a>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
