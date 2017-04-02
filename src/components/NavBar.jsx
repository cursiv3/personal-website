import React, { Component } from 'react'
import '../styles/main.css'

class NavBar extends Component {

    render() {

        return (
            <div>
                <table className={this.props.data.navBar}>
                        <tbody>  
                            <tr>
                                <td>
                                    <div className="navBtn navHov" onClick={evt => this.props.navClick(1)}>About</div>
                                </td>
                                <td>
                                    <div className="navBtn navHov" onClick={evt => this.props.navClick(2)}>Portfolio</div>
                                </td>
                                <td>
                                    <div className="navBtn navHov" onClick={evt => this.props.navClick(3)}>Music</div>
                                </td>
                                <td>
                                    <div className="navBtn navHov" onClick={evt => this.props.navClick(4)}>Contact</div>
                                </td>
                            </tr>   
                        </tbody>                
                    </table>
            </div>
        );
    }
}

export default NavBar;