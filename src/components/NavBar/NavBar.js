import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navDiv">
        <Link to="/about" className="navButton">
          about
        </Link>
        <Link to="/portfolio" className="navButton">
          portfolio
        </Link>
        <Link to="/music" className="navButton">
          music
        </Link>
        <Link to="/resume" className="navButton">
          resume
        </Link>
        <Link to="/contact" className="navButton">
          contact
        </Link>
      </div>
    );
  }
}

export default NavBar;
