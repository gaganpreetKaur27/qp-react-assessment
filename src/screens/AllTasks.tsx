import React, { useState, useEffect, useCallback } from "react";
//components
import { TaskItem } from "../components/TaskItem";
import { CreateTask } from "../components/CreateTask";
//utils
import { TaskItemProp } from "../utils/types/TaskTypes";
import "../utils/css/styles.css";

export const AllTasks = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "This is sample completed task",
      completed: true,
    },
    {
      title: "This is a pending task",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed)?.length);
  }, [tasks]);

  const addTask = useCallback(
    (title: string) => {
      const newTasks = [...tasks, { title, completed: false }];
      setTasks(newTasks);
    },
    [tasks]
  );

  const completeTask = useCallback(
    (index: number) => {
      const newTasks = [...tasks];

      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    },
    [tasks]
  );

  const removeTask = useCallback(
    (index: number) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    },
    [tasks]
  );

  return (
    <div className="todo-container">
       <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
      {tasksRemaining > 0? <div className="header">Pending Items: ({tasksRemaining})</div> : 
      <div className="header">My Tasks</div>
      }
      
      <div className="tasks">
        {tasks.map((task: TaskItemProp, index: number) => (
          <TaskItem
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
     
    </div>
  );
};
