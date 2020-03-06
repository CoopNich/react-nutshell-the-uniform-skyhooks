import React, { useState, useEffect } from "react";
import MessageManager from "../../modules/MessageManager";
import {firstLetterCase} from '../../modules/helpers'

const MessageDetail = props => {
  const [message, setMessage] = useState({ message: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MessageManager.get(props.messageId).then(message => {
      setAnimal({
        name: message.message,
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
          Message: <span style={{ color: "darkslategrey" }}>{firstLetterCase(message.message)}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );

};

export default MessageDetail;