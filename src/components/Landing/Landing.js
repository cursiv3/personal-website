import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {

  render() {
    var state = this.props.state;
    var offset;
    window.innerWidth < 980 ? offset = 0 : offset = state.scrollDownOffset;
    return (
      <div
        className="landingContainer"
        style={{
          width: "100%",
          height: "calc(110% - " + state.size + "px)",
        }}
      >
        <div className="landingBackground" style={{ transform: 'translateY(' + offset * 0.5 + "px)" }} />
        <div className="landingTextRow" style={{ transform: "translateY(" + offset * 0.7 + "px)" }}>
          <p className="headerName">corey lewis</p>
          <p className="mainHeader">developer</p>
        </div>
      </div>
    );
  }
}

export default Landing;
