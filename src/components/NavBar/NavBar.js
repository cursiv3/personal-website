import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/about" className="navBtn">
          about
        </Link>
        <Link to="/portfolio" className="navBtn">
          portfolio
        </Link>
        <Link to="/music" className="navBtn">
          music
        </Link>
        <Link to="resume" className="navBtn">
          resume
        </Link>
        <Link to="contact" className="navBtn">
          contact
        </Link>
      </div>
    );
  }
}

export default NavBar;
