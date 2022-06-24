// react
import React, { useContext } from "react";

// context
import { AppContext } from "../hooks/appContext";

const TaskCardHeader = () => {
  const { handleTaskChange } = useContext(AppContext);

  return (
    <div className="card-header grid grid-row justifyspacebtn">
      <h2 className="app-title">My Todo App</h2>
      <button
        className="btn round primary bdr-50"
        onClick={() => handleTaskChange(null)}
      >
        Reset
      </button>
    </div>
  );
};

export default TaskCardHeader;
