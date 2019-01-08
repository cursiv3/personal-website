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
    if (
      evt.target.matches(".navButtonMobile") ||
      evt.target.matches(".menuCloseBtn")
    ) {
      this.setState({ open: false });
    }
  };

  render() {
    return (
      <div>
        <div className="mobileNavBar" onClick={this.handleToggle}>
          <img
            className="mobileNavIcon"
            src={require("./cslLogoNew.ico")}
            alt="corey s lewis icon"
          />
          <p className="mobileIconName">corey lewis</p>
          <div className="mobileMenuButton">
            <div className="menuClicker" />
            <div className="menuClicker" />
            <div className="menuClicker" />
          </div>
        </div>
        <Drawer
          docked={false}
          width={175}
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
            <a href="http://www.speakplainly.net" target="_blank">
              <div data-id="blog" className="navButtonMobile">
                blog
              </div>
            </a>
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
