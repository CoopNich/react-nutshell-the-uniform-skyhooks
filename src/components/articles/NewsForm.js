import React, { useState } from "react";
import NewsManager from "../../modules/NewsManager"


const NewsForm = props => {
    const [news, setNews] = useState({ title: "", url: "", synopsis: "", timestamp: Date.now() })
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...news };
        stateToChange[evt.target.id] = evt.target.value;
        setNews(stateToChange);
    };

    const constructNewArticle = evt => {
        evt.preventDefault();
        if (news.title === "" || news.url === "" || news.synopsis === "" || news.timestamp === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);
            NewsManager.post(news)
                .then(() => props.history.push("/news"));
        }
    };

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
                            placeholder="Article Title"
                        />
                        <label htmlFor="url">URL</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            placeholder="Website URL"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                            type="textfield"
                            required
                            onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Synopsis"
                        />

                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );

}

export default NewsForm