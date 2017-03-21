import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'
import '../styles/Main.css'

class Main extends Component {


  render() {
    return (
      <div className="App container-fluid">
        <Jumbotron className='mainHeaderBox'>
          <h1 className='mainHeader'>Welcome!</h1>
        </Jumbotron>
      </div>
    )
  }
}

export default Main;
