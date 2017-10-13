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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/music" component={Music} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default App;
