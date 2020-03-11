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
      id: props.task.id,
      name: task.name,
      completionDate: task.completionDate,
      isComplete: task.isComplete,
      userId: task.userId
    };

    TaskManager.update(editedTask)
    .then(()=>{
      props.setIsEditing(false)
    });
  };

  const keyPress = evt => {
    if (evt.keyCode == 13) {
      updateExistingTask(evt);
    }
  };

  useEffect(() => {
      setTask(props.task);
      setIsLoading(false);
    }, []);

  return (
    <>
      <form>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              onKeyDown={keyPress}
              id="name"
              value={task.name}
            />
          </div>
      </form>
    </>
  );
};

export default TaskEditForm;
