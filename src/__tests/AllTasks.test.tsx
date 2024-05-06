import React from "react";
import { render } from "@testing-library/react";
import { AllTasks } from "../screens/AllTasks";

describe("AllTasks component", () => {
  it("AllTasks matches snapshot", () => {
    const { asFragment } = render(<AllTasks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
