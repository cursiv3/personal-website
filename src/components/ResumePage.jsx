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
                <a href="/static/media/CoreyLewisResumeVisual.5f7c2f42.jpg" target="_blank">
                    <img src={require("../../public/CoreyLewisResumeVisual.jpg")} className="img-responsive" alt="Corey Lewis Visual Resume" />
                </a>
                <a download="CoreyLewisResumeVisual.5f7c2f42.jpg" href="/static/media/CoreyLewisResumeVisual.5f7c2f42.jpg">
                    <button className="resumeBtn">download</button>
                    <hr/>
                </a>
                <a href="https://drive.google.com/open?id=0Bw92SM4ozWAJbUZmT2E2dUM3SmM" target="_blank">
                    <img src={require("../../public/CoreyLewisResumeTyped.jpg")} className="img-responsive" />
                </a>
                <a href="https://drive.google.com/uc?export=download&id=0Bw92SM4ozWAJbUZmT2E2dUM3SmM">
                    <button className="resumeBtn">download</button>
                </a>
            </div>
        )
    }
}

export default ResumePage;