import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";
import { Button } from "react-bootstrap"

const NewsList = (props) => {
    const [news, setNews] = useState([]);

    const getNews = () => {
        return NewsManager.getAll().then(newsArticles => {
            setNews(newsArticles)
        });
    };


    const deleteArticle = id => {
        NewsManager.delete(id)
            .then(() => NewsManager.getAll().then(setNews));
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <section className="section-content">
                <Button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/news/new") }}>
                    Add Article
                </Button>
            </section>
            <div className="container-cards">
                {news.map(article =>
                    <NewsCard
                        key={article.id}
                        article={article}
                        deleteArticle={deleteArticle}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default NewsList