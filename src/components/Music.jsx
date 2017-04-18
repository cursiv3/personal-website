import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'


class Music extends Component {

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
            <div className="sectionContainer" ref={s => this.section = s}>
                <h1 className="sectionHead">poor sound quality youtube videos!</h1>
                    <div  className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/qqytoS_1OLo" allowFullScreen></iframe>
                    </div>
                    <p>Original tune "No More Plans"</p>
                    <div className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/UKYtxamVuic" allowFullScreen></iframe>
                    </div>
                    <p>"7-14" by Andy McKee</p>
                    <div className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/Oda9Qoh7-4Y" allowFullScreen></iframe>
                    </div>
                    <p>"Ebon Coast" by Andy McKee</p>
            </div>
            )
    }
}

export default Music;