// react
import React, { useContext, useEffect } from "react";

// context
import { AppContext } from "../hooks/appContext";

const RecentTasks = () => {
  const { tasks } = useContext(AppContext);

  useEffect(() => {}, [tasks]);

  return (
    <div className="card-body grid">
      <h3 className="body-title">Recent Tasks</h3>
      <div className="recent-task grid">
        <ul className="task-list-header grid grid-row">
          <li>Name</li>
          <li>Created On</li>
          <li>Status</li>
          {/* <li>Edit</li> */}
        </ul>
        {/* task Card */}
        {tasks &&
          tasks.map((task) => (
            <TaskCard key={`${task.created_on} - ${task.name}`} {...task} />
          ))}
        {/* No recent items */}
        {!tasks && <p className="error-msg">New Recent Tasks Found.</p>}
      </div>
    </div>
  );
};

const TaskCard = ({ name, created_on, status }) => {
  const { handleTaskChange } = useContext(AppContext);

  const handleComplete = () => {
    if (status === "pending") {
      handleTaskChange({
        name: name,
        status: "complete",
        created_on: new Date().toLocaleDateString()
      });
    }
  };

  return (
    <ul
      className="task-list-item grid grid-row"
      onClick={() => handleComplete()}
    >
      <li>{name}</li>
      <li>{created_on}</li>
      <li>{status}</li>
      {/* // <li>Edit</li> */}
    </ul>
  );
};

export default RecentTasks;
