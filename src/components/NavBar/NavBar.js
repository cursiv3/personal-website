import React, { Component } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/about" className="navBtn" activeClassName="navActive">
          about
        </NavLink>
        <NavLink to="/portfolio" className="navBtn" activeClassName="navActive">
          portfolio
        </NavLink>
        <NavLink to="/music" className="navBtn" activeClassName="navActive">
          music
        </NavLink>
        <NavLink to="/resume" className="navBtn" activeClassName="navActive">
          resume
        </NavLink>
        <NavLink to="/contact" className="navBtn" activeClassName="navActive">
          contact
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
