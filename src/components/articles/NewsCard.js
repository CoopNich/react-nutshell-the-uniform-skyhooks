import React from "react"; 

const NewsCard = props => {

    return (
        <div className="card">
      <div className="card-content">
        <h3>Title: <span className="card-title">
          {props.article.title}
        </span></h3>
        <p><a href={props.article.url}>Link</a></p>
      </div>
    </div>
    )
}

export default NewsCard