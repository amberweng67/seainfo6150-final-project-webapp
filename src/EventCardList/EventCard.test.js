import React from "react";
import EventCardList from "./EventCardList.jsx";

const CARD_LIST = [
  {
    "id":"90e2b43a-3183-50e9-b75b-3af7e4765f18",
    "title":"potatoes",
    "time":"12/4/2069",
    "location":"Slovakia",
    "intro":"volume supply poor tongue camp decide mirror turn trunk fully everything parts realize pony shelter see crop numeral clay doubt brush track great cabin",
    "host":"Larry Cohen"
  },
  {
    "id":"df85b6e5-dcf2-5be2-a0e5-0905434620db",
    "title":"star",
    "time":"5/5/2051",
    "location":"Papua New Guinea",
    "intro":"fairly dirt location community he back officer shallow into source crew helpful feel paragraph snake sweet poetry dress driver terrible rays especially shut managed",
    "host":"Jason McBride"
  }
];

it("renders the event card component correctly", () => {
  const { container } = render(<EventCardList cardList={CARD_LIST}/>);
  expect(container).toMatchSnapshot();
});
