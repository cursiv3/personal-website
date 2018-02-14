import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {

  render() {
    return (
      <div
        className="landingContainer"
        style={{
          width: "100%",
          height: "calc(100% - " + this.props.size + "px)"
        }}
      >
        <div className="landingTextRow">
          <p className="mainHeader">developer</p>
        </div>
      </div>
    );
  }
}

export default Landing;
