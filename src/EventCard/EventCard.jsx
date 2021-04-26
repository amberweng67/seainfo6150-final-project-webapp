import React from "react";
import styles from './EventCard.module.css';

const EventCard = ({card}) => {
  return (
    <div className={styles.cardContainer}>
      <div>{card.title.toUpperCase()}</div>
      <div><span role="img" aria-label="calendar icon for time">📆</span> {card.time}</div>
      <div><span role="img" aria-label="pin icon for location">📌</span> {card.location}</div>
      <div>{card.intro}</div>
      <div><span role="img" aria-label="small icon for host">😁</span> {card.host}</div>
    </div>
  );
};

export default EventCard;