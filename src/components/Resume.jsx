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
            <div ref={s => this.section = s}>
                <div className="sectionContainerResume">
                    <div className="resumeVisualDiv">
                        <h3>visual resume</h3>
                        <a href="/static/media/CoreyLewisResumeVisual.018e4bb8.jpg" target="_blank">    
                            <div className="resumeVisualImg"></div>
                        </a>
                        <a download="coreyResumeIcons.jpg" href="/static/media/coreyResumeIcons.018e4bb8.jpg">
                            <h5 className="text-center">download</h5>
                        </a>
                    </div>
                    <div className="resumeTypedDiv">
                        <h3>text resume</h3>
                        <a href="/static/media/Resume_Typed.1cb08635.jpg" target="_blank">
                            <div className="resumeTypedImg" />
                        </a>
                        <a download href="CoreyLewisResumeTyped.pdf">
                            <h5 className="text-center">download</h5>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume