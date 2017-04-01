import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'
import {Col} from 'react-bootstrap'


class Music extends Component {

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
            <div className="sectionContainer" ref={s => this.section = s}>
                <h1 className="sectionHead">Some acoustic guitar</h1>
                <Col sm={3} />
                <iframe className="col-sm-6" width="560" height="315" src="https://www.youtube.com/embed/qqytoS_1OLo" frameborder="0" allowfullscreen></iframe>
                <Col sm={3} />
                <iframe className="col-sm-6" width="560" height="315" src="https://www.youtube.com/embed/UKYtxamVuic" frameborder="0" allowfullscreen></iframe>
                <Col sm={3} />
                <iframe className="col-sm-6" width="560" height="315" src="https://www.youtube.com/embed/Oda9Qoh7-4Y" frameborder="0" allowfullscreen></iframe>
                <Col sm={3} />
            </div>
            )
    }
}

export default Music;