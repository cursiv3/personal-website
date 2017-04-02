import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'


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
            <div className="sectionContainerMusic" ref={s => this.section = s}>
                <h1 className="sectionHead">Some acoustic guitar</h1>
                    <div  className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/qqytoS_1OLo" allowFullScreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/UKYtxamVuic" allowFullScreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/Oda9Qoh7-4Y" allowFullScreen></iframe>
                    </div>
            </div>
            )
    }
}

export default Music;