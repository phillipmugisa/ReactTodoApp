// react
import React, { useContext, useState, useRef } from "react";

// context
import { AppContext } from "../hooks/appContext";

const TaskCardInput = () => {
  const { handleTaskChange } = useContext(AppContext);

  const [task, setTask] = useState(null);
  const formElem = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task == null && /([^\s])/.test(task) && task === undefined) {
      return;
    }

    const newtask = {
      name: task,
      status: "pending",
      created_on: new Date().toLocaleDateString()
    };
    handleTaskChange(newtask);
    formElem.current.reset();
  };

  const handleEnterPress = (e) => {
    if (!task) return;
    if (e.key === "Enter" && /([^\s])/.test(task)) {
      console.log(task);
      handleSubmit(e);
    }
  };

  return (
    <form
      action=""
      className="card-form grid grid-row"
      onSubmit={handleSubmit}
      ref={formElem}
    >
      <div className="form-group grid">
        <input
          type="text"
          name="Task Name"
          id=""
          placeholder="Create New Task"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleEnterPress}
          required={true}
        />
      </div>
      <div className="form-group grid">
        <input className="btn primary bdr-5" type="submit" value="Create" />
      </div>
    </form>
  );
};

export default TaskCardInput;
