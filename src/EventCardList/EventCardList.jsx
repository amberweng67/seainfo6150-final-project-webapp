import React from "react";
import styles from './EventCardList.module.css';
import EventCard from '../EventCard/EventCard';

const EventCardList = ({ cardList }) => {
  if (!cardList) {
    return null;
  }
  if (cardList.length === 0) {
    return 'There is no event data right now';
  }

  return (
    <div className={styles.listContainer}>
      {cardList.map(card => <EventCard key={card.id} card={card} />)}
    </div>
  );
};


export default EventCardList;
