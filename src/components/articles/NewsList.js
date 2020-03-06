import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";

const NewsList = (props) => {
    const [news, setNews] = useState([]);

    const getNews = () => {
        return NewsManager.getAll().then(newsArticles => {
            setNews(newsArticles)
        });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/news/new") }}>
                    Add Article
                </button>
            </section>
            <div className="container-cards">
                {news.map(article =>
                    <NewsCard
                        key={article.id}
                        article={article}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default NewsList