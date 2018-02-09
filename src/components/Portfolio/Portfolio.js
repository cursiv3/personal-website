import React from "react";
import "./portfolio.css";

class Portfolio extends React.Component {
  render() {
    const data = this.props.state.portfolio;
    return (
      <div className="folioContainer">
        <div className="folioSectionWrap">
          <h1 className="sectionHead">a few things I've made</h1>
          <p>
            {this.props.state.portfolioIntro}
            <a href="https://github.com/cursiv3/personal-website">
              on my github.
          </a>
          </p>
          {data.map((d, i) => {
            let align;
            (i + 2) % 2 === 0 ? align = 'right' : align = 'left';
            return (
              <iframe
                key={d.id}
                align={align}
                height='512'
                width="50%"
                scrolling="no"
                title={d.title}
                src={"https:" + d.src}
                frameBorder="no"
                allowTransparency="true"
                allowFullScreen="true"
                style={{ padding: '10px' }}
              />)
          })}
          <div style={{ clear: 'both' }} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
