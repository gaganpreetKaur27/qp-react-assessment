export interface CreateTaskProp {
  addTask: (value: string) => void;
}

export interface TaskItemProp {
  title: string;
  completed: boolean;
}

export interface TaskProps {
  task: TaskItemProp;
  index: number;
  completeTask: (index: number) => void;
  removeTask: (index: number) => void;
}
