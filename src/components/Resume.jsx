import React, {Component} from 'react'
import '../styles/main.css'
import {Row, Col} from 'react-bootstrap'
import TweenMax from 'gsap'


class Resume extends Component {
    
    componentWillEnter (callback) {
        const box = this.section
        TweenMax.fromTo(box, 0.5, { opacity: 0 }, { delay: 0.5, opacity: 1, onComplete: callback })
    }

    componentWillLeave (callback) {
        const box = this.section
        TweenMax.fromTo(box, 0.5, { opacity: 1 }, { opacity: 0, onComplete: callback })
    }

    render() {
        return (
            <div ref={s => this.section = s}>
                <Row className="sectionContainerResume">
                    <Col sm={6}>
                        <a href="/static/media/coreyResumeIcons.018e4bb8.jpg" target="_blank">    
                            <img src={require("../../public/coreyResumeIcons.jpg")} className="img-responsive" alt="coreyVisualResume" />
                        </a>
                        <a download="coreyResumeIcons.jpg" href="/static/media/coreyResumeIcons.018e4bb8.jpg">
                            <h5>download</h5>
                        </a>
                    </Col>
                    <Col sm={6}>
                        <a href="http://localhost:3000/static/media/Resume_Typed.1cb08635.jpg" target="_blank">
                            <img src={require("../../public/Resume_Typed.jpg")} className="img-responsive" alt="coreyTypedResume" />
                        </a>
                        <a download href="Resume_Typed.pdf">
                            <h5>download</h5>
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Resume