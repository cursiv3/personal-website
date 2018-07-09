import React from "react";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import Music from "./Music/Music";
import Portfolio from "./Portfolio/Portfolio";
import ResumePage from "./Resume/ResumePage";
import NavBar from "./NavBar/NavBar";
import NavMobile from "./NavBar/NavMobile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 60,
      navStick: "navDivEntry",
      navNameDisplay: "none",
      navFadeIn: "",
      navStickSpacer: "0",
      scrollDownOffset: 0,
      lastScroll: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.navSticky = this.navSticky.bind(this);
    this.navClick = this.navClick.bind(this);
    this.backgroundScroller = this.backgroundScroller.bind(this);
    this.navFadeHandler = this.navFadeHandler.bind(this);
  }

  navFadeHandler() {
    var stop = window.innerHeight - 200;
    if (window.pageYOffset >= stop && window.innerWidth > 980) {
      this.setState(
        Object.assign({}, this.state, {
          navFadeIn: "navNameFadeIn"
        })
      );
    } else {
      this.setState(
        Object.assign({}, this.state, {
          navFadeIn: "navNameFadeOut"
        })
      );
    }
  }

  navSticky() {
    var fullHeight = (window.innerHeight / 100) * 10 + window.innerHeight;
    var stop = fullHeight - 60;
    if (window.pageYOffset >= stop && window.innerWidth > 980) {
      this.setState(
        Object.assign({}, this.state, {
          navStick: "navStickTop",
          navStickSpacer: "60px"
        })
      );
    } else {
      this.setState(
        Object.assign({}, this.state, {
          navStick: "navDivEntry",
          navStickSpacer: "0"
        })
      );
    }
  }

  backgroundScroller() {
    var yPos = window.pageYOffset / 5;
    if (this.state.lastScroll > yPos) {
      this.setState(
        Object.assign({}, this.state, {
          scrollDownOffset: this.state.scrollDownOffset * 0 + yPos,
          lastScroll: yPos
        })
      );
    } else {
      this.setState(
        Object.assign({}, this.state, {
          scrollDownOffset: this.state.scrollDownOffset * 0 + yPos,
          lastScroll: yPos
        })
      );
    }
  }

  navClick(evt) {
    var stop = document.getElementById(`${evt.target.dataset.id}`).offsetTop;
    window.scroll({ top: stop, left: 0, behavior: "smooth" });
  }

  updateDimensions() {
    if (window.innerWidth < 980) {
      this.setState(Object.assign({}, this.state, { size: 0 }));
    } else if (window.innerWidth > 980) {
      this.setState(Object.assign({}, this.state, { size: 60 }));
    }
    this.forceUpdate();
  }

  componentWillMount() {
    this.navSticky();
    this.backgroundScroller();
    this.navFadeHandler();
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("scroll", this.backgroundScroller);
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.navSticky);
    window.addEventListener("scroll", this.navFadeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.backgroundScroller);
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.navSticky);
    window.removeEventListener("scroll", this.navFadeHandler);
  }

  render() {
    var db = this.props.stateFile;
    return (
      <div className="appContainer">
        <Landing db={db} state={this.state} />
        {this.state.size === 60 ? (
          <NavBar data={this.state} navHandler={this.navClick} />
        ) : (
          <NavMobile navHandler={this.navClick} />
        )}
        <div
          style={{
            width: "100%",
            height: this.state.navStickSpacer,
            margin: "0",
            padding: "0"
          }}
        />
        <div id="resume">
          <ResumePage db={db} />
        </div>
        <div id="portfolio">
          <Portfolio db={db} />
        </div>
        <div id="about">
          <About db={db} />
        </div>
        <div id="music">
          <Music db={db} />
        </div>
        <div className="contactContainer" id="contact">
          <Contact db={db} />
        </div>
      </div>
    );
  }
}

export default App;
