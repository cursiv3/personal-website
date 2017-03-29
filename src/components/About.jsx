import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'


class About extends Component {
    componentWillEnter (callback) {
      const box = this.section;
      TweenMax.fromTo(box, 0.5, {left: 0, opacity: 0}, {left: '50%', opacity: 1, onComplete: callback});
    }

    componentWillLeave (callback) {
      const box = this.section;
      TweenMax.fromTo(box, 0.5, {left: '50%', opacity: 1}, {left: '100%', opacity: 0, onComplete: callback});
    }

    render() {
        return (
            <div className="sectionContainer" ref={s => this.section = s}>
                <h1>About</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            )
    }
}


export default About;