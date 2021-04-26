import React from "react";
import App from "./App";

describe("App tests", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
