import React, {Component} from 'react'
import '../styles/main.css'
import {Row, Col} from 'react-bootstrap'
import TweenMax from 'gsap'

class ResumePage extends Component {
    componentWillMount () {
        setTimeout(() => {window.scrollTo(0, 0)}, 500);
    }
    
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
            <div ref={s => this.section = s} className="sectionContainer">
                <Row>
                    <Col sm={6}>
                        <h3 className="text-center">Visual Resume</h3>
                        <a href="/static/media/CoreyLewisResumeVisual.c027a96c.png" target="_blank" classID>
                            <img src={require("../../public/CoreyLewisResumeVisual.png")} alt="Corey Lewis Visual Resume" className="img-responsive resumeImg" />
                        </a>
                        <a download="CoreyLewisResumeVisual.c027a96c.png" href="/static/media/CoreyLewisResumeVisual.c027a96c.png">
                            <button className="resumeBtn">download</button>
                        </a>
                    </Col>
                    <Col sm={6}>
                        <h3 className="text-center">Text Resume</h3>
                        <a href="https://drive.google.com/open?id=0Bw92SM4ozWAJbUZmT2E2dUM3SmM" target="_blank">
                            <img src={require("../../public/CoreyLewisResumeTyped.jpg")} className="img-responsive resumeImg" />
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=0Bw92SM4ozWAJbUZmT2E2dUM3SmM">
                            <button className="resumeBtn">download</button>
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ResumePage;