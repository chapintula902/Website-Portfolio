import React from 'react'
import './features.css';
import {Feature} from '../../components'
const featuresData = [
    {
        title:'Full Transparency',
        text: "I will let you know what's possible within a given timeframe, what I am capable of, and the exact amount of cost. "
    },
    {
        title:'Flexible Pricing',
        text: 'Based on your guidlenes we can always work out a deal that works for your company. Big or small there is a budget for everyone'
    },
    {
        title:'Innovative Ideas',
        text: 'No need to worry about falling behind with an old application. Let me introduce you to the newest technologies that will make your project up to date. '
    },
    {
        title:'Full Dedication',
        text: 'I am 100% commitied to the my work. Just like Tom Brady, I thrive to be the best there ever is in my field.'
    }
]

const Features = () => (
    <div className="warProd__features section__padding" id="features">
      <div className="warProd__features-heading">
        <h1 className="gradient__text">The Future is Now. Step Into Future Today and Let ME Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="warProd__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );

export default Features;