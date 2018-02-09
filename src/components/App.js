import React from "react";
import ReactDOM from 'react-dom';
import { Route, Switch } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import Music from "./Music/Music";
import Portfolio from "./Portfolio/Portfolio";
import ResumePage from "./Resume/ResumePage";
import NavBar from "./NavBar/NavBar";
import NavMobile from "./NavBar/NavMobile";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 60,
      navStick: 'navDivEntry',
      navStickSpacer: '0'
    }

    this.updateDimensions = this.updateDimensions.bind(this);
    this.navSticky = this.navSticky.bind(this);
  }

  navSticky() {
    var stop = (window.innerHeight - 60);
    if (window.pageYOffset >= stop) {
      this.setState({ navStick: 'navStickTop', navStickSpacer: '60px' });
    } else {
      this.setState({ navStick: 'navDivEntry', navStickSpacer: '0' });
    }
  }

  updateDimensions() {
    if (window.innerWidth < 845) {
      this.setState({ size: 0 });
    } else if (window.innerWidth > 845) {
      this.setState({ size: 60 });
    }
    this.forceUpdate();
  }

  componentWillMount() {
    this.updateDimensions();
    this.navSticky();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.navSticky);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.navSticky);
  }


  render() {
    return (
      <div className="appContainer">
        <Landing state={this.props.state} size={this.state.size} />
        {this.state.size === 60 ? <NavBar navMode={this.state.navStick} /> : <NavMobile />};
        <div style={{ width: "100%", height: this.state.navStickSpacer }} />
        <ResumePage state={this.props.state} />
        <Portfolio state={this.props.state} />
        <About state={this.props.state} />
        <Music state={this.props.state} />
        <Contact state={this.props.state} />
      </div>
    );
  }
}

export default App;
