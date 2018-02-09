import React from "react";
import "./navbar.css";

class NavBar extends React.Component {

  render() {
    return (
      <div className={this.props.navMode}>
        <div className="navButton">
          about
        </div>
        <div className="navButton">
          portfolio
        </div>
        <div className="navButton">
          music
        </div>
        <div className="navButton">
          resume
        </div>
        <div className="navButton">
          contact
        </div>
      </div>
    );
  }
}

export default NavBar;
