import React, {Component} from 'react'
import TweenMax from 'gsap'



class Landing extends Component {

    componentWillEnter (callback) {
      const box = this.section;
      TweenMax.fromTo(box, 0.5, {bottom: 0, opacity: 0}, {bottom: '50%', opacity: 1, onComplete: callback});
    }

    componentWillLeave (callback) {
      const box = this.section;
      TweenMax.fromTo(box, 0.5, {bottom: '50%', opacity: 1}, {bottom: 0, opacity: 0, onComplete: callback});
    }


    render() {
        return (
                <div ref={s => this.section = s}>
                    <h1 className="landingHeader">corey lewis</h1>
                    <div className="mainHeader">
                        <h3>developer</h3>
                    </div>
                </div>
        )
    }
} 

export default Landing;