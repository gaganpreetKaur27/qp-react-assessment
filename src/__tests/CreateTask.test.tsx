import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CreateTask } from "../components/CreateTask";

describe("CreateTask component", () => {
  const addTaskMock = jest.fn();

  it("CreateTask matches snapshot", () => {
    const { asFragment } = render(<CreateTask addTask={addTaskMock} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("CreateTask update input field value", () => {
    const { getByPlaceholderText } = render(
      <CreateTask addTask={addTaskMock} />
    );
    const inputField = getByPlaceholderText(
      "Add a new task to the list.. :)"
    ) as HTMLInputElement;
    // Act
    fireEvent.change(inputField, { target: { value: "New task" } });
    // Assert
    expect(inputField.value).toBe("New task");
  });
});
