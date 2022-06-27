// react
import React from "react";

// components
import TaskCardHeader from "./taskCardHeader";
import TaskCardInput from "./taskCardInput";
import RecentTasks from "./recentTasks";

const TaskAppCard = () => {
  return (
    <div className="task-card grid bdr-20">
      {/* card header */}
      <TaskCardHeader />
      {/* card task input */}
      <TaskCardInput />
      {/* recent tasks */}
      <RecentTasks />
    </div>
  );
};

export default TaskAppCard;
