import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import {blog1, blog2, blog3, blog4, blog5, blog6} from './imports'

export const Blog = () => {
    return (
        <div className="warProd__blog section__padding" id="blog">
        <div className="warProd__blog-heading">
        <h1 className="gradient__text">Here is what I have been up to <br /> </h1>
        </div>
        <div className="warProd__blog-container">   
        <div className="warProd__blog-container_groupA">
            <Article imgURL ={blog6} date="Sep 26, 2021" title="Bryan Guerra Builds this wonderful website using React and CSS " imrUrlString="https://tchgdns.de/wp-content/uploads/datenleck-bka-findet-500-mio-datensaetze-sind-auch-eure-daten-betroffen.jpg" />
        </div>
        <div className="warProd__blog-container_groupB">
            <Article imgURL ={blog1} date="Sep 26, 2021" title="Bryan Guerra accpets a full time role at Paylocity"  imrUrlString="https://www.paylocity.com/"/>
            <Article imgURL ={blog3} date="Sep 26, 2021" title="Bryan Guerra's expirenece working at BNY Mellon and what he learned" imrUrlString="https://www.bnymellon.com/"/>
            <Article imgURL ={blog4} date="Sep 27, 2021" title="Bryan Guerra builds a sports betting app where user's can not place bets against each other" imrUrlString="https://tchgdns.de/wp-content/uploads/datenleck-bka-findet-500-mio-datensaetze-sind-auch-eure-daten-betroffen.jpg"/>
            <Article imgURL ={blog5} date="Sep 28, 2021" title="Bryan Guerra is considered to be one the greates programmers ever" imrUrlString="https://tchgdns.de/wp-content/uploads/datenleck-bka-findet-500-mio-datensaetze-sind-auch-eure-daten-betroffen.jpg"/>
      
        </div>
        </div>
    </div>
    )
}

export default Blog;