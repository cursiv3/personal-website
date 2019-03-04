import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactSectionWrap">
          <h1 className="contactHeader">Contact</h1>
          <div className="contactRow">
            <div className="contactIconWrapper">
              <a
                href="mailto:contact@coreyslewis.com?subject=Inquiry"
                target="_blank"
                className="contactIcon"
                rel="noopener noreferrer"
              >
                <i className="icon fa fa-envelope-square" />
              </a>
            </div>
            <div className="contactIconWrapper">
              <a
                href="https://www.facebook.com/cslewis503"
                target="_blank"
                rel="noopener noreferrer"
                className="contactIcon"
              >
                <i className="icon fa fa-facebook-square" />
              </a>
            </div>
            <div className="contactIconWrapper">
              <a
                href="http://www.linkedin.com/in/lewisc503"
                target="_blank"
                rel="noopener noreferrer"
                className="contactIcon"
              >
                <i className="icon fa fa-linkedin-square" />
              </a>
            </div>
            <div className="contactIconWrapper">
              <a
                href="https://github.com/cursiv3"
                target="_blank"
                rel="noopener noreferrer"
                className="contactIcon"
              >
                <i className="icon fa fa-github-square" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
