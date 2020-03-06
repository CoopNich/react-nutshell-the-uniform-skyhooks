import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";

const TaskList = props => {
  const [task, setTasks] = useState([]);

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




    
  )
};
