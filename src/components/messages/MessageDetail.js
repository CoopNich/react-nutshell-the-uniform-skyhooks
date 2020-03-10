import React, { useState, useEffect } from "react";
import MessageManager from "../../modules/MessageManager";
//import {firstLetterCase} from '../../modules/helpers'
import "./MessageDetail.css";

const MessageDetail = props => {
  const [message, setMessage] = useState({ message: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MessageManager.get(props.messageId).then(message => {
      setMessage({
        message: message.message,
      });
      setIsLoading(false);
    });
  }, [props.messageId]);

  const handleDelete = () => {
    setIsLoading(true);
    MessageManager.delete(props.messageId).then(() =>
      props.history.push("/messages")
    );
  };
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {message.message}
        </h3>
        
      </div>
    </div>
  );

};

export default MessageDetail; 