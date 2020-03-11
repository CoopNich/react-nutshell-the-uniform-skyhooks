import React, { useState } from "react";
import TaskEditForm from "./TaskEditForm";

const TaskCard = props => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-taskname">
            {isEditing ? (
              <TaskEditForm
                task={props.task}
                setIsEditing={setIsEditing}
              />
            ) : (
              <p onClick={() => setIsEditing(true)}>{props.task.name}</p>
            )}
          </span>
        </h3>
        <p>Completion Date: {props.task.completionDate}</p>
        {props.deleteTask && (
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                props.deleteTask(props.task.id);
            }}
          >
            Delete
          </button>
        )}
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={false}
              onChange={() => props.updateTask(props.task)}
            />
            Complete
          </label>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
