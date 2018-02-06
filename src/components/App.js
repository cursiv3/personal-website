import React from "react";
import { Route, Switch } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import Music from "./Music/Music";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/ResumePage";
import NavBar from "./NavBar/NavBar";
import NavMobile from "./NavBar/NavMobile";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends React.Component {
  navUpdate = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    this.navUpdate();
    window.addEventListener("resize", this.navUpdate.bind(this));
    injectTapEventPlugin();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.navUpdate.bind(this));
  }

  render() {
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };
    return (
      <TransitionGroup component="main">
        {window.innerWidth > 845 ? <NavBar /> : <NavMobile />}
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route
              path="/about"
              render={props => <About state={this.props.state} />}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/music" component={Music} />
            <Route
              path="/portfolio"
              render={props => <Portfolio state={this.props.state} />}
            />
            <Route
              path="/resume"
              render={props => <Resume state={this.props.state} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;
