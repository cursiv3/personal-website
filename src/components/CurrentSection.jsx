import React, {Component} from 'react'
import Landing from './Landing.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Music from './Music.jsx'
import Contact from './Contact.jsx'
import TransitionGroup from 'react-addons-transition-group'
import TweenMax from 'gsap'

class CurrentSection extends Component {

    render() {

        return (
            <div>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'About' && <About data={this.props.data} />}
                    {this.props.data.currentDisplay === 'Portfolio' && <Portfolio data={this.props.data} />}
                    {this.props.data.currentDisplay === 'Music' && <Music data={this.props.data} />}
                    {this.props.data.currentDisplay === 'Contact' && <Contact data={this.props.data} />}
                    {this.props.data.currentDisplay === 'Landing' && <Landing data={this.props.data} />}
                </TransitionGroup>
            </div>
        )
            }
        }


export default CurrentSection;