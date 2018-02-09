import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/main.css";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


const state = require("./stateFile/stateFile");

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App state={state} />
  </MuiThemeProvider>,
  document.getElementById("app")
);
