import React, {Component} from 'react'
import Landing from './Landing.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Music from './Music.jsx'
import Contact from './Contact.jsx'
import TransitionGroup from 'react-addons-transition-group'

class CurrentSection extends Component {
    

    render() {
        return (
            <div>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'About' && <About data={this.props.stateFile} />}
                </TransitionGroup>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'Portfolio' && <Portfolio data={this.props.stateFile} />}
                </TransitionGroup>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'Music' && <Music data={this.props.stateFile} />}
                </TransitionGroup>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'Contact' && <Contact data={this.props.stateFile} />}
                </TransitionGroup>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'Landing' && <Landing data={this.props.stateFile} />}
                </TransitionGroup>
            </div>
        )
            }
        }


export default CurrentSection;