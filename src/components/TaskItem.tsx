import React from "react";
//utils
import { TaskProps } from "../utils/types/TaskTypes";
import "../utils/css/styles.css";

export const TaskItem: React.FC<TaskProps> = ({
  task,
  index,
  completeTask,
  removeTask,
}) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
      key={index}
    >
      <span>{task.title}</span>
      <button
        className="button-container"
        style={{ background: "red" }}
        onClick={() => removeTask(index)}
      >
        x
      </button>
      <button
        data-testID="complete-btn"
        className={
          !task.completed ? "checkbox-button-pending" : "button-container"
        }
        onClick={() => completeTask(index)}
      >
        {task.completed ? "Completed" : ""}
      </button>
    </div>
  );
};
