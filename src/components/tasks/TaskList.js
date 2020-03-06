import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";
import './TaskList.css'

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return TaskManager.getAll().then(tasksFromAPI => {
      setTasks(tasksFromAPI);
    });
  };

  const deleteTask = id => {
    TaskManager.delete(id).then(() => TaskManager.getAll().then(setTasks));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/tasks/new");
          }}
        >
          New Task
        </button>
      </section>
      <div className="container-cards">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;