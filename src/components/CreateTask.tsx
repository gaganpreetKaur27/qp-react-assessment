import React, { useCallback, useState } from "react";
//utils
import { CreateTaskProp } from "../utils/types/TaskTypes";
import "../utils/css/styles.css";

export const CreateTask: React.FC<CreateTaskProp> = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleAddTask = useCallback(() => {
    if (!value) return;
    addTask(value);
    setValue("");
  },[value]);

  return (
  <div className="add-task-container">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task to the list.. :)"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-button-style" onClick={handleAddTask}>
       Add Task
    </button>
    </div>
  );
};
