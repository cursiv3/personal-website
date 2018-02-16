import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import Music from "./Music/Music";
import Portfolio from "./Portfolio/Portfolio";
import ResumePage from "./Resume/ResumePage";
import NavBar from "./NavBar/NavBar";
import NavMobile from "./NavBar/NavMobile";

const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 60,
      navStick: "navDivEntry",
      navNameDisplay: "none",
      navFadeIn: '',
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
    if (window.pageYOffset >= stop && window.innerWidth > 845) {
      this.setState(Object.assign({}, this.state, {
        navFadeIn: 'navNameFadeIn'
      }));
    } else {
      this.setState(Object.assign({}, this.state, {
        navFadeIn: 'navNameFadeOut'
      }));
    }
  }

  navSticky() {
    var stop = window.innerHeight - 60;
    if (window.pageYOffset >= stop && window.innerWidth > 845) {
      this.setState(Object.assign({}, this.state, {
        navStick: "navStickTop",
        navStickSpacer: "60px",
      }));
    } else {
      this.setState(Object.assign({}, this.state, {
        navStick: "navDivEntry",
        navStickSpacer: "0",
      }))
    }
  }

  backgroundScroller() {
    var yPos = window.pageYOffset / 5;
    if (this.state.lastScroll > yPos) {
      this.setState(Object.assign({}, this.state, {
        scrollDownOffset: this.state.scrollDownOffset * 0 + yPos,
        lastScroll: yPos
      }))
    } else {
      this.setState(Object.assign({}, this.state, {
        scrollDownOffset: this.state.scrollDownOffset * 0 + yPos,
        lastScroll: yPos
      }))
    }
  }

  navClick(evt) {
    var node;
    switch (evt.target.dataset.id) {
      case "resume":
        node = this.refs.resume;
        break;
      case "portfolio":
        node = this.refs.portfolio;
        break;
      case "about":
        node = this.refs.about;
        break;
      case "music":
        node = this.refs.music;
        break;
      case "contact":
        node = this.refs.contact;
        break;
    }
    var section = ReactDOM.findDOMNode(node).offsetTop;
    window.scrollTo(0, section);
  }

  updateDimensions() {
    if (window.innerWidth < 845) {
      this.setState(Object.assign({}, this.state, { size: 0 }));
    } else if (window.innerWidth > 845) {
      this.setState(Object.assign({}, this.state, { size: 60 }));
    }
    this.forceUpdate();
  }

  componentWillMount() {
    this.updateDimensions();
    this.navSticky();
    this.backgroundScroller();
    this.navFadeHandler();
  }
  componentDidMount() {
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
    var props = this.props;
    return (
      <div className="appContainer">
        <Landing db={db} state={this.state} />
        {this.state.size === 60 ? (
          <NavBar data={this.state} navHandler={props.navClick} />
        ) : (
            <NavMobile navHandler={props.navClick} />
          )}
        <div
          style={{
            width: "100%",
            height: this.state.navStickSpacer,
            margin: "0",
            padding: "0"
          }}
        />
        <ResumePage ref="resume" db={db} />
        <Portfolio ref="portfolio" db={db} />
        <About ref="about" db={db} />
        <Music ref="music" db={db} />
        <Contact ref="contact" db={db} />
      </div>
    );
  }
}

export default App;
