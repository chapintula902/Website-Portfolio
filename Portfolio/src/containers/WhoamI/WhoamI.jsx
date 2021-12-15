import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhoamI = () => (
  <div className="gpt3__whatgpt3 section__margin" id="services">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What can I do for you?" text="I built this app using only React and CSS styling. I did this to showcase me portfolio and my capabilities as a programmer. This website is fully responsive, if you minimize the page it'll auto adapt to a clean formatting. Building this website only scratching the surface of what I can do for you." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="https://github.com/chapintula902">Explore my Github</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="Full Stack Websites" text="Anything from backend to front end I can build. Want a ECommerce store? You got it! Want a portfolio page? I can do it! Let me build the website to make your dream a reality. " />
      <Feature title="Write API's" text="Need API's for you buisness? Want to optimize your company's database? Let me help you build full REST API's" />
      <Feature title="Full Stack Mobile Apps" text="Ever had a million dollar app idea that would revolutionzie the world but do not know where to start? I can help you achieve this? Contact me for pricing." />
    </div>
  </div>
);

export default WhoamI;