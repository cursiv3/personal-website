import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './styles/main.css'
import CurrentSection from './components/CurrentSection.jsx'
import NavBar from './components/NavBar.jsx'
import stateFile from './components/stateFile'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = stateFile;

    this.updateState = (newState) => {
            this.setState(newState);
        }
  }

  render() {
    return (
      <div>
        <CurrentSection data={this.state} />
        <NavBar stateFile={this.state} updateState={this.updateState} />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));