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
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends React.Component {
  componentDidMount() {
    injectTapEventPlugin();
  }

  render() {
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };
    return (
      <div>
        <NavBar />
        <TransitionGroup component="main">
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
      </div>
    );
  }
}

export default App;
