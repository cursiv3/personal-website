import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {

  render() {
    var state = this.props.state;
    return (
      <div
        className="landingContainer"
        style={{
          width: "100%",
          height: "calc(100% - " + state.size + "px)",
        }}
      >
        <div className="landingBackground" style={{ transform: 'translateY(' + state.scrollDownOffset * 0.5 + "px)" }} />
        <div className="landingTextRow" style={{ transform: "translateY(" + state.scrollDownOffset * 0.3 + "px)" }}>
          <p className="headerName">corey lewis</p>
          <p className="mainHeader">developer</p>
        </div>
      </div>
    );
  }
}

export default Landing;
