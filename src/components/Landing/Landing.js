import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {

  render() {
    var db = this.props.db;
    var state = this.props.state;
    return (
      <div
        className="landingContainer"
        style={{
          width: "100%",
          height: "calc(100% - " + state.size + "px)",
        }}
      >
        <div className="landingBackground" style={{ top: state.scrollDownOffset * 0.15 + "%" }} />
        <div className="landingTextRow" style={{ top: "calc(50% + " + (state.scrollDownOffset * 0.1) + "%)" }}>
          <p className="headerName">corey lewis</p>
          <p className="mainHeader">developer</p>
        </div>
      </div>
    );
  }
}

export default Landing;
