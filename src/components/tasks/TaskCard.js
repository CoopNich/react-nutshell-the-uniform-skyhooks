import React from "react";

const TaskCard = props => {
  //function that changes isComplete from false to true onChange, and then re-renders the task list
  const taskComplete = () => {
    console.log("Clicked Checkbox");
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-taskname">
            <p
              onClick={() => props.history.push(`/tasks/${props.task.id}/edit`)}
            >
              {props.task.name}
            </p>
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
              onChange={taskComplete}
            />
            Complete
          </label>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
