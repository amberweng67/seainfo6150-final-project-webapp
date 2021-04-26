import React from "react";
import CoachCard from "./CoachCard.jsx";

const CARD = {
  "id": "a45e2d9c-cc14-5d54-844f-c6da44f94d0f",
  "name": "Grace Lynch",
  "title": "Senior Product Manager",
  "company": "She inc",
  "intro": "Taught block rear previous pain though happily war wealth view image hay dull proud health eventually building food citizen necessary angry circus total middle"
};

it("renders the coachcard component correctly", () => {
  const { container } = render(<CoachCard card={CARD} />);
  expect(container).toMatchSnapshot();
});
