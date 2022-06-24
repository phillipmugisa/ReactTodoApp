// react
import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const getSavedTask = () => {
    return JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : null;
  };

  const [tasks, setTasks] = useState(getSavedTask());

  const handleTaskChange = (task) => {
    if (task === null) {
      setTasks(null);
      localStorage.setItem("tasks", null);
    } else {
      if (task.status === "complete") {
        setTasks((tasks) => [
          ...tasks.filter(
            (obj) =>
              !(obj.name === task.name && obj.created_on === task.created_on)
          ),
          task
        ]);
      } else {
        if (tasks === null) {
          setTasks((tasks) => [task]);
        } else {
          setTasks((tasks) => [task, ...tasks]);
        }
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  useEffect(() => {}, [tasks]);

  return (
    <AppContext.Provider
      value={{ handleTaskChange: handleTaskChange, tasks: tasks }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
