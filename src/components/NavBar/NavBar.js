import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div
        className={this.props.data.navStick}
        onClick={evt => this.props.navHandler(evt)}
      >
        <img className="navIcon" src={require('../../../public/cslLogoNew.ico')} alt="corey s lewis icon" />
        <p className={"navIconName " + this.props.data.navFadeIn}>corey lewis</p>
        <div data-id="contact" className="navButton">
          contact
        </div>
        <div data-id="music" className="navButton">
          music
        </div>
        <div data-id="about" className="navButton">
          about
        </div>
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
