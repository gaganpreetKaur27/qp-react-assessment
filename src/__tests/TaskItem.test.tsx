import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { TaskItem } from "../components/TaskItem";

describe("TaskItem component", () => {
  const completeTaskFn = jest.fn();
  const removeTaskFn = jest.fn();
  const mockIndex = 0;
  const taskItemData = {
    title: "",
    completed: false,
  };

  it("TaskItem matches snapshot", () => {
    const { asFragment } = render(
      <TaskItem
        task={taskItemData}
        index={0}
        completeTask={completeTaskFn}
        removeTask={removeTaskFn}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button with correct text and triggers completeTask function on click", async () => {
    const { getByTestId } = render(
      <TaskItem
        task={taskItemData}
        index={mockIndex}
        completeTask={completeTaskFn}
        removeTask={removeTaskFn}
      />
    );
    const button = getByTestId("complete-btn");
    // Act
    fireEvent.click(button);
    // Assert
    await waitFor(() => {
      // Assert
      expect(completeTaskFn).toHaveBeenCalledWith(mockIndex);
    });
  });
});
