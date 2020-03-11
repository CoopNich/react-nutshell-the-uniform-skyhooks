import React from "react"; 
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

const NewsCard = props => {

    return (
        <Card className="card">
      <div className="card-content">
        <h3><span className="card-title">
          {props.article.title}
        </span></h3>
        <h5><a href={props.article.url}>Link</a></h5>
        <Link to={`/news/${props.article.id}`}><Button className="btn" bg="dark" variant="dark">Details</Button></Link>
        <Button className="btn" bg="dark" variant="dark" type="button"
          onClick={() => props.history.push(`/news/${props.article.id}/edit`)}>
          Edit
        </Button>
        <Button className="btn" bg="dark" variant="dark" type="button" onClick={() => props.deleteArticle(props.article.id)}>Delete</Button>
      </div>
    </Card>
    )
}

export default NewsCard