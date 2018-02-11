import React, { Component } from "react";
import "./navbar.css";
import Drawer from "material-ui/Drawer";

class NavMobile extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = evt => {
    evt.target.matches(".navButtonMobile") ||
    evt.target.matches(".menuCloseBtn")
      ? this.setState({ open: false })
      : null;
  };

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
          containerStyle={{
            height: "75%"
          }}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          openSecondary={true}
        >
          <div
            className="menuCloseBtn"
            onClick={evt => this.handleClose(evt)}
          />
          <div
            className="navDivMobile"
            onClick={evt => {
              this.handleClose(evt);
              this.props.navHandler(evt);
            }}
          >
            <div data-id="resume" className="navButtonMobile">
              resume
            </div>
            <div data-id="portfolio" className="navButtonMobile">
              portfolio
            </div>
            <div data-id="about" className="navButtonMobile">
              about
            </div>
            <div data-id="music" className="navButtonMobile">
              music
            </div>
            <div data-id="contact" className="navButtonMobile">
              contact
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default NavMobile;
