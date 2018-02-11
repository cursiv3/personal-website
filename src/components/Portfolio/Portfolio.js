import React from "react";
import "./portfolio.css";

class Portfolio extends React.Component {
  render() {
    const data = this.props.state.portfolio;
    return (
      <div className="folioContainer">
        <div className="folioSectionWrap">
          <div className="folioIntroWrap">
            <h1 className="folioSectionHead">A few things I've made</h1>
            <p>
              {this.props.state.portfolioIntro}
              <a href="https://github.com/cursiv3/personal-website">
                on my github.
              </a>
            </p>
          </div>
          {data.map(d => {
            return (
              <iframe
                key={d.id}
                height="512"
                width="50%"
                scrolling="no"
                title={d.title}
                src={"https:" + d.src}
                frameBorder="no"
                allowTransparency="true"
                allowFullScreen="true"
                className="folioIframe"
              />
            );
          })}
          <div style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
