import React from "react";
import Profile from "./Profile.jsx";

it("renders the profile component correctly", () => {
  const { container } = render(<Profile user={'test'} coachList={[]}/>);
  expect(container).toMatchSnapshot();
});
