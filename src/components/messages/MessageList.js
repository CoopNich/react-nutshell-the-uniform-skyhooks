import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard";
import MessageManager from "../../modules/MessageManager";

const MessageList = props => {

  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return MessageManager.getAll().then(messagesFromAPI => {
      console.log(messagesFromAPI);
      setMessages(messagesFromAPI);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);


  const deleteMessage= id => {
    MessageManager.delete(id).then(() =>
      MessageManager.getAll().then(setMessages)
    );
  };

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => props.history.push("/messages/new")}
        >
          Submit Message
        </button>
      </section>
       <div className="container-cards">
        {messages.map(message => (
          <MessageCard
          key={message.id}
          message={message}
          deleteMessage={deleteMessage}
          {...props}
          />
  
        ))}
    
      </div>  
      
    </>
  );
};

export default MessageList;

 