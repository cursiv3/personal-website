import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './styles/main.css'
import CurrentSection from './components/CurrentSection.js'
import NavBar from './components/NavBar.js'
import stateFile from './components/stateFile'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = stateFile;

    this.navClick = (page, key) => {
        this.setState(
            {
                currentDisplay: page, 
                navBar: 'navAfter',
                navBtn: this.state.navBtn.map((val, idx) => {
                    if (idx === key) return 'navActive'
                    return 'navBtn navHov'
                })
            })
        }
    }

  render() {
    return (
      <div className="scrollBox">
        <CurrentSection data={this.state} />
        <NavBar data={this.state} navClick={this.navClick} />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))