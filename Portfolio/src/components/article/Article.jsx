import React from 'react'
import './article.css';


export const Article = ({imgURL, date, title, imrUrlString}) => {
    return (
        <div className="warProd__blog-container_article">
             <div className="warProd__blog-container_article-image">
              <a href={imrUrlString}>
              <img src={imgURL}  alt="blog img"/>
              </a>
            </div>
            <div className="warProd__blog-container_article-content">
            <div>
            <p>{date}</p>
            <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
    )
}

export default Article;