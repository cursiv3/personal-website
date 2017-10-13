import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./components/main.css";
import CurrentSection from "./components/CurrentSection/CurrentSection.js";
import NavBar from "./components/NavBar/NavBar.js";
import stateFile from "./components/stateFile";
import App from "./components/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
/*
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = stateFile;

    this.navClick = (page, key) => {
      this.setState({
        currentDisplay: page,
        navBar: "navAfter noinline",
        navBtn: this.state.navBtn.map((val, idx) => {
          if (idx === key) return "navActive";
          return "navBtn navHov";
        })
      });
    };
  }

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
*/

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("app")
);
