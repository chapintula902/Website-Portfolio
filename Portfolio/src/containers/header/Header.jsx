import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/brain.png';
import './header.css';

const Header = () => (
  <div className="warProd__header section__padding" id="home">
    <div className="warProd__header-content">
      <h1 className="gradient__text">Allow me to Build your dreams</h1>
      <p>Freshly out of college I have been programming since I was in high school. I love to build websites such as this or mobile applications. If you are intrested in putting your ideas in motion contact me. If you are a top tech company please reach out too</p>

      <div className="warProd__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="warProd__header-content__people">
     
      <img src={people} alt="people" /> 
        <p>1,600 people requested access a visit in last 24 hours</p>
      
      </div>
    </div>
   
    <div className="warProd__header-image">
    < a href="https://www.vecteezy.com/vector-art/2859253-lowpoly-modern-brain-neuron-with-light">
      <img src={ai} alt="ai"/>
      </a>
    </div>
  </div>
);

export default Header;