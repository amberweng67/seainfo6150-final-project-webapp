import React from "react";
import Login from "./Login.jsx";

it("renders the login component correctly", () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});
