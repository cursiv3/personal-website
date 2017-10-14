import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div ref={s => (this.section = s)}>
        <p className="landingHeader">corey lewis</p>
        <div className="mainHeader">
          <h1>developer</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
