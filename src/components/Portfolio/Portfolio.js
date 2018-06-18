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
              <a
                href="https://github.com/cursiv3/personal-website"
                target="_blank"
              >
                Click here{" "}
              </a>
              for this sites GitHub repo.
            </p>
          </div>

          <iframe
            src="https://codesandbox.io/embed/k52jl1y2jr?view=preview"
            style={{
              width: "100%",
              height: "512px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden"
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
          <p style={{ textAlign: "center" }}>
            This was a solo project I did for SkillsAI, functional mock up for
            the leaderboard they wanted for a game they had made. I mocked the
            account link as well as a log in and log out so all the
            functionality could be seen.
          </p>
          <iframe
            src="https://codesandbox.io/embed/mjn73ozx1y?view=preview"
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden"
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
          <p style={{ textAlign: "center" }}>
            I made this for fun when I discovered data.gov. Using the National
            Environmental Health Tracking Network API run by the CDC, I
            retrieved air quality data for Oregon and sorted it by five major
            counties. I sorted the data by year using merge sort, which is
            overkill for this tiny data set, but it was faster and easier to
            find pseduo code for the algorithm and tailor it to what I needed
            rather than cook up something of my own. It was a fun project and
            data.gov is an amazing resource!
          </p>
          <iframe
            src="https://codesandbox.io/embed/2oow9n5p7r?view=preview"
            style={{
              width: "100%",
              height: "512px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden"
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
          <p style={{ textAlign: "center" }}>
            This is part of a personal project I was working on, simple sign up
            form with validation and password strength estimation (thanks to the
            ZXCVBN package).
          </p>
          {data.map(d => {
            return (
              <div>
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
                <p style={{ textAlign: "center" }}>{d.blurb}</p>
              </div>
            );
          })}
          <div style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
