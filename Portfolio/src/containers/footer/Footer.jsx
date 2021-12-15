import React from 'react';
import gpt3Logo from '../../assets/WarProductions-logos_transparent.png';
import './footer.css';

const Footer = () => (
    <div className="warProd__footer section__padding">
      <div className="warProd__footer-heading">
       
        <h1 className="gradient__text">Want to see my work?</h1>
    
      </div>
  
      <div className="warProd__footer-btn">
         <a href='https://github.com/chapintula902'>
        <p>Click here for my Github</p>
        </a>
      </div>
  
      <div className="warProd__footer-links">
        <div className="warProd__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
         
        </div>
        <div className="warProd__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="warProd__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="warProd__footer-links_div">
          <h4>Get in touch</h4>
          <p>4500 Riverwalk Prky, Riverside CA, 92505</p>
          <p>085-132567</p>
          <p>me@bryanguerra.info</p>
        </div>
      </div>
  
      <div className="warProd__footer-copyright">
        <p>@2021 WarProductions. All rights reserved.</p>
      </div>
    </div>
  );

export default Footer;