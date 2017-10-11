import React, { Component } from "react";
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Music from "../Music/Music.js";
import Contact from "../Contact/Contact.js";
import ResumePage from "../Resume/ResumePage.js";
import TransitionGroup from "react-addons-transition-group";

class CurrentSection extends Component {
  render() {
    return (
      <div>
        <TransitionGroup>
          {this.props.data.currentDisplay === "about" && (
            <About data={this.props.data} />
          )}
          {this.props.data.currentDisplay === "portfolio" && (
            <Portfolio data={this.props.data} />
          )}
          {this.props.data.currentDisplay === "music" && (
            <Music data={this.props.data} />
          )}
          {this.props.data.currentDisplay === "contact" && (
            <Contact data={this.props.data} />
          )}
          {this.props.data.currentDisplay === "resumepage" && (
            <ResumePage data={this.props.data} />
          )}
          {this.props.data.currentDisplay === "landing" && (
            <Landing data={this.props.data} />
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default CurrentSection;
