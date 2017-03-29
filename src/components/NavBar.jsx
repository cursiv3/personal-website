import React, { Component } from 'react'
import '../styles/main.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = (key) => {     
            var newState;
            if (key === 1) {
                newState = {
                    currentDisplay: 'About'
                }
                this.props.updateState(newState)
            } else if (key === 2) {
                newState = {
                    currentDisplay: 'Portfolio'
                }
                this.props.updateState(newState)
            } else if (key === 3) {
                newState = {
                    currentDisplay: 'Music'
                }
                this.props.updateState(newState)
            } else if (key === 4) {
                newState = {
                    currentDisplay: 'Contact'
                }
                this.props.updateState(newState)
            }
            
        }
    }

    render() {

        return (
            <div>
                <table className="navBarLanding">
                    <tbody>  
                        <tr>
                            <td>
                                <div className="navBtn navHov" onClick={evt => this.handleClick(1)}>About</div>
                            </td>
                            <td>
                                <div className="navBtn navHov" onClick={evt => this.handleClick(2)}>Portfolio</div>
                            </td>
                            <td>
                                <div className="navBtn navHov" onClick={evt => this.handleClick(3)}>Music</div>
                            </td>
                            <td>
                                <div className="navBtn navHov" onClick={evt => this.handleClick(4)}>Contact</div>
                            </td>
                        </tr>   
                    </tbody>                
                </table>
            </div>
        );
    }
}

export default NavBar;