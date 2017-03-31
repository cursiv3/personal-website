import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'


class About extends Component {
    
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
                <h1 className="sectionHead">Who I am</h1>
                <div className="portraitBackground">
                    <img src={this.props.data.about.media} alt={'me'} className="aboutPortrait" />
                </div>
                {this.props.data.about.text.map( txt => <p key={this.props.data.about.tex} className="pageText">{txt}</p>)}
            </div>
            )
    }
}


export default About;