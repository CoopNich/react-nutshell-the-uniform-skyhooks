import { Link } from "react-router-dom";
import React from "react";


const MessageCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-message">{props.message.message}</span>
        </h3>
        
        <button
          type="button"
          onClick={() => props.deleteAnimal(props.message.id)}
        >
          Delete Message
        </button>
        <Link to={`/animals/${props.message.id}`}>
          <button>Message</button>
        </Link>
      </div>
      <button
        type="button"
        onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default MessageCard;
