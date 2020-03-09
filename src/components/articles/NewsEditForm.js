import React, { useState, useEffect } from "react"
import NewsManager from "../../modules/NewsManager"

const NewsEditForm = props => {
    const [article, setArticle] = useState({ title: "", url: "", synopsis: "", timestamp: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...article };
        stateToChange[evt.target.id] = evt.target.value;
        setArticle(stateToChange);
    };

    const updateExistingArticle = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedArticle = {
            id: props.match.params.articleId,
            title: article.title,
            url: article.url,
            synopsis: article.synopsis,
            timestamp: article.timestamp
        };

        NewsManager.update(editedArticle)
            .then(() => props.history.push("/news"))
    }

    useEffect(() => {
        NewsManager.get(props.match.params.articleId)
            .then(article => {
                setArticle(article);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
              <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            value={article.title}
                        />
                        <label htmlFor="url">URL</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            value={article.url}
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                            type="textfield"
                            required
                            onChange={handleFieldChange}
                            id="synopsis"
                            value={article.synopsis}
                        />
              </div>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingArticle}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );

}

export default NewsEditForm
