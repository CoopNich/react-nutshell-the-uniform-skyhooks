import React, { useState } from "react";
import TaskManager from "../../modules/TaskManager";

const TaskForm = props => {
  const [tasks, setTask] = useState({ name: "", completionDate: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...tasks };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const constructNewTask = evt => {
    evt.preventDefault();
    if (tasks.name === "" || tasks.completionDate === "") {
      window.alert("Please input a task name and expected completion date");
    } else {
      setIsLoading(true);

      TaskManager.post(tasks).then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Task Name </label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Task Name"
            />
            <label htmlFor="completionDate">Complete By</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="completionDate"
              placeholder="completionDate"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewTask}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm;
