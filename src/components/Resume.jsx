import React, {Component} from 'react'
import '../styles/main.css'
import 'react-bootstrap'
import TweenMax from 'gsap'


class Resume extends Component {

    componentWillMount () {
        setTimeout(() => {window.scrollTo(0, 0)}, 500);
    }
    
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
            <div ref={s => this.section = s} className="sectionContainerResume">
                    <h3>visual resume</h3>
                    <a href="/static/media/CoreyLewisResumeVisual.018e4bb8.jpg" target="_blank">    
                        <img src={require("../../public/CoreyLewisResumeVisual.jpg")} alt="Corey Lewis Visual Resume" className="resumeImg" />
                    </a>
                    <a download href="/static/media/CoreyLewisResumeVisual.018e4bb8.jpg">
                        <h5 className="text-center">download</h5>
                    </a>
                    <h3>text resume</h3>
                    <a href="https://drive.google.com/open?id=0Bw92SM4ozWAJbUZmT2E2dUM3SmM" target="_blank">
                        <img src={require("../../public/Resume_Typed.jpg")} alt="Corey Lewis Typed Resume" className="resumeImg" />
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=0Bw92SM4ozWAJbUZmT2E2dUM3SmM">
                        <h5 className="text-center">download</h5>
                    </a>
            </div>
        )
    }
}

export default Resume