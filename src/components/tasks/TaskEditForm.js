import React, { useState, useEffect } from "react";
import TaskManager from "../../modules/TaskManager";

const TaskEditForm = props => {
  const [task, setTask] = useState({
    name: "",
    completionDate: "",
    isComplete: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const updateExistingTask = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedTask = {
      id: props.match.params.taskId,
      name: task.name,
      completionDate: task.completionDate,
      isComplete: task.isComplete
    };

    TaskManager.update(editedTask).then(() => props.history.push("/tasks"));
  };

  useEffect(() => {
    TaskManager.get(props.match.params.taskId).then(task => {
      setTask(task);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="Task name">Task Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={task.name}
            />
          </div>
          <button
            type="button"
            disabled={isLoading}
            onClick={updateExistingTask}
            className="btn btn-primary"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default TaskEditForm;
