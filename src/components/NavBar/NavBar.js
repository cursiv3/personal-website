import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <div className="menuButton" onClick={this.handleToggle}>
          <div className="menuClicker" />
          <div className="menuClicker" />
          <div className="menuClicker" />
        </div>
        <Drawer
          docked={false}
          width={175}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          openSecondary={true}
        >
          <div className="menuCloseBtn" onClick={this.handleClose} />
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
            <Link
              to="/contact"
              className="navButton"
              onClick={this.handleClose}
            >
              contact
            </Link>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
