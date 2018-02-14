import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {

  render() {
    return (
      <div
        className="landingContainer"
        style={{
          width: "100%",
          height: "calc(100% - " + this.props.data.size + "px)",
        }}
      >
        <div className="landingBackground" style={{ top: this.props.data.scrollDownOffset * 0.15 + "%" }} />
        <div className="landingTextRow" style={{ top: "calc(50% + " + (this.props.data.scrollDownOffset * 0.1) + "%)" }}>
          <p className="headerName">corey lewis</p>
          <p className="mainHeader">developer</p>
        </div>
      </div>
    );
  }
}

export default Landing;
