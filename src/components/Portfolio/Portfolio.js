import React from "react";
import "./portfolio.css";

class Portfolio extends React.Component {
  render() {
    const data = this.props.db.portfolio;
    return (
      <div className="folioContainer">
        <div className="folioSectionWrap">
          <div className="folioIntroWrap">
            <h1 className="folioSectionHead">portfolio</h1>
            <p>
              <a href="https://github.com/cursiv3/personal-website">
                Click here{" "}
              </a>
              for this sites GitHub repo.
            </p>
          </div>
          {data.map(d => {
            return (
              <iframe
                key={d.id}
                height="512"
                width="100%"
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
