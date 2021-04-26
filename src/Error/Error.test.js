import React from "react";
import Error from "./Error.jsx";

it("renders the error component correctly", () => {
  const { container } = render(<Error />);
  expect(container).toMatchSnapshot();
});
