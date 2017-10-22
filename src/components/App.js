import React from "react";
import { Route } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import Music from "./Music/Music";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/ResumePage";
import NavBar from "./NavBar/NavBar";

class App extends React.Component {
  componentDidMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <NavBar className="navEntry" />
        <Route exact path="/" component={Landing} />
        <Route path="/about" render={props => <About db={this.props.db} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/music" component={Music} />
        <Route
          path="/portfolio"
          render={props => <Portfolio db={this.props.db} />}
        />
        <Route path="/resume" render={props => <Resume db={this.props.db} />} />
      </div>
    );
  }
}

export default App;
