import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <p className="landingHeader">corey lewis</p>
        <NavBar className="navEntry" />
        <div className="mainHeader">
          <h1>developer</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
