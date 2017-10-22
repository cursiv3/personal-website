import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="sectionContainerContact">
        <h2 className="text-center">
          <p>contact@coreyslewis.com</p>
          <a href="https://www.facebook.com/cslewis503" target="_blank">
            <i className="fa fa-facebook-square" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@coreyslewis.com"
            target="_blank"
          >
            <i className="fa fa-envelope-square" />
          </a>
          <a href="http://www.linkedin.com/in/lewisc503" target="_blank">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://github.com/cursiv3" target="_blank">
            <i className="fa fa-github-square" />
          </a>
        </h2>
      </div>
    );
  }
}

export default Contact;
