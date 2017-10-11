import React, { Component } from "react";
import "../../styles/main.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <table className={this.props.data.navBar}>
          <tbody>
            <tr>
              <td>
                <div
                  className={this.props.data.navBtn[0]}
                  onClick={evt => this.props.navClick("about", 0)}
                >
                  about
                </div>
              </td>
              <td>
                <div
                  className={this.props.data.navBtn[1]}
                  onClick={evt => this.props.navClick("portfolio", 1)}
                >
                  portfolio
                </div>
              </td>
              <td>
                <div
                  className={this.props.data.navBtn[2]}
                  onClick={evt => this.props.navClick("music", 2)}
                >
                  music
                </div>
              </td>
              <td>
                <div
                  className={this.props.data.navBtn[3]}
                  onClick={evt => this.props.navClick("resumepage", 3)}
                >
                  resume
                </div>
              </td>
              <td>
                <div
                  className={this.props.data.navBtn[4]}
                  onClick={evt => this.props.navClick("contact", 4)}
                >
                  contact
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NavBar;
