import React from 'react';
import "./experience.css";

const Experience = () => (
    <div className="resumeExperienceContainer">
        <h1>Experience</h1>
        <div className="experienceItemWrap">
            <img className="companyLogo" src="https://s3-us-west-2.amazonaws.com/cslwebsite/skillsaiLogo.png" alt="skillsai logo" />
            <div className="positionDateWrap">
                <h3 className="resumeExperienceText">April 2017 - Present</h3>
                <h3 className="resumeExperienceText">Web Application Developer</h3>
            </div>
        </div>
        <div className="experienceItemWrap">
            <img className="companyLogo" src="https://s3-us-west-2.amazonaws.com/cslwebsite/transflection.png" alt="skillsai logo" />
            <div className="positionDateWrap">
                <h3>October 2016 - March 2017</h3>
                <h3 className="resumeExperienceText">Intern Web Developer</h3>
            </div>
        </div>
    </div>
)

export default Experience;