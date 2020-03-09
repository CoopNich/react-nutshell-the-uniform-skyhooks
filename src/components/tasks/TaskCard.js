import React from "react";

const TaskCard = props => {
  const handleCheckboxChange = () => {
    console.log("clicked checkbox");
  };

      return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-taskname">
              <p
                onClick={() =>
                  props.history.push(`/tasks/${props.task.id}/edit`)
                }
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
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
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
                value="isComplete"
                // checked={}
                onChange={handleCheckboxChange}
              />
              Complete
            </label>
          </div>
        </div>
      </div>
    );
 };
export default TaskCard;
