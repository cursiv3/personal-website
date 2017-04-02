import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'


class Contact extends Component {
    
    componentWillEnter (callback) {
        const box = this.section;
        TweenMax.fromTo(box, 1.5, { opacity: 0 }, { delay: 1.5, opacity: 1, onComplete: callback })
    }

    componentWillLeave (callback) {
        const box = this.section;
        TweenMax.fromTo(box, 1, { opacity: 1 }, { opacity: 0, onComplete: callback });
    }

    render() {
        return (
            <div className="sectionContainer" style={{overflow: 'hidden'}} ref={s => this.section = s}>
                <h1 className="sectionHead">Contact</h1>
                <h2 className="row text-center">
                    <a href="https://www.facebook.com/cslewis503" target="_blank"><i className="fa fa-facebook-square col-sm-3"></i></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@coreyslewis.com" target="_blank"><i className="fa fa-envelope-square col-sm-3"></i></a>
                    <a href="http://www.linkedin.com/in/lewisc503" target="_blank"><i className="fa fa-linkedin-square col-sm-3"></i></a>
                    <a href="https://github.com/cursiv3" target="_blank"><i className="fa fa-github-square col-sm-3"></i></a>
                </h2>
            </div>
            )
    }
}

export default Contact;