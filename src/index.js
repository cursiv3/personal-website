import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/main.css";

import { withRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const TopScroll = withRouter(ScrollToTop);
const db = require("../mockDB/database");

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <TopScroll>
        <App db={db} />
      </TopScroll>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("app")
);
