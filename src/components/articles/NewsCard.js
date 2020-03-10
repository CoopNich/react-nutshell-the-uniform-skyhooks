import React from "react"; 
import { Link } from "react-router-dom"

const NewsCard = props => {

    return (
        <div className="card">
      <div className="card-content">
        <h3>Title: <span className="card-title">
          {props.article.title}
        </span></h3>
        <p><a href={props.article.url}>Link</a></p>
        <Link to={`/news/${props.article.id}`}><button>Details</button></Link>
        <button type="button"
          onClick={() => props.history.push(`/news/${props.article.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
      </div>
    </div>
    )
}

export default NewsCard