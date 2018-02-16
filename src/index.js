import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/main.css";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


const stateFile = require("./stateFile/stateFile");

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App stateFile={stateFile} />
  </MuiThemeProvider>,
  document.getElementById("app")
);
