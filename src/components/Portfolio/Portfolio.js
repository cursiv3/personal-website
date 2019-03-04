import React from "react";
import "./portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="folioContainer">
        <div className="folioSectionWrap">
          <div className="folioIntroWrap">
            <h1 className="folioSectionHead">portfolio</h1>
            <div className="folioImgDiv">
            <a href="https://www.wearecultivator.com" target="_blank" rel="noopener noreferrer">
              <img src="https://s3-us-west-2.amazonaws.com/cslwebsite/cultivator.jpg" alt="cultivator background"/>
              </a>
              <p className="folioText">
                In August of 2018 I began working with <a href="https://workwithsupply.com/">Supply Design</a> and <a href="https://www.nike.com">Nike's</a> innovation team
                on their new Cultivator application.  I worked primarily on the Front-End implementing designs built in Zeplin and InVision.  I worked closely with the design team at
                Supply as well as the Back-End team at Nike and in the end we built a very successful application.
              </p>
            </div>
            <div className="folioImgDiv">
            <a href="https://www.dovelewis.org" target="_blank" rel="noopener noreferrer">
              <img src="https://s3-us-west-2.amazonaws.com/cslwebsite/Screen+Shot+2019-03-04+at+8.54.08+AM.png" alt="cultivator background"/>
              </a>
              <p className="folioText">
                I joined Hello World Devs as a Node/React dev, but I was asked 
                to help out on a Drupal 8 project for Dove Lewis animal hospital. 
                Initially I was given sass styling tickets as I had no experience 
                with Drupal.  After about a week I understood the framework well 
                enough and began to build custom items within the Drupal 
                framework.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Portfolio;
