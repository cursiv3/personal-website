import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/main.css";

import { BrowserRouter } from "react-router-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const db = require("../mockDB/database");

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <App db={db} />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("app")
);
