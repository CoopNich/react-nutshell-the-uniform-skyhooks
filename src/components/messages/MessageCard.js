import { Link } from "react-router-dom";
import React from "react";


const MessageCard = props => {
  const currentUserId = parseInt(sessionStorage.getItem("credentials"))
  return (
    <div>
      <div className="card-content">
        <h2> 
          <span className="card-message">{props.message.user.username}: {props.message.message}</span>
        </h2>
        
        
        <Link to={`/messages/${props.message.id}`}>
          
        </Link>
      </div>
      {
        (currentUserId === props.message.userId)
        ?       <button
        type="button"
        onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}
      >
        Edit
      </button>
      : null
      }
    </div>
  );
};

export default MessageCard;
