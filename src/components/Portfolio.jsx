import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
import '../styles/main.css'
import TweenMax from 'gsap'


class Portfolio extends Component {

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
            <div className="sectionContainer row" ref={s => this.section = s}>
                <h1 className="col-sm-12 sectionHead">Portfolio</h1>
                {this.props.data.portfolio.map( data => 
                <Col sm={6}>
                    <a href={data.link}>
                    <div className="folioImg" style={{backgroundImage: 'url(' + data.img + ')'}}></div>
                    </a>
                    <p>{data.text}</p>
                </Col> 
                )}
            </div>
            )
    }
}

export default Portfolio;