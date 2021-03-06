import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.chevronClick = this.chevronClick.bind(this);
  }

  chevronClick() {
    window.scroll({ top: (window.innerHeight / 100) * 10 + window.innerHeight, left: 0, behavior: 'smooth' });
  }

  render() {
    var state = this.props.state;
    var offset;
    window.innerWidth < 980 ? offset = 0 : offset = state.scrollDownOffset;
    return (
      <div
        className="landingContainer"
        style={{
          width: "100%",
          height: "calc(110% - " + state.size + "px)",
        }}
      >
        <div className="landingBackground" style={{ transform: 'translateY(' + offset * 0.5 + "px)" }} />
        <div className="landingTextRow" style={{ transform: "translateY(" + offset * 0.7 + "px)" }}>
          <p className="headerName">corey lewis</p>
          <p className="mainHeader">developer</p>
        </div>
        <div className="landingDownChevronBtn" onClick={e => this.chevronClick()}>
          <div className="landingChevronLeft" />
          <div className="landingChevronRight" />
        </div>
      </div>
    );
  }
}

export default Landing;
