import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div
        id="nav-bar"
        className={`navBarShared ${this.props.data.navStick}`}
        onClick={evt => this.props.navHandler(evt)}
      >
        <img
          className="navIcon"
          src={require("./cslLogoNew.ico")}
          alt="corey s lewis icon"
        />
        <p className={`navIconName  ${this.props.data.navFadeIn}`}>
          corey lewis
        </p>
          <div data-id="contact" className="navButton">
            contact
          </div>
          <div data-id="about" className="navButton">
            about
          </div>
          <a href="http://www.speakplainly.net" target="_blank" rel="noopener noreferrer">
            <div data-id="blog" className="navButton">
              blog
            </div>
            </a>
          <div data-id="portfolio" className="navButton">
            portfolio
          </div>
          <div data-id="resume" className="navButton">
            resume
          </div>
      </div>
    );
  }
}

export default NavBar;
