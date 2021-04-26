import React from "react";
import EventCard from "./EventCard.jsx";

const CARD =
{
  "id": "90e2b43a-3183-50e9-b75b-3af7e4765f18",
  "title": "potatoes",
  "time": "12/4/2069",
  "location": "Slovakia",
  "intro": "volume supply poor tongue camp decide mirror turn trunk fully everything parts realize pony shelter see crop numeral clay doubt brush track great cabin",
  "host": "Larry Cohen"
};

it("renders the event card component correctly", () => {
  const { container } = render(<EventCard card={CARD} />);
  expect(container).toMatchSnapshot();
});
