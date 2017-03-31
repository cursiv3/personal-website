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
            <div className="sectionContainer" ref={s => this.section = s}>
                <h1>Music</h1>
                <p>{this.props.data.music.text}</p>
            </div>
            )
    }
}

export default Music;