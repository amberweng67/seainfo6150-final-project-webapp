import React from "react";
import FindCoach from "./FindCoach.jsx";

it("renders the find coach component correctly", () => {
  const { container } = render(<FindCoach />);
  expect(container).toMatchSnapshot();
});
