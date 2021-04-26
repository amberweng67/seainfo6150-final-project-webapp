import React from "react";
import CoachCardList from "./CoachCardList.jsx";

const CARD_LIST = [
  {
     "id": "a45e2d9c-cc14-5d54-844f-c6da44f94d0f",
     "name": "Grace Lynch",
     "title": "Senior Product Manager",
     "company": "She inc",
     "intro": "Taught block rear previous pain though happily war wealth view image hay dull proud health eventually building food citizen necessary angry circus total middle"
   },
   {
     "id": "9e4c2e5c-3856-5530-90af-2d603d39c271",
     "name": "Minerva Waters",
     "title": "Product Manager",
     "company": "Stopped inc",
     "intro": "Travel enough each send income grew zoo duck complete sit grain colony after distance toward heart involved date accurate cat vessels carefully whale shoe"
   }
];

it("renders the coach card list component correctly", () => {
  const { container } = render(<CoachCardList cardList={CARD_LIST}/>);
  expect(container).toMatchSnapshot();
});
