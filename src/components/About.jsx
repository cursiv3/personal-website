import React, {Component} from 'react'
import '../styles/main.css'
import TweenMax from 'gsap'


class About extends Component {
    
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
                <h1 className="sectionHead">Who I am</h1>
                <div className="portraitBackground">
                    <img src={this.props.data.about.media} alt={'me'} className="aboutPortrait" />
                </div>
                <p className="pageText">My name is Corey Lewis,  I graduated from Portland State University in 2014 with a B.S. in Biological Science.</p>
                <p className="pageText">I spent the past six months completing an internship with <a href="https://www.transflection.com" target="_blank">Transflection</a>, a Portland, 
                    OR based digital marketing start up.  This was an amazing experience for two reasons: I worked directly under their lead engineer, and this was the first time I'd 
                    worked on a real project.  We used JavaScript, jQuery, bootstrap, node, express/koa, mongoDB, and most recently we began using ReactJS with Redux.
                </p>
                <p className="pageText">
                    I have been enjoying using React and built this site with the library (<a href="https://github.com/cursiv3/personal-website" target="_blank">code here</a>)
                </p>
                <p className="pageText">
                    I started learning programming in January of 2016 as my search for employment in the field of Biology was not yielding results. A friend recommended "Learn Python 
                    the Hard Way" by Zed. A. Shaw.  I began to complete coding challenges on sites like HackerRank.com to gain experience using Python, and I ended up dipping my toes 
                    in the waters of C++, C#, Java, SQL.
                </p>
                <p className="pageText">
                    I didn't believe I could actually get work as a programmer without a C.S. degree, but I enjoyed working with the languages so much that I simply kept at it, and in 
                    October of 2016 I landed a web dev internship with only a few months exposure to JavaScript.
                </p>
                <p className="pageText">
                    I am also a soccer coach, a certified USSF Soccer referee, guitarist of 17 years and counting, and a video game enthusiast.
                </p>
            </div>
            )
    }
}


export default About;