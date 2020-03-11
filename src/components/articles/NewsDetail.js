import React, { useState, useEffect } from 'react';
import NewsManager from '../../modules/NewsManager';

const NewsDetail = props => {
  const [article, setArticle] = useState({ title: "", url: "", synopsis: "", timestamp: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    NewsManager.get(props.articleId)
      .then(article => {
        setArticle({
          title: article.title,
          url: article.url,
          synopsis: article.synopsis,
          timestamp: article.timestamp
        });
        setIsLoading(false);
      });
  }, [props.articleId]);

  const handleDelete = () => {
    setIsLoading(true);
    NewsManager.delete(props.articleId).then(() =>
      props.history.push("/news")
    );
  };

  const getNews = () => {
    return NewsManager.getAll().then(newsArticles => {
        setArticle(newsArticles)
        props.history.push("/news")
    
    });
};


  return (
    <div className="card">
      <div className="card-content">
        <h3>Title: <span>{article.title}</span></h3>
        <p>URL: {article.url}</p>
        <p>Synopsis: {article.synopsis}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Article
        </button>
        <button type="button" disabled={isLoading} onClick={getNews}>
          Show All
        </button>
      </div>
    </div>
  );
}

export default NewsDetail;