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

    this.navClick = (key) => {

            switch (key) {
                case 1:
                    this.setState({ currentDisplay: 'About', navBar: 'navAfter' });
                    break
                case 2:
                    this.setState({ currentDisplay: 'Portfolio', navBar: 'navAfter'});
                    break
                case 3:
                    this.setState({ currentDisplay: 'Music', navBar: 'navAfter'});
                    break
                case 4:
                    this.setState({ currentDisplay: 'Contact', navBar: 'navAfter'});
                    break
            }
        }
  }

  render() {
    return (
      <div>
        <CurrentSection data={this.state} />
        <NavBar data={this.state} navClick={this.navClick} />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));