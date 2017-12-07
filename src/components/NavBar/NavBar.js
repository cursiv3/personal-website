import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navDiv">
          <Link to="/about" className="navButton" onClick={this.handleClose}>
            about
          </Link>
          <Link
            to="/portfolio"
            className="navButton"
            onClick={this.handleClose}
          >
            portfolio
          </Link>
          <Link to="/music" className="navButton" onClick={this.handleClose}>
            music
          </Link>
          <Link to="/resume" className="navButton" onClick={this.handleClose}>
            resume
          </Link>
          <Link to="/contact" className="navButton" onClick={this.handleClose}>
            contact
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
