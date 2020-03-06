import React, { useState } from "react";
import TaskManager from "../../modules/TaskManager";

const TaskForm = props => {
  const [task, setTask] = useState({ name: "", completionDate: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...tasks };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const constructNewTask = evt => {
    evt.preventDefault();
    if (task.name === "" || task.completionDate === "") {
      window.alert("Please input a task name and expected completion date");
    } else {
      setIsLoading(true);

      TaskManager.post(task).then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="TaskName"
            />
            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="completionDate"
              placeholder="completionDate"
            />
            <label htmlFor="completionDate">Expected Completion Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewTask}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm;
