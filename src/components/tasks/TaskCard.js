import React from "react";
import './Task.css'

const TaskCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-taskname">{props.task.name}</span>
        </h3>
        <p>Expected Completion Date: {props.task.completionDate}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/tasks/${props.task.id}/edit`)}
        >
          Edit
        </button>
        {props.deleteTask && (
          <button type="button" onClick={() => props.deleteTask(props.task.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
