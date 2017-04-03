import React, {Component} from 'react'
import '../styles/main.css'
import {Col} from 'react-bootstrap'
import TweenMax from 'gsap'


class Contact extends Component {
    
    componentWillEnter (callback) {
        const box = this.section;
        TweenMax.fromTo(box, 0.5, { opacity: 0 }, { delay: 0.5, opacity: 1, onComplete: callback })
    }

    componentWillLeave (callback) {
        const box = this.section;
        TweenMax.fromTo(box, 0.5, { opacity: 1 }, { opacity: 0, onComplete: callback });
    }

    render() {
        return (
            <div className="sectionContainer" style={{overflow: 'hidden', width: '40vmin'}} ref={s => this.section = s}>
                <h1 className="sectionHead">Contact</h1>
                <h2 className="row text-center">
                        <a href="https://www.facebook.com/cslewis503" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@coreyslewis.com" target="_blank"><i className="fa fa-envelope-square"></i></a>
                        <a href="http://www.linkedin.com/in/lewisc503" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                        <a href="https://github.com/cursiv3" target="_blank"><i className="fa fa-github-square"></i></a>
                </h2>
            </div>
            )
    }
}

export default Contact;