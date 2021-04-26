import React from "react";
import CoachPage from "./CoachPage.jsx";

it("renders the coach page component correctly", () => {
  const { container } = render(<CoachPage match={{params: 'test'}}/>);
  expect(container).toMatchSnapshot();
});
