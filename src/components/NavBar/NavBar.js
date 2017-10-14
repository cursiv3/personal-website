import React, { Component } from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }
  render() {
    return (
      <div className="navEntry">
        <div onClick={this.handleToggle}>
          <div className="mobileMenuClicker" />
          <div className="mobileMenuClicker" />
          <div className="mobileMenuClicker" />
        </div>
        <Drawer
          docked={false}
          width={175}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <div className="mobileBarCloseBtn" onClick={this.handleClose} />
          <Link to="/about">
            <p className="navBtn">about</p>
          </Link>
          <Link to="/portfolio">
            <p className="navBtn">portfolio</p>
          </Link>
          <Link to="/music">
            <p className="navBtn">music</p>
          </Link>
          <Link to="/resume">
            <p className="navBtn">resume</p>
          </Link>
          <Link to="/contact">
            <p className="navBtn">contact</p>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
