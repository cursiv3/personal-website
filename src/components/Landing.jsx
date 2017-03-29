import React, {Component} from 'react'
import TweenMax from 'gsap'



class Landing extends Component {

    componentWillEnter (callback) {
      const box = this.section;
      TweenMax.fromTo(box, 0.5, {left: 0, opacity: 0}, {left: '50%', opacity: 1, onComplete: callback});
    }

    componentWillLeave (callback) {
      const box = this.section;
      TweenMax.fromTo(box, 0.5, {left: '50%', opacity: 1}, {left: '100%', opacity: 0, onComplete: callback});
    }


    render() {
        return (
                <div ref={s => this.section = s}>
                    <div className="mainHeader">
                        <h1>Aspiring developer.</h1>
                    </div>
                </div>
        )
    }
} 

export default Landing;