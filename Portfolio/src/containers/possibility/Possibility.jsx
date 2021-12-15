import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/AI1.png'
export const Possibility = () => {
    return (
        <div className="warProd__possibility section__padding" id="skills">
           <div className="warProd__possibility-image">
           <a href="https://www.vecteezy.com/vector-art/2859253-lowpoly-modern-brain-neuron-with-light">
            <img src={possibilityImage} alt="possibility"/>
            </a>
          </div>  
          <div className="warProd__possibility-content">
            <h4>Email me to get Started</h4>
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Skills include: Swift, Google Firebase, Angular, TypeScript, React, Nodejs, iOS, C, C++, Java, PHP, JavaScript, Git, Mobile development, Unit Test, UI/UX design, Database Management, and much more!  </p>
            <h4>Email me to get Started</h4>
          </div>
            
        </div>
    )
}


export default Possibility;