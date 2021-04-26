import React from "react";
import SignUp from "./SignUp";

describe("SignUp tests", () => {
  it("renders correctly", () => {
    const { container } = render(<SignUp />);
    expect(container).toMatchSnapshot();
  });
});
