import React, {Component} from 'react'
import Landing from './Landing.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Music from './Music.jsx'
import Contact from './Contact.jsx'
import Resume from './Resume.jsx'
import TransitionGroup from 'react-addons-transition-group'

class CurrentSection extends Component {

    render() {

        return (
            <div>
                <TransitionGroup>
                    {this.props.data.currentDisplay === 'about' && <About data={this.props.data} />}
                    {this.props.data.currentDisplay === 'portfolio' && <Portfolio data={this.props.data} />}
                    {this.props.data.currentDisplay === 'music' && <Music data={this.props.data} />}
                    {this.props.data.currentDisplay === 'contact' && <Contact data={this.props.data} />}
                    {this.props.data.currentDisplay === 'resume' && <Resume data={this.props.data} />}
                    {this.props.data.currentDisplay === 'landing' && <Landing data={this.props.data} />}
                </TransitionGroup>
            </div>
        )
            }
        }


export default CurrentSection;