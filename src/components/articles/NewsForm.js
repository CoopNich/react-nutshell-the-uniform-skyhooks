import React, { useState } from "react";
import NewsManager from "../../modules/NewsManager"
import { Form, Button } from "react-bootstrap"
import "./NewsForm.css"


const NewsForm = props => {
    const [news, setNews] = useState({ title: "", url: "", synopsis: "" })
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...news };
        stateToChange[evt.target.id] = evt.target.value;
        setNews(stateToChange);
    };

    const constructNewArticle = evt => {
        evt.preventDefault();
        if (news.title === "" || news.url === "" || news.synopsis === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);
            const newNews = {
                ...news, 
                // title: news.title,
                // url: news.url,
                // synopsis: news.synopsis,
                timestamp: Date.now(),
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            NewsManager.post(newNews)
                .then(() => props.history.push("/news"));
        }
    };

    return (
        <>
            <Form className="newsForm_Form">
               
                    <div className="formgrid">
                        <div>
                        {/* <label htmlFor="title">Title</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            placeholder="Article Title"
                        />
                        </div>
                        <div>
                        {/* <label htmlFor="url">URL</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            placeholder="Website URL"
                        />
                        </div>
                        <div>
                        {/* <label htmlFor="synopsis">Synopsis</label> */}
                        <input
                            type="textfield"
                            required
                            onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Synopsis"
                        />
                        </div>
                    </div>
                    <div className="alignRight">
                        <Button
                         className="btn" bg="dark" variant="dark"
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewArticle}
                        >Submit</Button>
                    </div>
              
            </Form>
        </>
    );

}

export default NewsForm