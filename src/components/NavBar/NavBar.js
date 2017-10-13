import React, { Component } from "react";
import "./navbar.css";
import stateFile from "../stateFile";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link
          to="/about"
          className={stateFile.navBtn[0]}
          onClick={evt => this.props.navClick("about", 0)}
        >
          about
        </Link>
        <Link
          to="/portfolio"
          className={stateFile.navBtn[1]}
          onClick={evt => this.props.navClick("portfolio", 1)}
        >
          portfolio
        </Link>
        <Link
          to="/music"
          className={stateFile.navBtn[2]}
          onClick={evt => this.props.navClick("music", 2)}
        >
          music
        </Link>
        <Link
          to="resume"
          className={stateFile.navBtn[3]}
          onClick={evt => this.props.navClick("resumepage", 3)}
        >
          resume
        </Link>
        <Link
          to="contact"
          className={stateFile.navBtn[4]}
          onClick={evt => this.props.navClick("contact", 4)}
        >
          contact
        </Link>
      </div>
    );
  }
}

export default NavBar;
