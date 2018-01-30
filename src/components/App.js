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
  componentDidMount() {
    injectTapEventPlugin();
  }

  navUpdate = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    this.navUpdate();
    window.addEventListener("resize", this.navUpdate.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.navUpdate.bind(this));
  }

  render() {
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };
    return (
      <TransitionGroup component="main">
        {window.innerWidth > 785 && <NavBar />}
        {window.innerWidth < 785 && <NavMobile />}
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
              render={props => <About db={this.props.db} />}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/music" component={Music} />
            <Route
              path="/portfolio"
              render={props => <Portfolio db={this.props.db} />}
            />
            <Route
              path="/resume"
              render={props => <Resume db={this.props.db} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;
